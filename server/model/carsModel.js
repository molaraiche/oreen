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
      required: true,
    },
    description: { type: String, required: true },
    video: { type: imageSchema },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    rate: { type: Number, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["free", "pending", "approved", "rejected"],
      default: "free",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cars", carsSchema);
