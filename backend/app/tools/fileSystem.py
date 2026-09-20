from pathlib import Path


PROJECT_ROOT = Path("../../projects").resolve()


def safe_path(project: str, file_path: str) -> Path:

    project_dir = (PROJECT_ROOT / project).resolve()

    target = (project_dir / file_path).resolve()

    if not str(target).startswith(str(project_dir)):
        raise ValueError("Invalid file path")

    return target


def list_files(project: str):

    project_dir = (PROJECT_ROOT / project).resolve()

    if not project_dir.exists():
        return []

    return [
        str(path.relative_to(project_dir))
        for path in project_dir.rglob("*")
        if path.is_file()
    ]


def read_file(project: str, file_path: str):

    path = safe_path(project, file_path)

    return path.read_text(encoding="utf-8")


def write_file(
    project: str,
    file_path: str,
    content: str
):

    path = safe_path(project, file_path)

    path.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    path.write_text(
        content,
        encoding="utf-8"
    )

    return {
        "success": True,
        "file": file_path
    }