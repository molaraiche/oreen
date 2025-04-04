const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  message: { type: String },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
