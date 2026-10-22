const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

function createToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

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

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // check if either email or password is empty
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = createToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {}
}

module.exports = { register, login };
