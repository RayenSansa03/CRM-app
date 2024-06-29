const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const SalleSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Utilisation de uuid pour générer l'ID
    },
    prixParJour: {
      type: Number,
      required: [true, "Veuillez entrer le prix par jour"],
    },
    capaciteMaximale: {
      type: Number,
      required: [true, "Veuillez entrer la capacité maximale"],
    },
    etat: {
      type: String,
      required: [true, "Veuillez entrer l'état de la salle"],
    },
  },
  {
    timestamps: true,
  }
);

const Salle = mongoose.model("Salle", SalleSchema);
module.exports = Salle;
