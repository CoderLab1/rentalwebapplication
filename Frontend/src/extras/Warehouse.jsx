
import React from "react";
import { motion } from "framer-motion";

const warehouseProperties = [
  {
    id: 1,
    title: "Large Distribution Center",
    description: "20,000 sq.ft warehouse ideal for logistics operations.",
    location: "Manesar, Gurgaon",
    price: "₹4,50,000/month",
    image: "https://images.unsplash.com/photo-1583564345823-8606fb448c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGFyZ2UlMjBEaXN0cmlidXRpb24lMjBDZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Cold Storage Warehouse",
    description: "Perfect for temperature-sensitive goods and perishables.",
    location: "Bhiwandi, Mumbai",
    price: "₹3,20,000/month",
    image: "https://plus.unsplash.com/premium_photo-1661950006431-b10fd73ed917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sZCUyMFN0b3JhZ2UlMjBXYXJlaG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Multi-Level Industrial Unit",
    description: "Modern facility with elevator access and ample space.",
    location: "Peenya, Bangalore",
    price: "₹5,00,000/month",
    image: "https://images.unsplash.com/photo-1597057435443-8a51eeb5538f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWx0aSUyMExldmVsJTIwSW5kdXN0cmlhbCUyMFVuaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Spacious Industrial Godown",
    description: "Ground-level access and high ceiling height.",
    location: "SITAPUR Road, Lucknow",
    price: "₹2,00,000/month",
    image: "https://images.unsplash.com/photo-1707273550146-ef6de869f686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhY2lvdXMlMjBJbmR1c3RyaWFsJTIwR29kb3dufGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Logistics Storage Space",
    description: "Strategically located for transport networks.",
    location: "Sanjay Gandhi Nagar, Hyderabad",
    price: "₹2,90,000/month",
    image: "https://plus.unsplash.com/premium_photo-1663012807871-56c5c717f655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9naXN0aWNzJTIwU3RvcmFnZSUyMFNwYWNlfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Warehouse with Loading Docks",
    description: "Perfect for large-scale inventory operations.",
    location: "Kheda, Ahmedabad",
    price: "₹3,75,000/month",
    image: "https://images.unsplash.com/photo-1725781535657-29d825bc7824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2FyZWhvdXNlJTIwd2l0aCUyMExvYWRpbmclMjBEb2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    title: "Small Warehouse for Rent",
    description: "1000 sq.ft, ideal for local businesses.",
    location: "Rajajinagar, Bangalore",
    price: "₹75,000/month",
    image: "https://images.unsplash.com/photo-1707496716716-018d98618f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hbGwlMjBXYXJlaG91c2UlMjBmb3IlMjBSZW50fGVufDB8fDB8fHww",
  },
  {
    id: 9,
    title: "Warehouse with Office Space",
    description: "Includes 3 rooms and pantry with power backup.",
    location: "MIDC, Pune",
    price: "₹1,80,000/month",
    image: "https://plus.unsplash.com/premium_photo-1670315266772-ae45debb9c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FyZWhvdXNlJTIwd2l0aCUyME9mZmljZSUyMFNwYWNlfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    title: "Export Storage Unit",
    description: "Ideal for exporters and packagers.",
    location: "Salt Lake, Kolkata",
    price: "₹2,40,000/month",
    image: "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEV4cG9ydCUyMFN0b3JhZ2UlMjBVbml0fGVufDB8fDB8fHww",
  },
  {
    id: 11,
    title: "Warehouse in Logistics Park",
    description: "Secured, gated complex with CCTV monitoring.",
    location: "Pimpri-Chinchwad, Pune",
    price: "₹3,10,000/month",
    image: "https://plus.unsplash.com/premium_photo-1682146773000-474a2592d2b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FyZWhvdXNlJTIwaW4lMjBMb2dpc3RpY3MlMjBQYXJrfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    title: "Food Grade Warehouse",
    description: "FSSAI approved for food products storage.",
    location: "Karkhana, Secunderabad",
    price: "₹2,60,000/month",
    image: "https://plus.unsplash.com/premium_photo-1661954639355-4a9d1e9f8590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9vZCUyMEdyYWRlJTIwV2FyZWhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    title: "Open Shed Warehouse",
    description: "Affordable with basic utilities.",
    location: "Kanpur Road, Lucknow",
    price: "₹85,000/month",
    image: "https://plus.unsplash.com/premium_photo-1661914966293-c129661d4915?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rm9vZCUyMEdyYWRlJTIwV2FyZWhvdXNlfGVufDB8fDB8fHww",
  },
];  

const Warehouses = () => {
  return (
    <div className="relative min-h-screen pt-36 bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-12 px-4 text-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#93C5FD]">Warehouse Properties</h1>
        <p className="text-gray-300 mt-2 text-lg">
          Find industrial spaces for storage and logistics
        </p>
      </div>

      {/* Cards with scroll-based animation */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {warehouseProperties.map((property, index) => (
          <motion.div
            key={property.id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#C2DF93]">
                {property.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">{property.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm">
                <span className="text-gray-400">{property.location}</span>
                <span className="text-[#93C5FD] font-semibold">{property.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Warehouses;
