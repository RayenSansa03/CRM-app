const express = require("express");
const { signup, login } = require("../controllers/employe.controller");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
