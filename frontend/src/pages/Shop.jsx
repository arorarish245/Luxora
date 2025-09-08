import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import ProductsGrid from "../components/ProductsGrid";

export default function Shop() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromUrl = params.get("category");

  const [filters, setFilters] = useState({
    categories: categoryFromUrl ? [categoryFromUrl] : [],
    minPrice: null,
    maxPrice: null,
  });

  // Update filters if URL changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      categories: categoryFromUrl ? [categoryFromUrl] : [],
    }));
  }, [categoryFromUrl]);

  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <Navbar />

      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#14213D]">Shop All Products</h1>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-16 gap-6 mb-15">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="flex-1">
          <ProductsGrid filters={filters} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
