from models.files import CreateFile
from fastapi import APIRouter
from deps import FilesServiceDep


router = APIRouter(prefix="/files", tags=["Files"])


@router.get("")
async def read_files(service: FilesServiceDep):
    return service.read_files()

@router.post("")
async def create_file(file: CreateFile, service: FilesServiceDep):
    return service.create_file(file)

@router.delete("")
async def delete_file(id: int, service: FilesServiceDep):
    return service.delete_file(id)

@router.put("")
async def update_file(id: int, file: CreateFile, service: FilesServiceDep):
    return service.update_file(id, file)