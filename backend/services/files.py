from typing import List
from models.files import CreateFile, File


# Please make filesservice singleton so that it works with fastapi
class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]


class FilesService(metaclass=SingletonMeta):
    def __init__(self):
        self.files: List[File] = []
    
    def find(self, id: int):
        return next((file for file in self.files if file.id == id), None)
    
    def get_next_id(self):
        return max((file.id for file in self.files), default=0) + 1

    def read_files(self):
        return self.files[:10]

    def create_file(self, payload: CreateFile):
        item = File(id=self.get_next_id(), **payload.dict())
        self.files.append(item)
        return item
    
    def delete_file(self, id: int):
        self.files = [file for file in self.files if file.id != id]
        return True
    
    def update_file(self, id: int, payload: CreateFile):
        file = self.find(id)
        if not file:
            return None
        file.name = payload.name
        file.size = payload.size
        return file



