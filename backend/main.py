from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth import router as auth_router
from products import router as products_router
from cart import router  as cart_router

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],  # allow GET, POST, PUT, DELETE, OPTIONS
    allow_headers=["*"],  # allow Content-Type, Authorization, etc.
)

# Include your routes
app.include_router(auth_router, prefix="/auth")
app.include_router(products_router, prefix="/products")
app.include_router(cart_router, prefix="/cart")

@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}
