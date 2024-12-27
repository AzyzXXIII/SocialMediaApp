const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
  bio: String,
  picture: String,
  birthDate: Date,
});

module.exports = mongoose.model("users", userSchema);
