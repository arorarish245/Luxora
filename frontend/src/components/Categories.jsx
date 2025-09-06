// Categories.jsx
import React from "react";

const categories = [
  { id: 1, name: "Electronics", image: "src/assets/images/electronics.webp" },
  { id: 2, name: "Fashion", image: "src/assets/images/clothes.webp" },
  { id: 3, name: "Home & Living", image: "src/assets/images/home.webp" },
  { id: 4, name: "Beauty", image: "src/assets/images/beauty.webp" },
];

export default function Categories() {
  return (
    <div className="bg-[#E5E5E5] py-16 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-[#14213D] text-center mb-12">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transform transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
