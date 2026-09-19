from typing import TypedDict

class DevelopmentState(TypedDict):
    project_id:str
    user_requirement:str
    plan:dict
    files:dict
    test_result:str
    review_result:str
    errors:list
    iteration:int
    status:str


