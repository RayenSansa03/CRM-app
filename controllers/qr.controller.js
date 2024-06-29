const { generateQRCode } = require("../services/qr.service");
const Project = require("../models/project.model");

const getQRCode = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).send();

    const url = `${req.protocol}://${req.get("host")}/projects/${project._id}`;
    const qrCode = await generateQRCode(url);

    res.send(`<img src="${qrCode}">`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getQRCode };
