const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    Comment: {
        type: strings,
        require: true,
        ref: "user"
    },
    commentscount: {
        type: Number,
        default: 0,
    },






})

module.exports = mongoose.model("comments", userSchema);