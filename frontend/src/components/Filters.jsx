import React from "react";

const categories = ["Electronics", "Fashion", "Home & Living", "Beauty"];

export default function Filters() {
  return (
    <div className="w-full md:w-64 bg-white rounded-2xl p-4 shadow-md mb-6 md:mb-0 sticky top-20">
  <h2 className="font-bold text-[#14213D] mb-4 text-lg">Filters</h2>

  <div className="mb-4">
    <h3 className="font-semibold mb-2">Category</h3>
    <ul>
      {categories.map((cat, idx) => (
        <li key={idx} className="mb-2">
          <label className="flex items-center gap-2 cursor-pointer hover:text-[#FCA311] transition">
            <input type="checkbox" className="accent-[#FCA311] w-4 h-4" />
            {cat}
          </label>
        </li>
      ))}
    </ul>
  </div>
</div>

  );
}
