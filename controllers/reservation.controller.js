const Reservation = require("../models/reservation.model");
const Project = require("../models/project.model");
const Equipment = require("../models/equipment.model");

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({}).populate("project").populate("equipment");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReservation = async (req, res) => {
    try {
      const { project, equipment, dateDebut, dateFin } = req.body;
  
      // Vérifier si le projet et l'équipement existent
      const existingProject = await Project.findOne({ _id: project });
      const existingEquipment = await Equipment.findOne({ _id: equipment });
  
      if (!existingProject || !existingEquipment) {
        return res.status(400).json({ message: "Le projet ou l'équipement spécifié n'existe pas" });
      }
  
      // Créer la réservation
      const reservation = await Reservation.create({
        project: existingProject._id,
        equipment: existingEquipment._id,
        dateDebut,
        dateFin,
      });
  
      // Récupérer la réservation créée avec uniquement les noms du projet et de l'équipement
      const populatedReservation = await Reservation.findById(reservation._id)
        .populate({ path: 'project', select: 'nom' })
        .populate({ path: 'equipment', select: 'designation' });
  
      res.status(201).json({
        _id: populatedReservation._id,
        project: populatedReservation.project.nom, // Assurez-vous d'utiliser 'nom' pour le projet
        equipment: populatedReservation.equipment.designation, // Utilisez 'designation' pour l'équipement
        dateDebut: populatedReservation.dateDebut,
        dateFin: populatedReservation.dateFin,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Ajoutez ici les autres méthodes pour getReservation, updateReservation et deleteReservation

module.exports = {
  getReservations,
  createReservation,
  // Ajoutez ici les autres méthodes exportées
};