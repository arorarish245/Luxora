import React from "react";
import ProductCard from "./ProductCard";

// Dummy data for now
const products = [
  { id: 1, name: "Smartphone", price: 499, image: "src/assets/images/electronics.jpg" },
  { id: 2, name: "T-Shirt", price: 29, image: "src/assets/images/clothes.webp" },
  { id: 3, name: "Sofa", price: 399, image: "src/assets/images/home.webp" },
  { id: 4, name: "Lipstick", price: 19, image: "src/assets/images/beauty.webp" },
];

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
