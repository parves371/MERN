const config = require("./config");
const mongoose = require("mongoose");
const db = config.db.url;
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));
