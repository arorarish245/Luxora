import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  // 🔹 Calculate total quantity (not just unique products)
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

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

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className="relative font-medium hover:text-[#FCA311] transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="relative font-medium hover:text-[#FCA311] transition"
            >
              Shop
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="relative font-medium hover:text-[#FCA311] transition"
            >
              Cart ({cartCount})
            </button>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <button
                className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 bg-[#14213D] rounded-lg shadow-lg">
            <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="px-6 py-2 text-left hover:text-[#FCA311]"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/shop");
                setMenuOpen(false);
              }}
              className="px-6 py-2 text-left hover:text-[#FCA311]"
            >
              Shop
            </button>
            <button
              onClick={() => {
                navigate("/cart");
                setMenuOpen(false);
              }}
              className="px-6 py-2 text-left hover:text-[#FCA311]"
            >
              Cart ({cartCount})
            </button>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="mx-6 bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="mx-6 bg-[#FCA311] text-[#14213D] px-4 py-2 rounded-lg font-semibold hover:bg-[#e5940d] transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                  className="mx-6 bg-[#E5E5E5] text-[#14213D] px-4 py-2 rounded-lg font-semibold hover:bg-[#d9d9d9] transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
