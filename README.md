# Luxora - E-Commerce Platform

Luxora is a modern, responsive e-commerce platform built with **React**, **Tailwind CSS**, and **FastAPI**. Users can browse products by categories, add items to the cart, and enjoy a smooth shopping experience.

## Features
- Authentication: Login / Sign Up (JWT-based)
- Browse products by categories (Electronics, Fashion, Home & Living, Beauty)
- Add/remove products to/from cart
- Beautiful notifications using SweetAlert2
- Filters for category and price


## Tech Stack
- Frontend: React, Tailwind CSS, React Router DOM
- Backend: FastAPI, MongoDB, Pydantic
- HTTP Requests: Axios
- Notifications: SweetAlert2

## Setup

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### Frontend
```bash
cd frontend
npm install
npm start
```
