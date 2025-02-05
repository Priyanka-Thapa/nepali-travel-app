const sqlite3 = require("sqlite3").verbose();

const DB_PATH = "./travel.db";
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to SQLite database.");
});

// Create table if not exists
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS destinations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      tags TEXT NOT NULL
    )`
  );
});

module.exports = db;
