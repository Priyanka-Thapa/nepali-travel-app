const express = require("express");
const { Destination } = require("../models"); 
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
require("dotenv").config(); // Load environment variables

// Temporary upload inside backend (before moving to frontend)
// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/destinationImage/"); // Store images in backend's "assets/destinationImage" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, location, tags } = req.body;
    const imageUrl = req.file ? `${process.env.BASE_URL}/uploads/${req.file.filename}` : null; // Use BASE_URL from .env

    const destination = await Destination.create({
      name,
      description,
      location,
      tags,
      image_url: imageUrl, // Store frontend path in DB
    });

    res.status(201).json(destination);
  } catch (error) {
    console.error("Error creating destination:", error);
    res.status(500).json({ error: "Failed to create destination" });
  }
});

// Get all destinations
router.get("/",async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.json(destinations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

// Get a single destination by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destination" });
  }
});

// Update a destination by ID
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    const { name, description, location, tags } = req.body;
    const imageUrl = req.file ? `${process.env.BASE_URL}/uploads/${req.file.filename}` : null; // Use BASE_URL from .env

    await destination.update(req.body);
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: "Failed to update destination" });
  }
});

// Delete a destination by ID
router.delete("/:id", async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    await destination.destroy();
    res.json({ message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete destination" });
  }
});

module.exports = router;
