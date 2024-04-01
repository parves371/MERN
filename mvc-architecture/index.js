const express = require("express");

const userRouter = require("./routes/users.route");
const loginUser = require("./routes/login.route");

const port = 3000;
const hostname = "127.0.0.1";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/login",loginUser);

app.use((req, res) => {
  res.status(404).send("<h1> this is 404 page </h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${hostname}:${port}`);
});
