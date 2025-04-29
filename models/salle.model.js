const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const salleSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 }, // Utilise un UUID comme identifiant
  nom: { type: String, required: true },
  prixParJour: { type: Number, required: true },
  capaciteMaximale: { type: Number, required: true },
  etat: { type: String, required: true },
  image: { type: String, required: false },
});

const Salle = mongoose.model("Salle", salleSchema);

module.exports = Salle;
