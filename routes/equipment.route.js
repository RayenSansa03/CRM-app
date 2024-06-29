const express = require("express");
const {
  getEquipments,
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} = require("../controllers/equipment.controller");

const router = express.Router();

router.get("/", getEquipments);
router.get("/:id", getEquipment);
router.post("/", createEquipment);
router.put("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);

module.exports = router;
