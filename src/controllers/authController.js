const bcrypt = require("bcrypt");
const User = require("../models/User");

async function register(req, res) {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    // Validate / Check that all fields are provided
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({
        message: "Please provide all required information",
      });
    }

    // Check if user already exists
    const isUserExisting = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isUserExisting) {
      return res.status(409).json({
        message: "Email or username already exists",
      });
    }

    // Hash / Encrypt the users password
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Account Created",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Oops, Something went wrong, we're fixing it!",
    });
  }
}

module.exports = { register };
