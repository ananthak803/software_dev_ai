from fastapi import FastAPI, WebSocket,Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.services.ollama_qwen25_7b_local import generate
from app.agents.coding import create_plan
from app.database import Base, engine,get_db
from sqlalchemy.orm import Session
from app.models.conversation import Conversation
from app.models.message import Message
from typing import Optional

app=FastAPI(
    title="Flash",
    version="1.0"
)
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "name":"Flash",
        "status":"running"
    }

@app.get("/health")
async def health():
    return {
        "status":"ok"
    }

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    await websocket.send_json({
        "type": "system",
        "message": "Connected to Flash"
    })

    while True:
        message = await websocket.receive_text()

        await websocket.send_json({
            "type": "echo",
            "message": message
        })

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(
    request: ChatRequest,
    conversation_id: Optional[int] = None, # Make optional
    db: Session = Depends(get_db)
):
    conversation = None

    if conversation_id is not None:
        conversation = db.query(Conversation).filter(Conversation.id == conversation_id).first()

    if not conversation:
        conversation = Conversation(title="New Conversation")
        db.add(conversation)
        db.commit()
        db.refresh(conversation)

    user_msg = Message(
        conversation_id=conversation.id, # Guaranteed non-null integer
        role="user",
        content=request.message,
    )
    db.add(user_msg)
    db.commit()
    db.refresh(user_msg)

    try:
        response_text = await generate(request.message)
    except Exception as e:
        return {
            "conversation_id": conversation.id,
            "response": None,
            "error": "Agent failed to generate a response"
        }

    agent_msg = Message(
        conversation_id=conversation.id,
        role="agent",
        content=response_text,
    )
    db.add(agent_msg)
    db.commit()
    db.refresh(agent_msg)

    return {
        "conversation_id": conversation.id,
        "response": agent_msg.content,
        "user_msg": {
            "id": user_msg.id,
            "role": user_msg.role if isinstance(user_msg.role, str) else user_msg.role.value,
            "content": user_msg.content,
            "created_at": str(user_msg.created_at),
        },
        "agent_msg": {
            "id": agent_msg.id,
            "role": agent_msg.role if isinstance(agent_msg.role, str) else agent_msg.role.value,
            "content": agent_msg.content,
            "created_at": str(agent_msg.created_at),
        }
    }
class PlanRequest(BaseModel):
    requirement: str


@app.post("/api/plan")
async def plan(request: PlanRequest):

    result = await create_plan(
        request.requirement
    )

    return {
        "plan": result
    }