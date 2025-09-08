from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from bson import ObjectId
from database import db, users_collection, products_collection

router = APIRouter()
cart_collection = db["carts"] 

# Pydantic model for cart item
class CartItem(BaseModel):
    product_id: str
    quantity: int = 1

# Helper to fetch product details
def product_helper(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "price": product["price"],
        "image": product.get("image", ""),
    }

# Add item to cart
@router.post("/add/{user_id}", response_model=dict)
def add_to_cart(user_id: str, item: CartItem):
    cart = cart_collection.find_one({"user_id": user_id})
    if not cart:
        cart_collection.insert_one({"user_id": user_id, "items": [item.dict()]})
    else:
        # Check if product already in cart
        for i in cart["items"]:
            if i["product_id"] == item.product_id:
                i["quantity"] += item.quantity
                break
        else:
            cart["items"].append(item.dict())
        cart_collection.update_one({"user_id": user_id}, {"$set": {"items": cart["items"]}})
    return {"message": "Item added to cart"}

# Get user's cart
@router.get("/{user_id}", response_model=List[dict])
def get_cart(user_id: str):
    cart = cart_collection.find_one({"user_id": user_id})
    if not cart:
        return []
    items = []
    for i in cart["items"]:
        product = products_collection.find_one({"_id": ObjectId(i["product_id"])})
        if product:
            p = product_helper(product)
            p["quantity"] = i["quantity"]
            items.append(p)
    return items

# Remove item from cart
@router.delete("/remove/{user_id}/{product_id}", response_model=dict)
def remove_from_cart(user_id: str, product_id: str):
    cart = cart_collection.find_one({"user_id": user_id})
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    cart["items"] = [i for i in cart["items"] if i["product_id"] != product_id]
    cart_collection.update_one({"user_id": user_id}, {"$set": {"items": cart["items"]}})
    return {"message": "Item removed from cart"}
