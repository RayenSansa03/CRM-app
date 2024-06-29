const express = require("express");
const {
  signup,
  login,
  getEmployes,
  getEmploye,
  createEmploye,
  updateEmploye,
  deleteEmploye,
} = require("../controllers/employe.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getEmployes);
router.get("/:id", getEmploye);
router.post("/", createEmploye);
router.put("/:id", updateEmploye);
router.delete("/:id", deleteEmploye);

module.exports = router;
