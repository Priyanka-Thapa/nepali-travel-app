const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const path = require("path");

const port = process.env.PORT || 5000;

const destinationRoutes = require("./src/routes/destinationRoutes");
const authRoutes = require("./src/routes/authRoutes");
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Serve frontend for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});


app.get("/", (req, res) => {
    res.send("Welcome to Nepali Travel App!");
});

app.use("/api/auth", authRoutes);

app.use("/api/destinations", destinationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
