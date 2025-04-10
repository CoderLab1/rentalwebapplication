import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlinePhone, HiOutlineCheckCircle } from "react-icons/hi";

const Book = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        roomType: "Single Room",
        guests: 1,
        specialRequests: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/send-booking-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log("Response:", data); // 👈 Check response
    
            if (response.ok) {
                alert("Booking request submitted successfully! ✅");
                navigate("/availableproperties"); // Redirect after submission
            } else {
                alert("Error submitting booking request. Try again.");
            }
        } catch (error) {
            console.error("Booking error:", error);
        }
    };
    
    
    
    return (
        <div className="max-w-7xl mx-auto my-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Side - Booking Form */}
            <div className="bg-white/70 backdrop-blur-md shadow-2xl mt-24 rounded-3xl p-5 border border-gray-300">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Book Your Stay</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium">Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Expected Room Type</label>
                            <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]">
                                <option>Single Room</option>
                                <option>Double Room</option>
                                <option>Suite</option>
                                <option>Luxury Villa</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Number of Guests</label>
                        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" placeholder="Enter number of guests" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]" required />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Special Requests / Description</label>
                        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} placeholder="Mention any special requests or additional details" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DB4C29]" rows="4"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#DB4C29] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#b83e22] transition">
                        Confirm Booking
                    </button>
                </form>
            </div>

            {/* Right Side - Booking Info */}
            <div className="bg-gradient-to-br from-[#DB4C29] to-[#b83e22] mt-20 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg w-full max-w-xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wide">
                    Why Choose Us?
                </h2>

                {/* Features List */}
                <div className="space-y-4">
                    {[
                        "Luxury & Comfort at Affordable Prices",
                        "24/7 Customer Support",
                        "Free Wi-Fi & Complimentary Breakfast",
                        "Secure & Safe Environment",
                        "Exclusive Member Discounts & Loyalty Rewards",
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow-md hover:scale-105 transition-all"
                        >
                            <HiOutlineCheckCircle className="text-green-300 text-3xl flex-shrink-0" />
                            <p className="text-lg font-medium">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action */}
                <div className="mt-6 text-center bg-white/20 p-5 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">Need Assistance? Call Us</p>
                    <div className="flex items-center justify-center mt-2">
                        <HiOutlinePhone className="text-white text-3xl mr-2" />
                        <p className="text-xl font-bold">+88 0123 654 99</p>
                    </div>
                    <p className="text-sm mt-1 opacity-90">Available 24/7 – We’re here to help!</p>
                </div>
            </div>

        </div>
    );
};

export default Book;
