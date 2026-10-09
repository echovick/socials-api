const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
  {
    reply: {
      type: String,
      required: true,
      trim: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    replylikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

  

    replyCount: {
      type: Number,
      default: 0,
    },

    
    timestamps: true,
     
  }
);

module.exports = mongoose.model("reply", commentsSchema);