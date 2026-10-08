const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
likes: {
    type: Object,
    require: true,
    ref: "user"
},
  likescount: {
        type: Number,
        default: 0,
    },

   





})

module.exports = mongoose.model("likes", userSchema);