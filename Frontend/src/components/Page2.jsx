import * as framerMotion from "framer-motion";
const { motion } = framerMotion;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaWarehouse, FaHome, FaCity, FaStore } from "react-icons/fa";

const properties = [
  { id: 1, name: "Commercial", icon: <FaBuilding />, count: 16, route: "/commercial" },
  { id: 2, name: "Warehouse", icon: <FaWarehouse />, count: 12, route: "/warehouse" },
  { id: 3, name: "Villa", icon: <FaHome />, count: 12, route: "/villa" },
  { id: 4, name: "Apartment", icon: <FaCity />, count: 14, route: "/apartment" },
  { id: 5, name: "Homestay", icon: <FaStore />, count: 8, route: "/housestay" },
];

const Page2 = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#16243E] flex flex-col items-center justify-center min-h-screen text-white py-12 px-4">
      {/* Section Title with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-orange-500 text-lg sm:text-xl font-semibold">Property By Requirement</p>
        <h2 className="text-3xl sm:text-5xl mt-3 font-bold">
          Explore Apartment <span className="text-[#C2DF93]">Types</span>
        </h2>
      </motion.div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl px-4">
        {properties.map((property) => (
          <Link to={property.route} key={property.id} onClick={() => setSelected(property.id)}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: property.id * 0.1 }}
              className={`flex flex-col items-center justify-center w-full sm:w-56 md:w-60 lg:w-48 xl:w-52 h-64 md:h-72 lg:h-80 xl:h-84 
                rounded-xl p-6 cursor-pointer border mx-auto transition-all duration-300 
                ${
                  selected === property.id
                    ? "border-[#C2DF93] shadow-lg shadow-green-500/30 scale-105 bg-[#1e3350]"
                    : "border-gray-600 hover:border-[#C2DF93] hover:shadow-md hover:scale-105"
                }`}
            >
              {/* Icon with motion effect */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`text-4xl sm:text-5xl border-2 border-white rounded-lg p-4 
                  ${selected === property.id ? "text-[#C2DF93]" : "text-gray-400"}
                `}
              >
                {property.icon}
              </motion.div>

              {/* Property Name */}
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">{property.name}</h3>
              <p className="text-gray-400 text-sm sm:text-base text-center">{property.count} Properties</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page2;
