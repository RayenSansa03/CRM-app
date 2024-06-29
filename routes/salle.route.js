const express = require("express");
const {
  getSalles,
  getSalle,
  createSalle,
  updateSalle,
  deleteSalle,
} = require("../controllers/salle.controller");

const router = express.Router();

router.get("/", getSalles);
router.get("/:id", getSalle);
router.post("/", createSalle);
router.put("/:id", updateSalle);
router.delete("/:id", deleteSalle);

module.exports = router;
