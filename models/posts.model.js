const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  media: [],
  description: String,
  creator: { type: mongoose.Types.ObjectId, ref: "users", required: true },
});

module.exports = mongoose.model("post", postSchema);
