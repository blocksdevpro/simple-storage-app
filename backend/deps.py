from typing import Annotated
from fastapi import Depends
from services.files import FilesService


def get_files_service() -> FilesService:
    return FilesService()

FilesServiceDep = Annotated[FilesService, Depends(get_files_service)]
