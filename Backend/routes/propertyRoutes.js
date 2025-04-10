const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/authMiddleware");
const { addProperty, getAllProperties, getUserProperties, deleteProperty } = require("../controllers/propertyController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Use controllers in routes
router.post("/add", authMiddleware, upload.single("image"), addProperty);
router.get("/all", getAllProperties);
router.get("/your-properties", authMiddleware, getUserProperties);
router.delete("/delete/:id", authMiddleware, deleteProperty);

module.exports = router;
