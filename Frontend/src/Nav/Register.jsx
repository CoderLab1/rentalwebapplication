import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5"; // Import Close Icon
import axios from "axios"; // ✅ Axios for API Calls
import { motion } from "framer-motion"; // ✅ Framer Motion for Animations

const Register = () => {
  const navigate = useNavigate();

  // ✅ State to store user inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submit (With Backend API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert(res.data.message); // ✅ Success Message
      navigate("/login"); // ✅ Redirect to Login
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-r from-orange-100 via-white to-green-100 flex justify-center items-center px-4 py-10">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-md bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/20"
    >
      {/* ❌ Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-all"
      >
        <IoClose size={26} />
      </button>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-3xl font-bold text-center text-orange-600 mb-6"
      >
        Create Account
      </motion.h2>

      {error && (
        <p className="text-red-600 text-sm text-center mb-4">{error}</p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <label className="text-gray-700 font-medium block mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all"
          />
        </motion.div>

        {/* Email */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <label className="text-gray-700 font-medium block mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all"
          />
        </motion.div>

        {/* Password */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <label className="text-gray-700 font-medium block mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition-all"
          />
        </motion.div>

        {/* Agreements */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" required className="accent-orange-500" />
            <span className="text-sm text-gray-700">
              I agree to the <span className="text-blue-600 underline">Privacy Policy</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" required className="accent-orange-500" />
            <span className="text-sm text-gray-700">
              I accept all <span className="text-blue-600 underline">Terms & Conditions</span>
            </span>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </motion.div>
      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-sm text-gray-600 mt-6"
      >
        Already have an account?{" "}
        <Link to="/login" className="text-orange-600 underline hover:text-orange-800">
          Login here
        </Link>
      </motion.p>
    </motion.div>
  </div>
  );
};

export default Register;