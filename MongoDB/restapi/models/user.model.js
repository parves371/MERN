const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
