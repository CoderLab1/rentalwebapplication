import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../context/UserContext";

const AddProperties = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    furnished: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProperty({ ...property, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const { user, token } = useContext(UserContext); // ✅ Fix: Get token separately

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!user) {
      alert("Please log in to add a property!");
      return;
    }
  
    if (!token) {
      console.error("❌ Token is missing!");
      return;
    }
  
    console.log("🔹 Token being sent:", token); // ✅ Debugging
  
    const formData = new FormData();
    Object.entries(property).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    try {
      const response = await fetch("http://localhost:5000/api/properties/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Fix: Use extracted token
        },
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Property Added successfully!");
        navigate("/your-properties");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("❌ Error Adding Property:", error);
      alert("Something went wrong!");
    }
  };
  

  return (
    <div className="pt-36 min-h-screen flex flex-col items-center bg-gray-100">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <button onClick={() => navigate(-1)} className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800 transition text-2xl">
          <IoClose />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-700">🏡 Add Your Property</h2>
          <input type="text" name="name" placeholder="Property Name" value={property.name} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <textarea name="description" placeholder="Property Description" value={property.description} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="number" name="price" placeholder="Price ($)" value={property.price} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="text" name="location" placeholder="Location" value={property.location} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <select name="propertyType" value={property.propertyType} onChange={handleChange} className="w-full p-2 border rounded-lg" required>
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
          </select>
          <input type="number" name="bedrooms" placeholder="Number of Bedrooms" value={property.bedrooms} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="number" name="bathrooms" placeholder="Number of Bathrooms" value={property.bathrooms} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="number" name="size" placeholder="Size (sqft)" value={property.size} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium">Furnished?</label>
            <label className="flex items-center">
              <input type="radio" name="furnished" value="Yes" onChange={handleChange} className="mr-2" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="furnished" value="No" onChange={handleChange} className="mr-2" /> No
            </label>
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-lg" />
          {property.image && <img src={property.image} alt="Preview" className="w-full h-48 object-cover rounded-lg mt-3 border" />}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Submit Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
