const express = require("express");
const { Destination } = require("../models");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");


// Create a new destination
router.post("/",authMiddleware, async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ error: "Failed to create destination" });
  }
});

// Get all destinations
router.get("/",authMiddleware, async (req, res) => {
  try {
    const destinations = await Destination.findAll();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch destinations" });
  }
});

// Get a single destination by ID
router.get("/:id",authMiddleware, async (req, res) => {
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
router.put("/:id",authMiddleware, async (req, res) => {
  try {
    const destination = await Destination.findByPk(req.params.id);
    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }
    await destination.update(req.body);
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: "Failed to update destination" });
  }
});

// Delete a destination by ID
router.delete("/:id",authMiddleware, async (req, res) => {
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
