const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
});

const carsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mainImage: { type: imageSchema, required: true },
    secondaryImages: {
      type: [imageSchema],
      default: [],
      required: true, // Marking as required
    },
    description: { type: String, required: true },
    video: { type: imageSchema }, // Assuming video is optional
    brand: { type: String, required: true },
    model: { type: String, required: true },
    rate: { type: Number, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cars", carsSchema);
