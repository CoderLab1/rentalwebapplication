import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;

    if (!name || !email || !service || !message) {
      return toast.error("Please fill out all fields.");
    }

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <motion.div
      className="bg-[#16243E] text-white py-16 px-6 sm:px-10 lg:px-20 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-3xl w-full"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-orange-500 font-semibold text-lg">Book Appointment</h4>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Send Message Anytime
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1E293B] p-8 rounded-lg shadow-xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-orange-400 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-orange-400 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
              />
            </div>
          </div>

          {/* Service Select */}
          <div className="relative border-2 border-orange-400 rounded-md">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-4 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              <option value="">Select a Service</option>
              <option>Real Estate</option>
              <option>Commercial</option>
              <option>Residential</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-orange-400 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#84cc16", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-lime-500 text-black font-semibold rounded-md hover:bg-lime-400 transition"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
