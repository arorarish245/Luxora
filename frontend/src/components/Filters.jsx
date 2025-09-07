import React from "react";

const categories = ["Electronics", "Fashion", "Home & Living", "Beauty"];

export default function Filters({ filters, setFilters }) {
  const handleCategoryChange = (cat) => {
    const newCategories = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    setFilters({ ...filters, categories: newCategories });
  };

  return (
    <div className="w-full md:w-64 bg-white rounded-2xl p-4 shadow-md mb-6 md:mb-0 sticky top-20 max-h-[45vh] overflow-y-auto md:mt-18">
      <h2 className="font-bold text-[#14213D] mb-4 text-lg">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <ul>
          {categories.map((cat, idx) => (
            <li key={idx} className="mb-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-[#FCA311] transition">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="accent-[#FCA311] w-4 h-4"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-20 p-1 border rounded"
            value={filters.minPrice || ""}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value || null })
            }
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-20 p-1 border rounded"
            value={filters.maxPrice || ""}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value || null })
            }
          />
        </div>
      </div>
    </div>
  );
}
