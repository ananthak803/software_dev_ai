from llm.model import llm
from agents.plan_schema import DevelopmentPlan

planner_llm = llm.with_structured_output(DevelopmentPlan)


def planner_agent(state):

    requirement = state["user_requirement"]

    # Checkpoint 1
    state["status"] = "ANALYZING_REQUIREMENT"

    prompt = f"""
You are the Planner Agent of an AI software development platform.

Your job is to analyze the developer's requirement and create
a clear development plan.

Developer requirement:
{requirement}

Create a development plan containing:

1. Project type
2. Recommended technologies
3. Main components
4. Development tasks
5. Testing requirements

Do NOT write the actual code.

Focus only on planning.
"""

    # Checkpoint 2
    state["status"] = "GENERATING_PLAN"
    print("GENERATING_PLAN")

    plan = planner_llm.invoke(prompt)

    # Checkpoint 3
    state["status"] = "FINALIZING_PLAN"
    print("FINALIZING_PLAN")


    state["plan"] = plan.model_dump()

    # Checkpoint 4
    state["status"] = "PLANNED"
    print("PLANNED")


    return state