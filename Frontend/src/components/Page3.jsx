import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Page3() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FCF9F5] py-20 px-6 md:px-16 lg:px-28 flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Side - Image & Video */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="relative w-full md:w-1/2 flex justify-center items-center"
      >
        {/* Floating Image with Animation */}
        <motion.div
          className="relative w-80 h-96 md:w-[400px] md:h-[450px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/image-01.jpg"
            alt="City Buildings"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
            }}
          />
        </motion.div>

        {/* Play Button - Top Right */}
        <motion.button
          className="absolute top-4 right-4 bg-[#E3572B] text-white p-5 rounded-full shadow-xl hover:bg-[#ff6b4a] transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPlay className="text-xl" />
        </motion.button>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16"
      >
        <motion.h4
          className="text-orange-500 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About Company
        </motion.h4>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#16243E] mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Welcome To Properties
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          className="mt-6 space-y-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {[
            "Proactively pontificate client",
            "Is there a waiting list for desired",
            "Immediate 24/7 Emergency",
          ].map((text, idx) => (
            <motion.li
              key={idx}
              className="flex items-center text-[#16243E] font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-orange-500 mr-2">→</span> {text}
            </motion.li>
          ))}
        </motion.ul>

        {/* Stats Section */}
        <motion.div
          className="flex items-center gap-8 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center border-r border-gray-400 pr-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#16243E]">30k+</h3>
            <p className="text-gray-600 text-sm">Satisfied Client</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#16243E]">700+</h3>
            <p className="text-gray-600 text-sm">House</p>
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.button
          onClick={() => navigate("/exploremore")}
          className="mt-8 cursor-pointer px-6 py-3 bg-[#16243E] text-white text-sm font-semibold flex items-center rounded-full hover:bg-[#0E182B] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoHomeOutline className="mr-2 text-lg" /> Explore More
        </motion.button>
      </motion.div>
    </section>
  );
}
