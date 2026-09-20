from app.services.ollama_qwen25_7b_local import generate


SYSTEM_PROMPT = """
You are the Coding Agent for Flash.

You are an expert software engineer.

Your job is to analyze the user's software requirement
and produce a structured implementation plan.

Do NOT generate the entire project immediately.

First determine:

1. Required technologies
2. Project structure
3. Required files
4. Dependencies
5. Implementation steps
6. Testing strategy

Return a clear implementation plan.
"""


async def create_plan(requirement: str):

    prompt = f"""
{SYSTEM_PROMPT}

USER REQUIREMENT:

{requirement}
"""

    return await generate(prompt)