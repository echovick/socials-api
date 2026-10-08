const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
  // Comment, that is being like
  // Post, that is being liked
  // User, that is liking the comment
  // Timestamp, the date and time of the like
});

module.exports = mongoose.model("likes", userSchema);
