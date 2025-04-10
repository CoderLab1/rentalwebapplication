import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../context/UserContext"; // ✅ Import UserContext
import { motion } from "framer-motion"; // ✅ Import Framer Motion for animations
import { ArrowLeftCircle } from "lucide-react"; // ✅ Import Arrow Icon

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useContext(UserContext); // ✅ Use context for login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login Response:", data.token);

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      // ✅ Save user data and token
      loginUser(data); // UserContext se login
      alert("Login successful!");
      navigate("/"); // Redirect after login
    } catch (error) {
      console.error("Login Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-green-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl relative border border-white/20"
      >
        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
          onClick={() => navigate("/")}
        >
          <IoClose size={26} />
        </button>

        {/* 💬 Error */}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* 🧾 Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="e.g. user@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </motion.div>

          {/* Password */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-gray-700 font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </motion.div>

          {/* Remember & Forgot */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-orange-500" />
                <span>Remember Me</span>
              </label>
              <Link to="#" className="text-orange-500 hover:underline">
                Recover Password
              </Link>
            </div>
          </motion.div>

          {/* Login Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Log In
            </button>
          </motion.div>
        </form>

        {/* 👇 Register Option */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-700 mt-6"
        >
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Register
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;