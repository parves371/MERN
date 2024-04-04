const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("hi i am home");
});

// handaling invalid routes
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// handaling server err
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "somthing broke",
  });
});
module.exports = app;
