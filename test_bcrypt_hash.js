const bcrypt = require('bcrypt');

const plainPassword = 'aziz2003';

bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
    if (err) {
        return console.error('Erreur lors du hachage:', err);
    }
    console.log('Mot de passe haché:', hashedPassword);

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
});
