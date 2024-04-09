const User = require("../models/login.model");

const postRregister = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message and the new user details
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle any errors that occur during registration
    res.status(500).json({
      message: "Failed to register user",
      error: error.message,
    });
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).json({
        message: "Login successful",
        user,
      });
    } else {
      res.status(404).json({ status: "not valide user" });
    }
  } catch (error) {
    // Handle any errors that occur during login
    res.status(500).json({
      message: "Failed to login",
      error: error.message,
    });
  }
};

module.exports = { postLogin, postRregister };
