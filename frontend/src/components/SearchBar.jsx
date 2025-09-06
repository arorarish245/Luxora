import React, { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search query:", query);
        // Later connect to backend API to fetch products
    };

    return (
        <form onSubmit={handleSearch} className="mb-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full md:w-1/2 p-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FCA311]"
            />
        </form>
    );
}
