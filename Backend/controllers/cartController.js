const Cart = require("../models/Cart");
const mongoose = require("mongoose");

// ✅ Add to Cart
exports.addToCart = async (req, res) => {

  const { userId, property } = req.body;

  if (!userId || !property?._id) {
    console.error("❌ Missing required fields:", { userId, property });
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  let cart = await Cart.findOne({ userId });
  console.log("🛒 Existing Cart:", cart);

  if (!cart) {
    console.log("🚀 Creating new cart for user:", userId);
    cart = new Cart({ userId, properties: [] });
  }

  const propertyId = new mongoose.Types.ObjectId(property._id);
  const propertyExists = cart.properties.some((p) => p.propertyId.equals(propertyId));

  if (!propertyExists) {
    console.log("✅ Adding Property to Cart:", property.name);
    cart.properties.push({
      propertyId,
      name: property.name,
      location: property.location,
      price: property.price,
      propertyType: property.propertyType,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      size: property.size,
      furnished: property.furnished,
      image: property.image,
    });

    await cart.save();
    console.log("🎉 Property added successfully!");
  } else {
    console.log("⚠️ Property already in cart.");
  }

  res.json({ success: true, message: "Property added to cart", cart });
};


// ✅ Get User Cart
exports.getUserCart = async (req, res) => {
  try {
    console.log("📤 Fetching Cart for User:", req.params.userId);  // 👀 Debugging  

    const cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      console.log("⚠️ No cart found for this user.");
      return res.json({ success: true, cart: { properties: [] } });
    }

    res.json({ success: true, cart });
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Error fetching cart", error });
  }
};

// ✅ Remove Property from Cart
exports.removeFromCart = async (req, res) => {
  try {
    const { userId, propertyId } = req.body;

    if (!userId || !propertyId) {
      return res.status(400).json({ success: false, message: "Missing userId or propertyId" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }

    // ✅ Remove property from cart
    cart.properties = cart.properties.filter((p) => !p.propertyId.equals(propertyId));

    await cart.save();

    res.json({ success: true, message: "Property removed from cart", cart });
  } catch (error) {
    console.error("❌ Error removing from cart:", error);
    res.status(500).json({ success: false, message: "Error removing from cart", error });
  }
};

