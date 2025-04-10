require('events').EventEmitter.defaultMaxListeners = 20;

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); // ✅ Correct Path
const feedbackRoutes = require("./routes/feedbackRoutes"); // ✅ Correct Path 

const app = express();

app.use(express.json({ limit: "50mb" }));  // JSON payload size increase
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.json()); // 🟢 Yeh hona zaroori hai

app.use(cors({
    origin: "https://rentalwebapplication.vercel.app/",  // ✅ yaha tera frontend URL hona chahiye
    credentials: true
  }));

// ✅ Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/properties", require("./routes/propertyRoutes"));
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);
const emailRoutes = require("./routes/emailRoutes"); 
app.use("/api", emailRoutes);

app.use('/api/feedbacks', feedbackRoutes);

const contactRoutes = require("./routes/contactRoute");

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("🏠 HouseRental API is live!");
  });
  

// ✅ Connect to MongoDB
connectDB(); 
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
