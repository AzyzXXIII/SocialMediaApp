const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello sarrour");
});

// Import and use user routes
const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes); // Mount the router at /user

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Database connection failed:", error));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
