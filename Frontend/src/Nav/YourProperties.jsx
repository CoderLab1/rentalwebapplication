import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const YourProperties = () => {
  const { user, token } = useContext(UserContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      if (!token) {
        console.error("❌ No token found!");
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:5000/api/properties/your-properties",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProperties(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching properties:", error.response?.data || error);
      }
    };
    if (user) fetchProperties();
  }, [user, token]);

  const handleDelete = async (propertyId) => {
    if (!token) {
      alert("Unauthorized! Please log in again.");
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/api/properties/delete/${propertyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(properties.filter((property) => property._id !== propertyId));
      alert("Property deleted successfully!");
    } catch (error) {
      console.error("❌ Error deleting property:", error.response?.data || error);
    }
  };

  return (
    <div className="p-5 pt-36 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🏠 Your Properties</h2>
      {properties.length === 0 ? (
        <p className="text-center text-gray-600">No properties added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border p-4 flex flex-col justify-between"
            >
              {property.image && (
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
                <p className="text-gray-700">📍 {property.location}</p>
                <p className="text-gray-700">💰 Price: ${property.price}</p>
                <p className="text-gray-700">🛏 Bedrooms: {property.bedrooms} | 🛁 Bathrooms: {property.bathrooms}</p>
                <p className="text-gray-700">📏 Size: {property.size} sqft</p>
                <p className="text-gray-700">🛋 Furnished: {property.furnished ? "Yes" : "No"}</p>
              </div>
              <button
                onClick={() => handleDelete(property._id)}
                className="bg-red-600 cursor-pointer text-white flex items-center justify-center py-2 mt-3 rounded-lg hover:bg-red-700 transition"
              >
                <MdDelete className="mr-2 text-lg" /> Delete Property
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourProperties;