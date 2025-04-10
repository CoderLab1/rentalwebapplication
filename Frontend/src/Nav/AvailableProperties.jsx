import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const AvailableProperties = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/properties/all");
        setProperties(response.data.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleAddToCart = async (property) => {
    const userId = user?.id;
  
    if (!userId) {
      toast.error("⚠️ Please log in to add items to your cart!", {
        position: "top-right",
        autoClose: 2000,
      });
  
      // Redirect to login
      navigate("/login");
      return;
    }
  
    console.log("🛒 Adding to Cart:", { userId, property });
  
    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId: userId,
        property: property,
      });
  
      console.log("✅ Add to Cart Response:", response.data);
  
      // Show success toast notification
      toast.success("✅ Added to Cart Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
  
    } catch (error) {
      console.error("❌ Error adding to cart:", error.response?.data || error);
      
      toast.error("❌ Failed to add to cart!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };  

  const handleBookClick = () => {
    navigate("/book"); // Redirect to Book.jsx
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
      },
    }),
  };
  
  return (
    <div className="p-5 pt-32">
       <div className="p-5 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-2 text-blue-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        🏠 Available Properties
      </motion.h2>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600">No properties available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img src={property.image} alt={property.name} className="w-full h-52 object-cover" />
              <div className="p-5 space-y-1">
                <h3 className="text-xl font-bold text-gray-800">{property.name}</h3>
                <p className="text-gray-600">📍 {property.location}</p>
                <p className="text-gray-600">💰 ${property.price}</p>
                <p className="text-gray-600">🏠 {property.propertyType}</p>
                <p className="text-gray-600">🛏️ {property.bedrooms} Bedrooms</p>
                <p className="text-gray-600">🚿 {property.bathrooms} Bathrooms</p>
                <p className="text-gray-600">📏 {property.size} sqft</p>
                <p className="text-gray-600">🛋️ Furnished: {property.furnished ? "Yes" : "No"}</p>

                <button
                  onClick={() => handleBookClick(property)}
                  className="mt-4 w-full cursor-pointer py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                >
                  🚀 Book Now
                </button>

                <button
                  onClick={() => handleAddToCart(property)}
                  className="mt-2 w-full cursor-pointer py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default AvailableProperties;
