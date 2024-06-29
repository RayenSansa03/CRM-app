const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const FormationSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Utilisation de uuid pour générer l'ID
    },
    titre: {
      type: String,
      required: [true, "Veuillez entrer le titre de la formation"],
    },
    description: {
      type: String,
      required: [true, "Veuillez entrer la description de la formation"],
    },
    dateDebut: {
      type: Date,
      required: [true, "Veuillez entrer la date de début"],
    },
    niveauFormation: {
      type: String,
      required: [true, "Veuillez entrer le niveau de formation"],
    },
    cout: {
      type: Number,
      required: [true, "Veuillez entrer le coût de la formation"],
    },
  },
  {
    timestamps: true,
  }
);

const Formation = mongoose.model("Formation", FormationSchema);
module.exports = Formation;
