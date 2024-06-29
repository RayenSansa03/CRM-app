const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const EquipmentSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    designation: {
      type: String,
      required: [true, "Veuillez entrer la désignation de l'équipement"],
    },
    cout: {
      type: Number,
      required: [true, "Veuillez entrer le coût de l'équipement"],
    },
    categorie: {
      type: String,
      required: [true, "Veuillez entrer la catégorie de l'équipement"],
    },
    description: {
      type: String,
      required: [true, "Veuillez entrer la description de l'équipement"],
    },
    etat: {
      type: String,
      required: [true, "Veuillez entrer l'état de l'équipement"],
    },
  },
  {
    timestamps: true,
  }
);

const Equipment = mongoose.model("Equipment", EquipmentSchema);
module.exports = Equipment;
