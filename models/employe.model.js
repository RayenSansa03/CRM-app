const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const EmployeSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    cin: {
      type: String,
      required: [true, "Veuillez entrer le CIN de l'employé"],
    },
    nom: {
      type: String,
      required: [true, "Veuillez entrer le nom de l'employé"],
    },
    prenom: {
      type: String,
      required: [true, "Veuillez entrer le prénom de l'employé"],
    },
    dateNaissance: {
      type: Date,
      required: [true, "Veuillez entrer la date de naissance de l'employé"],
    },
    poste: {
      type: String,
      required: [true, "Veuillez entrer le poste de l'employé"],
    },
    adresseMail: {
      type: String,
      required: [true, "Veuillez entrer l'adresse mail de l'employé"],
      unique: true,
    },
    salaire: {
      type: Number,
      required: [true, "Veuillez entrer le salaire de l'employé"],
    },
    username: {
      type: String,
      required: [true, "Veuillez entrer le nom d'utilisateur"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Veuillez entrer le mot de passe"],
    },
  },
  {
    timestamps: true,
  }
);

EmployeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

EmployeSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Employe = mongoose.model('Employe', EmployeSchema);
module.exports = Employe;
