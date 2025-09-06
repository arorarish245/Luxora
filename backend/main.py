from fastapi import FastAPI
from database import users_collection

app = FastAPI()

@app.get("/")
def root():
    # simple test: count documents in users collection
    count = users_collection.count_documents({})
    return {"message": "MongoDB connected successfully ✅", "users_count": count}
