const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Import salesData from the JSON file
const salesData = require("./data/salesData.json");

// Middleware
app.use(cors());
app.use(express.json());

// API Route to get sales data
app.get("/api/sales", (req, res) => {
  res.json(salesData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
