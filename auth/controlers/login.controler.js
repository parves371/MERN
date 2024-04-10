const User = require("../models/login.model");
const md5 = require("md5");
// hasing pawword
const bcrypt = require("bcrypt");
const saltRounds = 10;
const postRregister = async (req, res) => {
  try {
    // Create a new user instance
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });
      // Save the new user to the database
      await newUser.save();

      // Respond with a success message and the new user details
      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
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
    // Find the user in the database by email
    const user = await User.findOne({ email: req.body.email });

    // If user doesn't exist, respond with 404 Not Found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      // Check if the provided password matches the user's password (assuming passwords are hashed)

      if (!result) {
        // If password doesn't match, respond with 401 Unauthorized
        return res.status(401).json({ message: "Invalid password" });
      }

      // If the user exists and password is correct, respond with 200 OK and user details
      res.status(200).json({
        message: "Login successful",
        user,
      });
    });
  } catch (error) {
    // Handle any errors that occur during login
    res.status(500).json({
      message: "Failed to login",
      error: error.message,
    });
  }
};

module.exports = { postLogin, postRregister };
