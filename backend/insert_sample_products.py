from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)

db = client["Luxora"]
products_collection = db["products"]

sample_products = [
    # Electronics
    {"name": "Wireless Headphones", "description": "Noise-cancelling over-ear headphones", "price": 1200.5, "category": "Electronics", "image": "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "in_stock": True},
    {"name": "Smart Watch", "description": "Fitness tracking and notifications", "price": 990.99, "category": "Electronics", "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "in_stock": True},
    {"name": "Bluetooth Speaker", "description": "Portable wireless speaker with bass", "price": 550.0, "category": "Electronics", "image": "https://images.unsplash.com/photo-1544765293-9bc7486a8dfa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1dGVvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", "in_stock": True},
    {"name": "Laptop Stand", "description": "Ergonomic aluminum laptop stand", "price": 3000.0, "category": "Electronics", "image": "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "in_stock": True},
    {"name": "USB-C Hub", "description": "Multiport USB-C hub for laptops", "price": 350.0, "category": "Electronics", "image": "https://images.unsplash.com/photo-1616578273577-5d54546f4dec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNiJTIwYyUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D", "in_stock": True},

    # Fashion
    {"name": "Leather Jacket", "description": "Stylish men’s leather jacket", "price": 1500.0, "category": "Fashion", "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D", "in_stock": True},
    {"name": "Shoes", "description": "Comfortable and durable running shoes", "price": 800.0, "category": "Fashion", "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hvZXN8ZW58MHx8MHx8fDA%3D", "in_stock": True},
    {"name": "Denim Jeans", "description": "Classic fit denim jeans", "price": 450.0, "category": "Fashion", "image": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnN8ZW58MHx8MHx8fDA%3D", "in_stock": True},
    {"name": "T-shirt Pack", "description": "Pack of 3 cotton T-shirts", "price": 250.0, "category": "Fashion", "image": "https://images.unsplash.com/photo-1716541424935-e28adbd63ca3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydCUyMHBhY2t8ZW58MHx8MHx8fDA%3D", "in_stock": True},
    {"name": "Sneakers", "description": "Casual everyday sneakers", "price": 600.0, "category": "Fashion", "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D", "in_stock": True},

    # Home & Living
    {"name": "Coffee Maker", "description": "Brew perfect coffee at home", "price": 6500.0, "category": "Home & Living", "image": "https://images.unsplash.com/photo-1608354580875-30bd4168b351?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "in_stock": True},
    {"name": "Sofa Set", "description": "Comfortable 3-seater sofa", "price": 4500.0, "category": "Home & Living", "image": "https://plus.unsplash.com/premium_photo-1661375242664-18a5d23ef231?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D", "in_stock": True},
    {"name": "Wall Lamp", "description": "Modern decorative wall lamp", "price": 250.0, "category": "Home & Living", "image": "https://images.unsplash.com/photo-1668255310325-20c3929913e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbCUyMGxhbXB8ZW58MHx8MHx8fDA%3D", "in_stock": True},
    {"name": "Floor Rug", "description": "Soft and durable floor rug", "price": 260.0, "category": "Home & Living", "image": "https://plus.unsplash.com/premium_photo-1725456679380-84fa1395d209?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvb3IlMjBydWd8ZW58MHx8MHx8fDA%3D", "in_stock": True},
    {"name": "Curtains", "description": "Elegant blackout curtains", "price": 400.0, "category": "Home & Living", "image": "https://plus.unsplash.com/premium_photo-1706800283450-ae444a092aa8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VydGFpbnN8ZW58MHx8MHx8fDA%3D", "in_stock": True},

    # Beauty
    {"name": "Makeup Kit", "description": "All-in-one makeup kit", "price": 4000.0, "category": "Beauty", "image": "https://images.unsplash.com/photo-1600634999623-864991678406?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwa2l0fGVufDB8fDB8fHwwg", "in_stock": True},
    {"name": "Hair Dryer", "description": "Fast-drying hair dryer with cool mode", "price": 3500.0, "category": "Beauty", "image": "https://images.unsplash.com/photo-1712481846916-8f73ffc2067a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMGRyeWVyfGVufDB8fDB8fHww", "in_stock": True},
    {"name": "Face Cream", "description": "Moisturizing face cream for all skin types", "price": 200.0, "category": "Beauty", "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZSUyMGNyZWFtfGVufDB8fDB8fHww", "in_stock": True},
    {"name": "Lipstick Set", "description": "Long-lasting matte lipsticks", "price": 3000.0, "category": "Beauty", "image": "https://plus.unsplash.com/premium_photo-1674215669132-a1e268309b59?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlwc3RpY2slMjBzZXR8ZW58MHx8MHx8fDA%3D", "in_stock": True},
]


# Insert all sample products
result = products_collection.insert_many(sample_products)
print(f"{len(result.inserted_ids)} sample products inserted successfully ✅")