const Client = require("../models/client.model");
const upload = require("../middleware/upload"); // Assurez-vous que le chemin est correct
const { v4: uuidv4 } = require("uuid");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ message: error.message });
  }
};

const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ message: error.message });
  }
};

const createClient = async (req, res) => {
  const { nom, prenom, dateNaissance, sexe, dateDebut, dateFin, numeroTel } =
    req.body;

  try {
    const newClient = new Client({
      nom,
      prenom,
      dateNaissance,
      sexe,
      dateDebut,
      dateFin,
      numeroTel,
      image: req.file ? req.file.filename : null,
    });
    await newClient.save();

    res
      .status(201)
      .json({ message: "Client created successfully", client: newClient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = req.file.path;
    }
    const client = await Client.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!client) {
      console.error("Client not found for update:", id);
      return res.status(404).json({ message: "Client non trouvé" });
    }

    console.log("Client updated successfully:", client);
    res.status(200).json(client);
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);

    if (!client) {
      console.error("Client not found for deletion:", id);
      return res.status(404).json({ message: "Client non trouvé" });
    }

    console.log("Client deleted successfully:", client);
    res.status(200).json({ message: "Client supprimé avec succès" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
};
