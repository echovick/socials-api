const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    author: {
        type: Object,
        ref: "User",
        required: true,
    },

    content: {
        type: String,
        required: true,
        trim: true,
    },

  
 

});

module.exports = mongoose.model("Post", postSchema);