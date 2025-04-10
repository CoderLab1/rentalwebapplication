import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";


const houseProperties = [
  {
    id: 1,
    title: "Modern Family House",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    description: "Spacious family home in a quiet neighborhood.",
    location: "San Jose, CA",
    price: "$3,800/month",
  },
  {
    id: 2,
    title: "Cozy Countryside Cottage",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
    description: "Charming cottage with a garden and fireplace.",
    location: "Nashville, TN",
    price: "$2,100/month",
  },
  {
    id: 3,
    title: "Lakefront Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    description: "Beautiful lake views with private dock.",
    location: "Lake Tahoe, NV",
    price: "$4,500/month",
  },
  {
    id: 4,
    title: "Suburban Dream Home",
    image: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VidXJiYW4lMjBEcmVhbSUyMEhvbWV8ZW58MHx8MHx8fDA%3D",
    description: "Open-plan design with a backyard and patio.",
    location: "Dallas, TX",
    price: "$2,900/month",
  },
  {
    id: 5,
    title: "Beachside Bungalow",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    description: "Steps away from the beach, perfect getaway.",
    location: "Santa Barbara, CA",
    price: "$5,200/month",
  },
  {
    id: 6,
    title: "Rustic Log Cabin",
    image: "https://images.unsplash.com/photo-1631405146530-d25c3cd04407?w=600",
    description: "Wooden cabin nestled in forested hills.",
    location: "Boulder, CO",
    price: "$2,400/month",
  },
  {
    id: 7,
    title: "Historic Townhouse",
    image: "https://images.unsplash.com/photo-1690303347611-9fb75704f811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlzdG9yaWMlMjBUb3duaG91c2V8ZW58MHx8MHx8fDA%3D",
    description: "Classic charm with modern amenities.",
    location: "Savannah, GA",
    price: "$3,100/month",
  },
  {
    id: 8,
    title: "Smart Eco House",
    image: "https://images.unsplash.com/photo-1630699294887-fa8852095404?w=600",
    description: "Sustainable living with full smart-home tech.",
    location: "Boulder, CO",
    price: "$3,900/month",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HouseCard = ({ house }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
  >
    <div className="overflow-hidden">
      <img
        src={house.image}
        alt={house.title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{house.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{house.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">{house.location}</span>
        <span className="text-sm font-semibold text-blue-600">{house.price}</span>
      </div>
      <button className="mt-4 w-full bg-[#C2DF93] text-[#1A2238] font-semibold py-2 rounded-xl hover:bg-[#b3d27f] transition-colors">
        View Details
      </button>
    </div>
  </motion.div>
);

const HouseStay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-[#1A2238] pt-36 py-12 px-4">
      <div className="text-center mb-6">
        <p className="text-orange-500 text-lg sm:text-xl font-semibold">Relaxed Living</p>
        <h2 className="text-3xl text-white sm:text-5xl mt-3 font-bold">
          Explore Our <span className="text-[#C2DF93]">House Stays</span>
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Carefully selected homes for comfort and peace of mind
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
      >
        {houseProperties.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </motion.div>
    </div>
  );
};

export default HouseStay;
