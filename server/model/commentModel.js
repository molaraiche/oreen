const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
    review: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    hot: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comments", commentSchema);
