import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-[#0F1C2E] text-white py-16 px-4 md:px-16 rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-orange-400 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Properties
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Welcome To Our <span className="text-green-400">Luxurious</span> <br />
            <span className="text-green-400">Properties</span> With All The Conveniences.
          </motion.h2>

          <motion.button
            onClick={() => navigate("/available-properties")}
            className="mt-6 cursor-pointer px-6 py-3 bg-green-400 text-black font-semibold rounded-full flex items-center gap-2 hover:bg-green-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🏡</span> View Properties
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661394995630-677c3ee78e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBpbiUyMGhhbmR8ZW58MHx8MHx8fDA%3D"
            alt="Luxurious House"
            className="rounded-lg shadow-lg max-w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page4;
