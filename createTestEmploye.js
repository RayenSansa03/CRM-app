const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const Employe = require('./models/employe.model'); // Assurez-vous que le chemin est correct

const createTestEmploye = async () => {
  try {
    // Connectez-vous à la base de données
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database!');

    const password = 'test1234'; // Mot de passe fixe pour les tests
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const employe = new Employe({
      cin: '12345678',
      nom: 'Doe',
      prenom: 'Jane',
      dateNaissance: new Date('1990-01-01'),
      poste: 'RH',
      adresseMail: 'nouri.doe@example.com',
      salaire: 5000,
      username: 'nouri',
      password: hashedPassword,
    });

    await employe.save();
    console.log('Employé de test créé:', employe);

    // Déconnectez-vous de la base de données
    await mongoose.disconnect();
    console.log('Disconnected from database!');
  } catch (error) {
    console.error('Erreur lors de la création de l\'employé de test:', error);
    await mongoose.disconnect();
  }
};

createTestEmploye();
