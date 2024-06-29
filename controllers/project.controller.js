const Project = require("../models/project.model");
const Client = require("../models/client.model");

const getProjects = async (req, res) => {
  try {
    // Récupérer tous les projets et inclure les champs nom et prenom du client
    const projects = await Project.find({}).populate("client", "nom prenom");
    res.status(200).json(projects);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la récupération des projets",
      error: error.message,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id).populate({
      path: "client",
      select: "nom prenom", // Sélectionne seulement les champs nom et prenom du client
    });

    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la récupération du projet",
      error: error.message,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const { nom, client, dateDebut, dateFin, sujet, budget, etatProjet } = req.body;

    // Vérifier si le client existe déjà
    const existingClient = await Client.findOne({ _id: client });
    if (!existingClient) {
      return res.status(400).json({ message: "Le client spécifié n'existe pas" });
    }

    // Créer le projet en utilisant l'UUID du client
    const project = await Project.create({
      nom,
      client: existingClient._id,
      dateDebut,
      dateFin,
      sujet,
      budget,
      etatProjet,
    });

    // Récupérer le projet créé avec les informations du client
    const populatedProject = await Project.findById(project._id).populate("client", "nom prenom");

    res.status(201).json(populatedProject);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la création du projet",
      error: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("client", "nom prenom");

    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la mise à jour du projet",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }

    res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
