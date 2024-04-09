const express = require("express");
const cors = require("cors");

const app = express();

const loginRouter = require("./routes/loging.route");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("", loginRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Hi, I am home!");
});

// Handling route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Handling server errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({
    message: "Something broke",
  });
});

module.exports = app;
