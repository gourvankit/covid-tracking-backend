const mongoose = require("mongoose");
const volunteerData = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Volunteer", volunteerData);
