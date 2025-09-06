import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#14213D] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-2xl font-extrabold text-[#FCA311] tracking-wide">
              Luxora
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Shop", "Cart"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                className="relative font-medium hover:text-[#FCA311] transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FCA311] transition-all duration-300 hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Login / Signup */}
          <div className="hidden md:flex space-x-4">
            <button
              className="bg-[#FCA311] text-[#14213D] px-4 py-2 rounded-lg font-semibold hover:bg-[#e5940d] transition"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-[#E5E5E5] text-[#14213D] px-4 py-2 rounded-lg font-semibold hover:bg-[#d9d9d9] transition"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            {/* Add hamburger menu later */}
          </div>
        </div>
      </div>
    </nav>
  );
}
