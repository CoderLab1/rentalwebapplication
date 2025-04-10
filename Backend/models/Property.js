const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  description: String,
  price: Number,
  location: String,
  propertyType: String,
  bedrooms: Number,
  bathrooms: Number,
  size: Number,
  furnished: String,
  image: String, // Image URL or base64 data
  contact: String, // ✅ Fix: Changed to String
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Property", propertySchema);
