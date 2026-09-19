from agents.planner import planner_agent


initial_state = {
    "project_id": "project_001",

    "user_requirement": """
    Build a REST API for a student management system.
    The backend should use Flask and PostgreSQL.
    It should support creating, reading, updating and deleting students.
    """,

    "plan": {},

    "files": {},

    "test_results": "",

    "review_result": "",

    "errors": [],

    "iteration": 0,

    "status": "STARTED"
}


final_state = planner_agent(initial_state)


print("\n========== PROJECT TYPE ==========\n")

print(final_state["plan"]["project_type"])


print("\n========== TECHNOLOGIES ==========\n")

for technology in final_state["plan"]["technologies"]:
    print("-", technology)


print("\n========== COMPONENTS ==========\n")

for component in final_state["plan"]["components"]:
    print("-", component)


print("\n========== DEVELOPMENT TASKS ==========\n")

for task in final_state["plan"]["tasks"]:
    print(f'{task["id"]}. {task["description"]}')


print("\n========== TESTING REQUIREMENTS ==========\n")

for test in final_state["plan"]["testing_requirements"]:
    print("-", test)


print("\nStatus:", final_state["status"])