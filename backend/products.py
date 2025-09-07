from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field
from bson import ObjectId
from typing import List, Optional
from database import products_collection

router = APIRouter()

# Pydantic model for product
class Product(BaseModel):
    name: str
    description: Optional[str] = ""
    price: float
    category: str
    image: Optional[str] = ""  # image URL
    in_stock: Optional[bool] = True

# Helper to convert ObjectId to string
def product_helper(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "description": product.get("description", ""),
        "price": product["price"],
        "category": product["category"],
        "image": product.get("image", ""),
        "in_stock": product.get("in_stock", True),
    }

# Create a product
@router.post("/add", response_model=dict)
def add_product(product: Product):
    result = products_collection.insert_one(product.dict())
    return {"message": "Product added successfully", "id": str(result.inserted_id)}

# Get all products with optional search
@router.get("/", response_model=List[dict])
def get_products(search: str = Query(None, description="Search products by name")):
    query = {}
    if search:
        query = {"name": {"$regex": search, "$options": "i"}}  # case-insensitive match
    products = products_collection.find(query)
    return [product_helper(p) for p in products]

# Get product by id
@router.get("/{product_id}", response_model=dict)
def get_product(product_id: str):
    product = products_collection.find_one({"_id": ObjectId(product_id)})
    if product:
        return product_helper(product)
    raise HTTPException(status_code=404, detail="Product not found")

# Update product
@router.put("/{product_id}", response_model=dict)
def update_product(product_id: str, updated_product: Product):
    result = products_collection.update_one(
        {"_id": ObjectId(product_id)},
        {"$set": updated_product.dict()}
    )
    if result.modified_count:
        return {"message": "Product updated successfully"}
    raise HTTPException(status_code=404, detail="Product not found")

# Delete product
@router.delete("/{product_id}", response_model=dict)
def delete_product(product_id: str):
    result = products_collection.delete_one({"_id": ObjectId(product_id)})
    if result.deleted_count:
        return {"message": "Product deleted successfully"}
    raise HTTPException(status_code=404, detail="Product not found")


