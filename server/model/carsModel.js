const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mainImage: { type: String },
    secondaryImages: {
      type: [String],
      default: [],
    },
    description: { type: String, required: true },
    video: { type: String },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
    price: { type: Number, required: true },
    hot: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cars", carsSchema);
