from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from passlib.hash import bcrypt
from jose import jwt
import os
from database import users_collection

router = APIRouter()

JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")

class UserSignup(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Signup API
@router.post("/signup")
def signup(user: UserSignup):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = bcrypt.hash(user.password)
    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    })
    return {"message": "User created successfully"}

# Login API
@router.post("/login")
def login(user: UserLogin):
    db_user = users_collection.find_one({"email": user.email})
    if not db_user or not bcrypt.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = jwt.encode({"user_id": str(db_user["_id"])}, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return {"token": token, "name": db_user["name"], "email": db_user["email"]}
