const express = require('express');
const router = express.Router();

const {
  getReservations,
  createReservation,
  // Ajoutez ici les autres méthodes importées
} = require('../controllers/reservation.controller');

// Utilisez seulement '/' ici parce que le préfixe '/api/reservations' est déjà ajouté dans app.js
router.get('/', getReservations);
router.post('/', createReservation);

// Ajoutez ici les autres routes pour getReservation, updateReservation et deleteReservation

module.exports = router;
