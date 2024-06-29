const express = require("express");
const {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/client.controller");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", upload.single("image"), createClient);
router.put("/:id", upload.single("image"), updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
