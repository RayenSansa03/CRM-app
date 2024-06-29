const express = require("express");
const router = express.Router();
const qrController = require("../controllers/qr.controller");

router.get("/:id/qrcode", qrController.getQRCode);

module.exports = router;
