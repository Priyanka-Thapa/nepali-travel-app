const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const path = require("path");
const { router: authRoutes, authenticateToken } = require("./src/routes/authRoutes");

const port = process.env.PORT || 5000;

const destinationRoutes = require("./src/routes/destinationRoutes");
app.use(cors());
app.use(express.json()); // Middleware to parse JSON


// app.get("/", (req, res) => {
//   res.send("heheh");
// });

app.use("/api/auth", authRoutes);

// ✅ API routes MUST be defined first
app.get("/api/destinations", (req, res) => {
  res.json([
      { id: 1, name: "Pokhara", location: "Nepal" },
      { id: 2, name: "Everest Base Camp", location: "Nepal" }
  ]);
});

// app.use("/api/destinations", destinationRoutes);

// // Serve static frontend files
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // Serve frontend for all routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
