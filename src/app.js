const express = require("express");
const authRoutes = require("./routes/authRoute");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({ message: "The Socials API Server is running" });
});

module.exports = app;
