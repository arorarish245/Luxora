import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#14213D] min-h-screen flex items-center px-6 md:px-16 pt-24 md:pt-0 pb-12 md:pb-0">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14213D]/80 to-[#14213D]/90 z-0"></div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="src/assets/images/logo.avif"
            alt="Luxora Products"
            className="w-[80%] max-w-[420px] rounded-2xl shadow-lg object-cover 
               transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left max-w-lg mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FCA311] mb-6">
            Discover Luxora
          </h1>
          <p className="text-[#E5E5E5] text-lg md:text-xl mb-8">
            Your one-stop shop for the best products at amazing prices.
          </p>
          <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#FCA311] text-[#14213D] font-semibold py-3 px-6 rounded-lg hover:bg-[#e5940d] transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-2 border-[#FCA311] text-[#FCA311] font-semibold py-3 px-6 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D] transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FCA311]/20 blur-3xl"></div>
    </div>
  );
}
