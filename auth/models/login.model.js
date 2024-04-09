const mongoose = require("mongoose");

const loginAuthSchema = mongoose.Schema(
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
