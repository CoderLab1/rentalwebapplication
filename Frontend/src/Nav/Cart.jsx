import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";


const Cart = () => {

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  const handleBookClick = () => {
    navigate("/book"); // Redirect to Book.jsx
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (user && user.id) {  // ✅ Ensure user ID exists
        try {
          const response = await axios.get(`http://localhost:5000/api/cart/user/${user.id}`);
          console.log("🛒 Cart Fetch Response:", response.data);  // 👀 Debugging 
          setCart(response.data.cart?.properties || []);  // ✅ Safe fallback
        } catch (error) {
          console.error("❌ Error fetching cart:", error.response?.data || error);
        }
      } else {
        console.log("⚠️ User not found, skipping cart fetch.");
      }
    };
    

    fetchCart();
  }, [user]);

  const handleRemoveFromCart = async (propertyId) => {
    if (!user || !user.id) {
      console.error("⚠️ User not found");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/cart/remove", {
        userId: user.id, // ✅ Ensure correct user ID
        propertyId: propertyId, // ✅ Ensure correct property ID
      });
  
      // ✅ Update cart state after removal
      setCart((prevCart) => prevCart.filter((p) => p.propertyId !== propertyId));
    } catch (error) {
      console.error("❌ Error removing from cart:", error.response?.data || error);
    }
  };

  return (
    <div className="p-5 min-h-screen pt-36">
      <h2 className="text-2xl font-bold text-center mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No properties in your cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((property) => (
            <div key={property.propertyId} className="bg-white shadow-lg rounded-2xl">
              <img src={property.image} alt={property.name} className="w-full h-52 +object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{property.name}</h3>
                <p><strong>📍 Location:</strong> {property.location}</p>
                <p><strong>💰 Price:</strong> ${property.price}</p>
                <p><strong>🏠 Property Type:</strong> {property.propertyType}</p>
                <p><strong>🛏️ Bedrooms:</strong> {property.bedrooms}</p>
                <p><strong>🚿 Bathrooms:</strong> {property.bathrooms}</p>
                <p><strong>📏 Size:</strong> {property.size} sqft</p>
                <p><strong>🛋️ Furnished:</strong> {property.furnished ? "Yes" : "No"}</p>

                <button 
                onClick={handleBookClick}
                className="mt-4 w-full cursor-pointer py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-500"
                >Book Now</button>

                {/* ❌ Remove from Cart Button */}
                <button
                  onClick={() => handleRemoveFromCart(property.propertyId)}
                  className="mt-4 cursor-pointer w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default Cart;
