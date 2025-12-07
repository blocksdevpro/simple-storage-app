from pydantic import BaseModel


class File(BaseModel):
    id: int
    name: str
    size: str

# CreateFile should be from File but without id

class CreateFile(BaseModel):
    name: str = "image_404.png"
    size: str = "1kb"