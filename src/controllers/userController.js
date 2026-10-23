const User = require("../models/User");

// Get profile details of the user making the request
async function me(req, res) {
  res.json({ message: "User Profile Retrieved Successfully", user: req.user });
}

// Get profile details of a user by ID
async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User Profile Retrieved Successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Invalid user Id" });
  }
}

// Update user profile
async function updateMe(req, res) {}

module.exports = { me, getUser, updateMe };
