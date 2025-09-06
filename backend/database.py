from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)

db = client["luxora_db"]
users_collection = db["users"]
items_collection = db["items"]
carts_collection = db["carts"]
