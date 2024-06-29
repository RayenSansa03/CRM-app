const Formation = require("../models/formation.model");

const getFormations = async (req, res) => {
  try {
    const formations = await Formation.find({});
    res.status(200).json(formations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFormation = async (req, res) => {
  try {
    const { id } = req.params;
    const formation = await Formation.findById(id);
    res.status(200).json(formation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFormation = async (req, res) => {
  try {
    const formation = await Formation.create(req.body);
    res.status(200).json(formation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFormation = async (req, res) => {
  try {
    const { id } = req.params;
    const formation = await Formation.findByIdAndUpdate(id, req.body, { new: true });

    if (!formation) {
      return res.status(404).json({ message: "Formation non trouvée" });
    }

    res.status(200).json(formation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFormation = async (req, res) => {
  try {
    const { id } = req.params;
    const formation = await Formation.findByIdAndDelete(id);

    if (!formation) {
      return res.status(404).json({ message: "Formation non trouvée" });
    }

    res.status(200).json({ message: "Formation supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFormations,
  getFormation,
  createFormation,
  updateFormation,
  deleteFormation,
};
