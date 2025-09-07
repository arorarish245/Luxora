import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/", {
        params: search ? { search } : {},
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [search]);

  return (
    <div>
      <SearchBar onSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
