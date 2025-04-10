import React from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaBath, FaBed, FaRulerCombined, FaArrowLeft } from "react-icons/fa";


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

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) return <div className="p-6 text-red-500">Property not found.</div>;

    return (
<div className="pt-36 max-w-5xl mx-auto p-6 ">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {property.name}
          </h1>
          <p className="text-gray-600 text-lg flex items-center gap-2 mt-2">
            <FaMapMarkerAlt className="text-red-500" /> {property.location}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <FaBed className="text-blue-600" /> <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-blue-600" /> <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRulerCombined className="text-blue-600" /> <span>{property.sqft} sqft</span>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-1 text-yellow-500">
            {Array(Math.round(property.rating))
              .fill("⭐")
              .map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            <span className="ml-2 text-gray-700">{property.rating} / 5.0</span>
          </div>
        </div>
      </div>
    </div>

    );
};

export default PropertyDetails;
