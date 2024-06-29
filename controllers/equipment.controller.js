const Equipment = require("../models/equipment.model");

const getEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find({});
    res.status(200).json(equipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findById(id);
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!equipment) {
      return res.status(404).json({ message: "Équipement non trouvé" });
    }

    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEquipment = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await Equipment.findByIdAndDelete(id);

    if (!equipment) {
      return res.status(404).json({ message: "Équipement non trouvé" });
    }

    res.status(200).json({ message: "Équipement supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEquipments,
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
