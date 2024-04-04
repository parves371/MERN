const mongoose = require("mongoose");

const config = require("./config");

const dbUrl = config.db.url;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("db is connect with atlast");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
