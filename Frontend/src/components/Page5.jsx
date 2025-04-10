import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  FaBath, FaBed, FaHeart, FaMapMarkerAlt,
  FaArrowLeft, FaArrowRight
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";


const properties = [
  {
    id: 1,
    name: "West Square Apartments",
    location: "18 Brooklyn Street, New York",
    image: "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/listing-14-600x385.jpg",
    rating: 5.0,
    beds: 5,
    baths: 2,
    sqft: 1860,
  },
  {
    id: 2,
    name: "Peninsula Apartments",
    location: "18 Brooklyn Street, New York",
    image: "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/listing-13-600x385.jpg",
    rating: 4.0,
    beds: 6,
    baths: 3,
    sqft: 1860,
  },
  {
    id: 3,
    name: "Eaton Garth Penthouse",
    location: "18 Brooklyn Street, New York",
    image: "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/listing-14-600x385.jpg",
    rating: 5.0,
    beds: 6,
    baths: 3,
    sqft: 1860,
  },
  {
    id: 4,
    name: "Modern Villa",
    location: "10 Palm Street, Miami",
    image: "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/listing-15-600x385.jpg",
    rating: 4.8,
    beds: 4,
    baths: 3,
    sqft: 2100,
  },
  {
    id: 5,
    name: "Luxury Condo",
    location: "22 Central Park, NY",
    image: "https://gaviaspreview.com/wp/homirx/wp-content/uploads/2024/11/listing-16-600x385.jpg",
    rating: 4.5,
    beds: 3,
    baths: 2,
    sqft: 1400,
  },
];

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
    >
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-60 object-cover rounded-lg" />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
          <FaHeart className="text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array(Math.round(property.rating)).fill("⭐").map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          <span className="ml-1 text-gray-600">{property.rating}</span>
        </div>
        <h3 className="font-semibold text-lg mt-2">{property.name}</h3>
        <p className="text-gray-600 flex items-center gap-1 mt-1">
          <FaMapMarkerAlt /> {property.location}
        </p>
        <div className="flex justify-between mt-3 text-gray-600">
          <span>{property.sqft} sqft</span>
          <span className="flex items-center gap-1">
            <FaBed /> {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {property.baths}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/details/${property.id}`)}
          className="bg-blue-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-4 w-full transition"
        >
          Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function PropertyList() {
  return (
    <motion.section
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Find Home Listing in Your Area
        </h2>
        <div className="flex gap-3 mt-4 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            🏢 Apartment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition"
          >
            📍 General
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition"
          >
            🏠 Villa
          </motion.button>
        </div>
      </motion.div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={800}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition">
          <FaArrowLeft className="text-gray-800 text-2xl" />
        </button>
        <button className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-full shadow-lg hover:bg-opacity-100 hover:scale-110 transition">
          <FaArrowRight className="text-gray-800 text-2xl" />
        </button>
      </div>
    </motion.section>
  );
}
