const nodemailer = require("nodemailer");
require("dotenv").config();

const sendBookingEmail = async (req, res) => {
    
    try {
        const { fullName, email, phone, roomType, guests, specialRequests } = req.body;

        if (!email || !process.env.ADMIN_EMAIL) {
            return res.status(400).json({ error: "Recipient email is missing" });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,  // User ko email
            subject: "Booking Confirmation",
            text: `Dear ${fullName},\n\nYour booking for ${roomType} with ${guests} guest(s) has been received.\n\nWe will contact you soon at ${phone}.\n\nSpecial Requests: ${specialRequests}\n\nThank you!`,
        };

        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: "actiongaming9993981249@gmail.com",  // Admin ko email
            subject: "New Booking Request",
            text: `New booking request received!\n\n👤 Name: ${fullName}\n📧 Email: ${email}\n📞 Phone: ${phone}\n🏠 Room Type: ${roomType}\n👥 Guests: ${guests}\n📌 Special Requests: ${specialRequests}`,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(adminMailOptions);

        res.status(200).json({ message: "Booking email sent successfully to user and admin!" });
    } catch (error) {
        console.error("❌ Email sending error:", error);
        res.status(500).json({ error: "Failed to send booking email." });
    }
};

module.exports = { sendBookingEmail };