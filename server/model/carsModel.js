const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mainImage: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    SecondaryImages: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      url: { type: String },
      public_id: { type: String },
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cars", carsSchema);
