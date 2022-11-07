const mongoose = require("mongoose");
const inputData = new mongoose.Schema(
  {
    breath_shortness: { type: String, required: true, unique: true },
    above_60: { type: String, required: true },
    has_cough: { type: String, required: true },
    has_fever: { type: String, required: true },
    female: { type: String, required: true },
    have_travelled: { type: String, required: true },
    contact_with_someone: { type: String, required: true },
    have_headache: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Input", inputData);
