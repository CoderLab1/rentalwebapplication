import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";


const villaProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    description: "A stunning beachfront villa with modern interiors and a private pool.",
    location: "Malibu, CA",
    price: "$12,000/month",
  },
  {
    id: 2,
    title: "Tropical Paradise Villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    description: "Escape to paradise in this serene tropical villa surrounded by nature.",
    location: "Maui, HI",
    price: "$9,500/month",
  },
  {
    id: 3,
    title: "Modern Hilltop Villa",
    image: "https://plus.unsplash.com/premium_photo-1731453260225-931ebdde6d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwSGlsbHRvcCUyMFZpbGxhfGVufDB8fDB8fHww",
    description: "Sleek villa with panoramic views from a hilltop location.",
    location: "Aspen, CO",
    price: "$11,000/month",
  },
  {
    id: 4,
    title: "Mediterranean Villa",
    image: "https://images.unsplash.com/photo-1641352576856-416aeb1baee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVkaXRlcnJhbmVhbiUyMFZpbGxhfGVufDB8fDB8fHww",
    description: "Classic Mediterranean design with elegant finishes and gardens.",
    location: "Santa Barbara, CA",
    price: "$10,000/month",
  },
  {
    id: 5,
    title: "Secluded Mountain Villa",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    description: "Private and peaceful, nestled in the mountains with breathtaking views.",
    location: "Lake Tahoe, NV",
    price: "$8,800/month",
  },
  {
    id: 6,
    title: "Designer Glass Villa",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    description: "All-glass villa offering natural light and luxury open living.",
    location: "Los Angeles, CA",
    price: "$13,000/month",
  },
  {
    id: 7,
    title: "Eco-Friendly Green Villa",
    image: "https://images.unsplash.com/photo-1626910152362-b8ae726a98f3?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sustainable design with solar panels and eco features.",
    location: "Sedona, AZ",
    price: "$7,900/month",
  },
  {
    id: 8,
    title: "Classic French Villa",
    image: "https://images.unsplash.com/photo-1709501580562-91a9415917cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsYXNzaWMlMjBGcmVuY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Inspired by French countryside villas with charm and character.",
    location: "Napa Valley, CA",
    price: "$9,200/month",
  },
  {
    id: 9,
    title: "Zen Retreat Villa",
    image: "https://images.unsplash.com/photo-1552616958-62df7245f4cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Peaceful retreat designed with zen elements and private garden.",
    location: "Big Sur, CA",
    price: "$10,500/month",
  },
  {
    id: 10,
    title: "Lakefront Luxury Villa",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
    description: "Elegant lakefront villa with private dock and stunning views.",
    location: "Minneapolis, MN",
    price: "$9,800/month",
  },
  {
    id: 11,
    title: "Countryside Estate Villa",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    description: "Gorgeous countryside villa with rustic charm and modern amenities.",
    location: "Charlottesville, VA",
    price: "$8,200/month",
  },
  {
    id: 12,
    title: "Skyline View Villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    description: "Luxury villa offering skyline views from every room.",
    location: "Seattle, WA",
    price: "$11,700/month",
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VillaCard = ({ villa }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
  >
    <div className="overflow-hidden">
      <img
        src={villa.image}
        alt={villa.title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{villa.title}</h2>
      <p className="text-gray-600 text-sm mt-2">{villa.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">{villa.location}</span>
        <span className="text-sm font-semibold text-blue-600">{villa.price}</span>
      </div>
      <button className="mt-4 w-full bg-[#C2DF93] text-[#1A2238] font-semibold py-2 rounded-xl hover:bg-[#b3d27f] transition-colors">
        View Details
      </button>
    </div>
  </motion.div>
);

const Villa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-[#1A2238] pt-36 py-12 px-4">
      <div className="text-center mb-6">
        <p className="text-orange-500 text-lg sm:text-xl font-semibold">Luxury Villas</p>
        <h2 className="text-3xl text-white sm:text-5xl mt-3 font-bold">
          Discover Our <span className="text-[#C2DF93]">Villas</span>
        </h2>
        <p className="text-gray-300 mt-3 text-lg">Exclusive villas handpicked for comfort and elegance</p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
      >
        {villaProperties.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </motion.div>
    </div>
  );
};

export default Villa;