// CTASection.jsx
import React from "react";

export default function CTASection() {
  return (
    <div className="bg-[#14213D] text-white py-16 px-4 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Don’t Miss Out on Exclusive Deals!
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
        Join Luxora today and enjoy special discounts, handpicked collections,
        and early access to our upcoming sales.
      </p>
      <button className="bg-[#FCA311] text-[#14213D] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#ffb733] transition">
        Start Shopping
      </button>
    </div>
  );
}
