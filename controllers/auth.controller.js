// auth.controller.js
const nodemailer = require("nodemailer");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employe = require("../models/employe.model");
// auth.controller.js

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const employe = await Employe.findOne({ username });
    if (!employe) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
    }

    console.log("User found:", employe);
    console.log("Password provided:", password);
    console.log("Password stored:", employe.password);

    const isPasswordValid = await bcrypt.compare(password, employe.password);
    console.log("Is password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      { id: employe._id, poste: employe.poste },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const {
      cin,
      nom,
      prenom,
      dateNaissance,
      poste,
      adresseMail,
      salaire,
      username,
      password,
    } = req.body;

    const existingUser = await Employe.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password during signup:", hashedPassword);

    const newEmploye = new Employe({
      cin,
      nom,
      prenom,
      dateNaissance,
      poste,
      adresseMail,
      salaire,
      username,
      password: hashedPassword,
    });

    await newEmploye.save();

    res.status(201).json({ message: "Inscription réussie!" });
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    res.status(500).json({ message: "Erreur lors de l'inscription." });
  }
};
