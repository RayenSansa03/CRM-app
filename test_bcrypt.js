const bcrypt = require('bcrypt');

const plainPassword = 'aziz2003';
const hashedPassword = '$2b$10$F6BxCfr7oWvVmu7.OeuJPeEz8elBxpE3WHbeDjWudRZxXlFzcp0vW';

bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
    if (err) {
        return console.error('Erreur lors de la comparaison:', err);
    }
    if (result) {
        console.log('Mot de passe valide!');
    } else {
        console.log('Mot de passe incorrect.');
    }
});
