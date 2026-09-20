import httpx


OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "qwen2.5-coder:7b"


async def generate(prompt: str) -> str:

    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": False,
        "keep_alive":"5m",
    }

    async with httpx.AsyncClient(timeout=300) as client:

        response = await client.post(
            OLLAMA_URL,
            json=payload
        )

        response.raise_for_status()

        data = response.json()

        return data["response"]