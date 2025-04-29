// controllers/livraisonController.js
const Livraison = require('../models/livraison.model');

// Créer une nouvelle livraison
exports.createLivraison = async (req, res) => {
  try {
    const livraison = new Livraison(req.body);
    await livraison.save();
    res.status(201).json(livraison);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer toutes les livraisons
exports.getAllLivraisons = async (req, res) => {
  try {
    const livraisons = await Livraison.find();
    res.status(200).json(livraisons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une livraison par son ID
exports.getLivraisonById = async (req, res) => {
  try {
    const livraison = await Livraison.findById(req.params.id);
    if (!livraison) {
      return res.status(404).json({ message: 'Livraison non trouvée' });
    }
    res.status(200).json(livraison);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une livraison
exports.updateLivraison = async (req, res) => {
  try {
    const livraison = await Livraison.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livraison) {
      return res.status(404).json({ message: 'Livraison non trouvée' });
    }
    res.status(200).json(livraison);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une livraison
exports.deleteLivraison = async (req, res) => {
  try {
    const livraison = await Livraison.findByIdAndDelete(req.params.id);
    if (!livraison) {
      return res.status(404).json({ message: 'Livraison non trouvée' });
    }
    res.status(200).json({ message: 'Livraison supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLivraisons = async (req, res) => {
  try {
    const livraisons = await Livraison.find();
    res.status(200).json(livraisons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
