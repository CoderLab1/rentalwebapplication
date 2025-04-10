const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  properties: [
    {
      propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
      name: String,
      
      location: String,
      price: Number,
      propertyType: String,
      bedrooms: Number,
      bathrooms: Number,
      size: Number,
      furnished: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
