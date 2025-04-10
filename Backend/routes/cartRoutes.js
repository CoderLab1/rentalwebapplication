const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add", cartController.addToCart);
router.post("/remove", cartController.removeFromCart);

router.get("/user/:userId", cartController.getUserCart);
router.delete("/remove/:userId/:propertyId", cartController.removeFromCart);

module.exports = router;
