const express = require("express");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "The Socials API Server is running" });
});

module.exports = app;
