import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const agents = [
  { id: 1, name: "John Doe", image: "https://randomuser.me/api/portraits/men/32.jpg", experience: "10+ Years", contact: "+1 234 567 890", specialization: "Luxury Homes" },
  { id: 2, name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/44.jpg", experience: "7+ Years", contact: "+1 987 654 321", specialization: "Commercial Properties" },
  { id: 3, name: "Michael Lee", image: "https://randomuser.me/api/portraits/men/45.jpg", experience: "5+ Years", contact: "+1 555 666 777", specialization: "Rentals & Apartments" },
  { id: 4, name: "Emma Wilson", image: "https://randomuser.me/api/portraits/women/50.jpg", experience: "8+ Years", contact: "+1 999 888 777", specialization: "Family Homes" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Agents = () => {
  const navigate = useNavigate();

  return (
    <div className="container min-h-screen mx-auto px-4 pt-[180px] pb-10">
      {/* Header + Back Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center flex-1">Meet Our Agents</h2>
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md shadow-md transition sm:absolute sm:top-36 sm:right-6"
        >
          ← Back
        </motion.button>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:-translate-y-1"
          >
            <img src={agent.image} alt={agent.name} className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200 mb-4" />
            <h3 className="text-xl font-semibold">{agent.name}</h3>
            <p className="text-gray-600">{agent.experience}</p>
            <p className="text-gray-500">{agent.contact}</p>
            <p className="text-sm text-orange-500 font-medium mt-2">{agent.specialization}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
