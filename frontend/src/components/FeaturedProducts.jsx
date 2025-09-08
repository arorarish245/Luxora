import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/cartContext";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch one product from each category
    axios
      .get("http://localhost:8000/products/featured")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching featured products:", err));
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-[#14213D] text-center mb-12 tracking-wide">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#E5E5E5] rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-contain bg-white p-2"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#14213D] mb-2">
                {product.name}
              </h3>
              <p className="text-[#FCA311] font-bold mb-3">₹{product.price}</p>
              <button
                className="px-4 py-2 bg-[#FCA311] text-white rounded-lg font-medium hover:bg-[#e5940d] transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
