import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/signup", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#14213D]">
      {/* Card container */}
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-[#14213D] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg bg-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#FCA311]"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg bg-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#FCA311]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg bg-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#FCA311]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#FCA311] text-white py-3 rounded-lg font-semibold hover:bg-[#e5940d] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-[#FCA311] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
