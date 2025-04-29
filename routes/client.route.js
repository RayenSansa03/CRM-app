const express = require("express");
const {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
  autocompleteClients // Add this line to import the new controller method
} = require("../controllers/client.controller");
const upload = require("../middleware/upload");

const router = express.Router();

// Existing routes
router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", upload.single("image"), createClient);
router.put("/:id", upload.single("image"), updateClient);
router.delete("/:id", deleteClient);

// New route for autocomplete
router.get("/autocomplete", autocompleteClients);

module.exports = router;
