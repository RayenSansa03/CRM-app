const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const clientSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  dateNaissance: {
    type: Date,
    required: true,
  },
  sexe: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dateDebut: {
    type: Date,
    required: true,
  },
  dateFin: {
    type: Date,
    required: true,
  },
  numeroTel: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Client", clientSchema);
