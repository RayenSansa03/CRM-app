const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const TaskSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    title: {
      type: String,
      required: [true, "Veuillez entrer le titre de la tâche"],
    },
    status: {
      type: String,
      enum: ['to do', 'in progress', 'done'],
      default: 'to do',
    },
    project: {
      type: String,
      ref: "Project",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
