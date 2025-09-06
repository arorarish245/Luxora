// Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#FCA311]">Luxora</h2>
          <p className="text-gray-300 mt-2">
            Your trusted destination for premium shopping.  
            Discover fashion, electronics, home essentials, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FCA311]">Home</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Shop</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Categories</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-[#FCA311]"><FaFacebook /></a>
            <a href="#" className="hover:text-[#FCA311]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FCA311]"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Luxora. All rights reserved.
      </div>
    </footer>
  );
}
