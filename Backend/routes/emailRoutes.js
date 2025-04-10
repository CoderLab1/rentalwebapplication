const express = require("express");
const router = express.Router();
const { sendBookingEmail } = require("../controllers/emailController");

// Booking email send route
router.post("/send-booking-email", sendBookingEmail);

module.exports = router;
