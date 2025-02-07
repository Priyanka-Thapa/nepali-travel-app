const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Hardcoded users (No database)
const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find user in hardcoded list
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

module.exports = router;