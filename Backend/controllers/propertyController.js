const Property = require("../models/Property");

// ✅ Add Property Controller
const addProperty = async (req, res) => {
    try {
      req.body.userId = req.user.userId;  
  
      // ✅ Extract `contact` field too
      const { name, description, price, location, propertyType, bedrooms, bathrooms, size, furnished, userId } = req.body;
      
      if (!name || !description || !price || !location || !propertyType || !bedrooms || !bathrooms || !size || !furnished || !userId) {
        return res.status(400).json({ message: "All fields are required!" });
      }
  
      // ✅ Ensure image is saved if uploaded
      if (req.file) {
        req.body.image = `/uploads/${req.file.filename}`;
      }
  
      const newProperty = new Property(req.body);
      await newProperty.save();
  
      res.status(201).json({ message: "Property added successfully!", property: newProperty });
    } catch (error) {
      console.error("Error in addProperty:", error);
      res.status(500).json({ message: "Error adding property" });
    }
};
  
// ✅ Get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json({ success: true, data: properties });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching properties", error });
  }
};

// ✅ Get user-specific properties
const getUserProperties = async (req, res) => {
  try {
    const userId = req.user.userId;
    const properties = await Property.find({ userId });
    res.status(200).json({ success: true, data: properties });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching properties", error });
  }
};

// ✅ Delete a property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property || property.userId.toString() !== req.user.userId) {
      return res.status(403).json({ success: false, message: "Unauthorized or Property not found" });
    }
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting property", error });
  }
};

module.exports = { addProperty, getAllProperties, getUserProperties, deleteProperty };
