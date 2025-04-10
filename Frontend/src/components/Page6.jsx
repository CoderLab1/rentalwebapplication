import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaShareAlt,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Savannah Nguyen",
    phone: "(0123) 456 789",
    image:
      "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/team-1.jpg",
  },
  {
    id: 2,
    name: "Annette Black",
    phone: "(0123) 456 789",
    image:
      "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/team-2.jpg",
  },
  {
    id: 3,
    name: "Kathryn Murphy",
    phone: "(0123) 456 789",
    image:
      "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/team-3.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg p-4 overflow-hidden transition-transform transform hover:-translate-y-1"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Team Member Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Social Media Icons */}
      <motion.div
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg flex flex-col space-y-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-600 hover:text-red-500">
          <FaPinterest />
        </a>
      </motion.div>

      {/* Name & Contact Info */}
      <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600">Call: {member.phone}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600"
        >
          <FaShareAlt />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function TeamSection() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-orange-500 font-semibold">Our Expert</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Meet Our Real Estate Team
          </h2>
        </motion.div>

        {/* View All Members Button */}
        <motion.button
          onClick={() => navigate("/agents")}
          className="bg-blue-900 cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome className="text-white" />
          View All Member
        </motion.button>
      </div>

      {/* Team Members Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </motion.div>
    </motion.section>
  );
}
