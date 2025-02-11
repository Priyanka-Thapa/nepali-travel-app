const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY || "123"; // Ensure SECRET_KEY is defined

// Hardcoded admin user
const adminUser = {
  username: "admin",
  password: bcrypt.hashSync("admin123", 10), // Hashed password
};

// Login route
router.post("/login", async (req, res) => {
  try {
    console.log("Login attempt:", req.body);

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    if (username !== adminUser.username || !bcrypt.compareSync(password, adminUser.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Unauthorized" });

  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

module.exports = { router, authenticateToken };
