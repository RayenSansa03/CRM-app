const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ProjectSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Utilisation de uuid pour générer l'ID
    },
    nom: {
      type: String,
      required: [true, "Veuillez entrer le nom du projet"],
    },
    dateDebut: {
      type: Date,
      required: [true, "Veuillez entrer la date de début du projet"],
    },
    dateFin: {
      type: Date,
      required: [true, "Veuillez entrer la date de fin du projet"],
    },
    sujet: {
      type: String,
      required: [true, "Veuillez entrer le sujet du projet"],
    },
    budget: {
      type: Number,
      required: [true, "Veuillez entrer le budget du projet"],
    },
    etatProjet: {
      type: String,
      required: [true, "Veuillez entrer l'état du projet"],
    },
    client: {
      type: String,
            ref: "Client",  // Assurez-vous que "Client" correspond au modèle de votre client
      required: [true, "Veuillez entrer l'ID du client"],
    },
    reservations: [
      {
        type: String,
        ref: "Reservation", // Référence au modèle Reservation
      }
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
