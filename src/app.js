const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

// Get all destinations
app.get("/destinations", (req, res) => {
  const sql = "SELECT * FROM destinations";
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Get a single destination by ID
app.get("/destinations/:id", (req, res) => {
  const sql = "SELECT * FROM destinations WHERE id = ?";
  db.get(sql, [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

// Add a new destination
app.post("/destinations", (req, res) => {
  const { name, description, image_url, tags } = req.body;
  const sql = "INSERT INTO destinations (name, description, image_url, tags) VALUES (?, ?, ?, ?)";
  db.run(sql, [name, description, image_url, tags], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, description, image_url, tags });
  });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
