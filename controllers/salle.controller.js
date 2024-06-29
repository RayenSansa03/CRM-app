const Salle = require("../models/salle.model");

const getSalles = async (req, res) => {
  try {
    const salles = await Salle.find({});
    res.status(200).json(salles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findById(id);
    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSalle = async (req, res) => {
  try {
    const salle = await Salle.create(req.body);
    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findByIdAndUpdate(id, req.body, { new: true });

    if (!salle) {
      return res.status(404).json({ message: "Salle non trouvée" });
    }

    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findByIdAndDelete(id);

    if (!salle) {
      return res.status(404).json({ message: "Salle non trouvée" });
    }

    res.status(200).json({ message: "Salle supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSalles,
  getSalle,
  createSalle,
  updateSalle,
  deleteSalle,
};
