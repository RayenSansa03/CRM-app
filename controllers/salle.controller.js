const Salle = require("../models/salle.model");
const { v4: uuidv4 } = require("uuid");

// Middleware pour gérer les uploads d'image
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Dossier où les images seront sauvegardées
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nom de fichier unique
  },
});
const upload = multer({ storage: storage });

// Récupérer toutes les salles
const getSalles = async (req, res) => {
  try {
    const salles = await Salle.find({});
    res.status(200).json(salles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une salle par ID
const getSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findById(id);
    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer une nouvelle salle
const createSalle = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    // Si une image est uploadée, stockez le chemin
    const imagePath = req.file ? req.file.path : "";

    // Créer les données de la salle avec un UUID comme identifiant
    const salleData = {
      _id: uuidv4(),
      nom: req.body.nom,
      prixParJour: req.body.prixParJour,
      capaciteMaximale: req.body.capaciteMaximale,
      etat: req.body.etat,
      description: req.body.description,
      image: imagePath,
    };

    // Enregistrer la nouvelle salle dans la base de données
    const salle = await Salle.create(salleData);
    res.status(200).json(salle);
  } catch (error) {
    console.error("Error creating salle:", error);
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une salle existante
const updateSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findByIdAndUpdate(id, req.body, { new: true });

    if (!salle) {
      return res.status(404).json({ message: "Salle non trouvée" });
    }

    res.status(200).json(salle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une salle
const deleteSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salle = await Salle.findByIdAndDelete(id);

    if (!salle) {
      return res.status(404).json({ message: "Salle non trouvée" });
    }

    res.status(200).json({ message: "Salle supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSalles,
  getSalle,
  createSalle,
  updateSalle,
  deleteSalle,
  upload, // Exporter le middleware upload pour l'utiliser dans les routes
};
