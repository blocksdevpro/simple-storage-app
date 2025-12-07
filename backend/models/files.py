from pydantic import BaseModel


class File(BaseModel):
    id: int
    name: str
    size: int

# CreateFile should be from File but without id

class CreateFile(BaseModel):
    name: str
    size: int