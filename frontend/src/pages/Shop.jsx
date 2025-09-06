import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductsGrid from "../components/ProductsGrid";

export default function Shop() {
  return (
    <div className="bg-[#E5E5E5] min-h-screen">
      <Navbar />

      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#14213D]">Shop All Products</h1>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 gap-6">
        <Filters />
        <div className="flex-1">
          <SearchBar />
          <ProductsGrid />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
