import React, { useState, useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaShoppingBasket, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../context/UserContext"; // ✅ Import UserContext


export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(UserContext); // ✅ Directly use context

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Agents", path: "/agents" },
    { name: "FeedBacks", path: "/feedbacks" },
    { name: "Available-Properties", path: "/available-properties" },
  ];

  if (user) {
    navLinks.push({ name: "Your-Properties", path: "/your-properties" });
  }

  const handleLogout = () => {
    logoutUser();  // ✅ Correct logout method
    navigate("/");
  };

  return (
    <header className=" w-full fixed top-0 left-0 bg-[#16243E] text-white z-50 shadow-md">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-6 py-3 text-sm border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <span>📍 contact@example.com</span>
          <span>📞 +92 (880) 68396</span>
        </div>

        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <span className="bg-gray-700 px-2 py-1 rounded-sm">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="hover:bg-red-500 border-2 border-red-600 px-2 py-1 rounded-md transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400 bg-gray-700 px-2 py-1 rounded-sm transition">Login</Link>
              <Link to="/register" className="hover:bg-orange-500 border-2 border-orange-600 px-2 py-1 rounded-md transition">Register</Link>
            </>
          )}
          <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />
          <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
          <FaPinterestP className="cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        <img className="w-32 md:w-40 object-cover" src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/logo-white.png" alt="Logo" />

        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-orange-400 font-semibold transition">
              {item.name}
            </Link>
          ))}
        </nav>


        <div className="hidden lg:flex items-center space-x-4">
          <div
            onClick={() => {
              if (!user) {
                navigate("/login"); // Redirect to Login page if user is not logged in
              } else {
                navigate("/cart"); // Redirect to Cart page if logged in
              }
            }}
            className="relative flex items-center gap-2 px-4 py-2 border border-white rounded-full cursor-pointer transition duration-300 hover:bg-[#E3572B]"
          >
            <FaShoppingBasket className="text-lg" />
            <span className="text-sm font-medium">Cart</span>
          </div>



          <div className="h-10 w-10 flex items-center justify-center border border-white rounded-full hover:bg-[#E3572B] transition cursor-pointer">
            <FiSearch className="text-lg" />
          </div>
          <Link to="/add-property" className="hover:bg-[#C1DE93] transition font-semibold hover:text-[#16243E] text-white text-sm bg-transparent px-5 py-2 border-2 border-[#C1DE93] rounded-full flex items-center gap-1">
            <IoHomeOutline /> Add Properties
          </Link>
        </div>
        <div className="flex lg:hidden items-center space-x-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>


        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#16243E] shadow-lg p-6 flex flex-col space-y-4 lg:hidden z-50"
          >
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <HiX className="text-3xl" />
            </button>

            {/* Show logged-in user at the top */}
            {user && (
              <div className="flex items-center gap-3 bg-[#1E3050] p-3 rounded-lg shadow-md text-white border border-[#C1DE93]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C1DE93] text-[#16243E] font-bold text-lg rounded-full">
                  {user.username.charAt(0).toUpperCase()} {/* First letter of username */}
                </div>
                <div>
                  <p className="text-sm font-medium">Welcome Back,</p>
                  <p className="text-lg font-semibold">{user.username}</p>
                </div>
              </div>
            )}

            {/* Links for Login/Register */}
            {!user ? (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#C1DE93] text-[#16243E] font-semibold text-lg py-2 rounded-lg shadow-md text-center transition duration-300 hover:bg-[#A9C97C]"
                >
                  🔑 Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#E3572B] text-white font-semibold text-lg py-2 rounded-lg shadow-md text-center transition duration-300 hover:bg-[#C64620]"
                >
                  ✨ Register
                </Link>
              </div>
            ) : (
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="bg-red-500 text-white font-semibold text-lg py-2 rounded-lg shadow-md transition duration-300 hover:bg-red-600"
              >
                🚪 Logout
              </button>
            )}


            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 mt-4">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-center text-white py-3 rounded-lg bg-[#16243E] hover:bg-[#1E3454] shadow-md transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Add Property Button */}
            <Link
              to="/add-property"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 text-lg font-bold text-white py-3 px-6 rounded-full bg-[#1E3A8A] hover:bg-[#2B50C7] transition-all shadow-md transform hover:scale-105"
            >
              <IoHomeOutline className="text-2xl text-[#FACC15]" />
              <span className="tracking-wide">Add Properties</span>
            </Link>

          </motion.div>
        )}
      </AnimatePresence>

    </header >
  );
}

