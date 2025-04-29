// models/Livraison.js
const mongoose = require('mongoose');

const livraisonSchema = new mongoose.Schema({
  lieuDepart: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  vehicule: {
    type: String,
    enum: ['Camion', 'Fourgon', 'Moto'],
    required: true,
  },
  dateDepart: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Livraison', livraisonSchema);
