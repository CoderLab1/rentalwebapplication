const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");


const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";  

// **REGISTER USER**
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists!" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **LOGIN USER**
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign(
            {   
                userId: user._id,
                email: user.email,  
             },  
            
            JWT_SECRET, // ✅ now this works!
            { expiresIn: "24h" }
        );

        res.json({
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: error.message });
    }
});

// **PROFILE ROUTE**
router.get("/profile", async (req, res) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, JWT_SECRET);  // ✅ Fix: Correct secret key
        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded.userId).select("-password");  // ✅ Fix: `userId` use karo
        console.log("User Found:", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
});

  

  
module.exports = router;
