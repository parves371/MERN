// hasing password
require("dotenv").config();
const mongoose = require("mongoose");

const loginAuthSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Add { timestamps: true } option to automatically add createdAt and updatedAt fields


module.exports = mongoose.model("LoginAuth", loginAuthSchema);
