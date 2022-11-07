const mongoose = require("mongoose");
const eventData = new mongoose.Schema(
  {
    title: { type: String, required: true },
    coordinatorName: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Events", eventData);
