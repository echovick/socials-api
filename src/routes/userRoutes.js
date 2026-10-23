const express = require("express");
const protect = require("../middleware/auth");
const { me, getUser } = require("../controllers/userController");

const router = express.Router();

router.get("/me", protect, me);

module.exports = router;
