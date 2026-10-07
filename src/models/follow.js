const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
followers: {
    type: Object,
    require: true,
    ref: "user"
},
following: {
    type: Object,
    require: true,
   ref: "user"
},

  followingcount: {
        type: Number,
        default: 0,
    },



})

module.exports = mongoose.model("followr", userSchema);