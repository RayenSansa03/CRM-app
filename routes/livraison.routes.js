const express = require('express');
const router = express.Router();
const { deleteLivraison, createLivraison,getLivraisons}= require('../controllers/livraison.controller');
// Créer une nouvelle livraison
router.post('/livraisons', createLivraison);

// Récupérer toutes les livraisons
router.get('/livraisons', getLivraisons);

module.exports = router;
