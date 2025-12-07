from fastapi import FastAPI, Request
from fastapi.routing import APIRouter
from routers.files import router as files_router

app = FastAPI(title="Simple Storage App", description="Simple Storage App", version="1.0.0", openapi_url="/openapi.json")

@app.middleware("http")
async def log_requests(request: Request, call_next):
    body = await request.body()
    print("⭐ Incoming Request Body:", body.decode("utf-8"))

    response = await call_next(request)
    print("⬅ Response Status:", response.status_code)
    return response

index_router = APIRouter()

@index_router.get("/")
async def read_root():
    return {"Hello": "World"}

app.include_router(index_router)
app.include_router(files_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
