const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).send("get all user");
};

const getOneUsers = (req, res) => {
  res.status(200).send("get one user");
};

const createUsers = async (req, res) => {
  try {
    const { userName, userAge } = req.body;
    const newUser = new User({
      id: uuidv4(),
      name: userName,
      age: Number(userAge),
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUsers = (req, res) => {
  res.status(200).send("user is updated");
};

const deleteUsers = (req, res) => {
  res.status(200).send("user is deleted");
};

module.exports = {
  getAllUsers,
  getOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
