const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Employe = require("../models/employe.model");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const getEmployes = async (req, res) => {
  try {
    const employes = await Employe.find({});
    res.status(200).json(employes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const employe = await Employe.findById(id);
    res.status(200).json(employe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmploye = async (req, res) => {
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

    const existingEmploye = await Employe.findOne({
      $or: [{ adresseMail }, { username }],
    });
    if (existingEmploye) {
      return res
        .status(400)
        .json({ message: "Email ou nom d'utilisateur déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const employe = new Employe({
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

    await employe.save();

    // Envoyer un email à l'employé nouvellement créé
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adresseMail,
      subject: "Votre compte employé a été créé",
      text: `Bonjour ${prenom},\n\nVotre compte employé a été créé avec succès. Voici vos informations de connexion :\n\nNom d'utilisateur : ${username}\nMot de passe : ${password}\n\nVeuillez vous connecter et changer votre mot de passe dès que possible en utilisant le lien suivant : [Lien de connexion]\n\nMerci.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Erreur lors de l'envoi de l'email :", error);
        return res
          .status(500)
          .json({ message: "Erreur lors de l'envoi de l'email" });
      } else {
        console.log("Email envoyé : " + info.response);
      }
    });

    res.status(200).json(employe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
      console.log("Hashed password during update:", updates.password);
    }

    const employe = await Employe.findByIdAndUpdate(id, updates, { new: true });

    if (!employe) {
      return res.status(404).json({ message: "Employé non trouvé" });
    }

    res.status(200).json(employe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const employe = await Employe.findByIdAndDelete(id);

    if (!employe) {
      return res.status(404).json({ message: "Employé non trouvé" });
    }

    res.status(200).json({ message: "Employé supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
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

    const existingEmploye = await Employe.findOne({
      $or: [{ adresseMail }, { username }],
    });
    if (existingEmploye) {
      return res
        .status(400)
        .json({ message: "Email ou nom d'utilisateur déjà utilisé" });
    }

    const employe = new Employe({
      cin,
      nom,
      prenom,
      dateNaissance,
      poste,
      adresseMail,
      salaire,
      username,
      password,
    });

    await employe.save();

    res.status(201).json({ message: "Employé créé avec succès", employe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const employe = await Employe.findOne({ username });
    if (!employe) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, employe.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
    }

    const token = jwt.sign({ id: employe._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEmployes,
  getEmploye,
  createEmploye,
  updateEmploye,
  deleteEmploye,
  signup,
  login,
};
