const express = require("express");
const app = express();

const mongoose = require("mongoose");

require("dotenv").config();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello sarrour");
});
const url = "mongodb://127.0.0.1:27017/socialmediaapp";

mongoose
  .connect(url)
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Database connection failed:", error));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
