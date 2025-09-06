import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-2xl cursor-pointer">
  <img
  src={product.image}
  alt={product.name}
  className="w-full h-56 object-cover rounded-t-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg"
/>
  <div className="p-4">
    <h3 className="font-semibold text-[#14213D]">{product.name}</h3>
    <p className="text-[#FCA311] font-bold mt-2">${product.price}</p>
    <button className="mt-3 w-full bg-[#FCA311] text-white py-2 rounded-lg font-semibold hover:bg-[#e5940d] transition">
      Add to Cart
    </button>
  </div>
</div>

  );
}
