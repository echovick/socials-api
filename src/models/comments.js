const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  // User
  // Post
  // Comment
  // Timestamp

  Comment: {
    type: strings,
    require: true,
    ref: "user",
  },
});

module.exports = mongoose.model("comments", userSchema);
