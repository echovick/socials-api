const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
  follower: {
    type: Object, // Object Type
    require: true,
    ref: "user",
  },
  following: {
    type: Object, // Object Type
    require: true,
    ref: "user",
  },

  // Timestamp.
});

module.exports = mongoose.model("followr", userSchema);
