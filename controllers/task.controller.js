const Task = require("../models/task.model");
const Project = require("../models/project.model");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la récupération des tâches",
      error: error.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: "Tâche non trouvée" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la récupération de la tâche",
      error: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, status, project } = req.body;

    const existingProject = await Project.findById(project);
    if (!existingProject) {
      return res.status(400).json({ message: "Le projet spécifié n'existe pas" });
    }

    const task = await Task.create({ title, status, project });
    res.status(201).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la création de la tâche",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

    if (!task) {
      return res.status(404).json({ message: "Tâche non trouvée" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Erreur lors de la mise à jour de la tâche",
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ message: "Tâche non trouvée" });
    }

    res.status(200).json({ message: "Tâche supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
