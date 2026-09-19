from llm.model import llm
from agents.code_schema import CodeGenerationResult


coder_llm = llm.with_structured_output(
    CodeGenerationResult
)


def coder_agent(state):

    # -----------------------------
    # CHECKPOINT 1
    # -----------------------------
    state["status"] = "CODING"
    print("CODING")

    requirement = state["user_requirement"]
    plan = state["plan"]
    print("plan")


    prompt = f"""
You are the Coding Agent in an AI software development platform.

Your responsibility is to implement the development plan
provided by the Planner Agent.

Developer requirement:
{requirement}

Development plan:
{plan}

Instructions:

1. Implement the required functionality from the development plan.
2. Generate complete source files.
3. Each file must have a clear relative path.
4. Each file must contain complete code.
5. Do not return explanations outside the structured output.
6. Do not leave TODO placeholders.
7. Follow good software engineering practices.
8. Generate only files necessary for the current implementation.
"""

    # -----------------------------
    # LLM CODE GENERATION
    # -----------------------------
    result = coder_llm.invoke(prompt)

    # -----------------------------
    # CHECKPOINT 2
    # -----------------------------
    state["status"] = "FINALIZING_CODE"
    print("FINALIZING_CODE")

    state["files"] = {
        file.path: file.content
        for file in result.files
    }

    # -----------------------------
    # CHECKPOINT 3
    # -----------------------------
    state["status"] = "CODE_GENERATED"
    print("CODE_GENERATED")

    return state