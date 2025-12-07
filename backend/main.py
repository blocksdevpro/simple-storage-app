from fastapi import FastAPI
from fastapi.routing import APIRouter
from routers.files import router as files_router

app = FastAPI(title="Simple Storage App", description="Simple Storage App", version="1.0.0", openapi_url="/openapi.json")


index_router = APIRouter()

@index_router.get("/")
async def read_root():
    return {"Hello": "World"}

app.include_router(index_router)
app.include_router(files_router)
