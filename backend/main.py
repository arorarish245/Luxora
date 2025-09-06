from fastapi import FastAPI

# create app instance
app = FastAPI()

# test route
@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}
