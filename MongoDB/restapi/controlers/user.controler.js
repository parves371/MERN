const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOneUsers = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id }, { _id: 0 }).select({
      age: 1,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
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
    res.status(500).json({ message: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    const { userName, userAge } = req.body;
    const user = await User.findOne({ id: req.params.id });
    user.name = userName;
    user.age = Number(userAge);
    user.save();
    res.status(200).json({
      message: "data updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      message: "data is deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
