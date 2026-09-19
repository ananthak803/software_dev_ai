from agents.planner import planner_agent
from agents.coder import coder_agent


initial_state = {
    "project_id": "project_001",

    "user_requirement": """
    Build a REST API for a student management system.

    The backend should use Flask and PostgreSQL.

    The system should support:
    - Creating students
    - Reading students
    - Updating students
    - Deleting students
    """,

    "plan": {},

    "files": {},

    "test_results": "",

    "review_result": "",

    "errors": [],

    "iteration": 0,

    "status": "STARTED"
}


# -------------------------
# Planner
# -------------------------

state_after_planner = planner_agent(
    initial_state
)


print("\n========== PLANNER COMPLETE ==========\n")

print(
    state_after_planner["status"]
)


# -------------------------
# Coder
# -------------------------

final_state = coder_agent(
    state_after_planner
)


print("\n========== GENERATED FILES ==========\n")


for path, content in final_state["files"].items():

    print("\n-----------------------------------")
    print("FILE:", path)
    print("-----------------------------------")

    print(content)


print("\n====================================\n")

print("Status:", final_state["status"])