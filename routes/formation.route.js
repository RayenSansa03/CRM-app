const express = require("express");
const {
  getFormations,
  getFormation,
  createFormation,
  updateFormation,
  deleteFormation,
} = require("../controllers/formation.controller");

const router = express.Router();

router.get("/", getFormations);
router.get("/:id", getFormation);
router.post("/", createFormation);
router.put("/:id", updateFormation);
router.delete("/:id", deleteFormation);

module.exports = router;
