import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-8">
        <h1 className="text-4xl font-bold text-[#14213D] mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-md">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-[#14213D]">{item.name}</h3>
                    <p className="text-[#FCA311] font-bold">₹{item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right font-bold text-xl text-[#14213D]">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
