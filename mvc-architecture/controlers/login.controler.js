const path = require("path");

const loginData = require("../models/login.model");

const getLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/loging.html"));
};
console.log(loginData);
const postLogin = (req, res) => {
  const { loginEmail, loginPassword } = req.body;
  const newUser = {
    email: loginEmail,
    password: loginPassword,
  };
  loginData.push(newUser);

  res.status(201).send({
    message: "create user",
    loginData,
  });
};

module.exports = {
  getLogin,
  postLogin,
};
