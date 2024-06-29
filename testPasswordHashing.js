const bcrypt = require('bcrypt');

async function testPasswordHashing() {
    const password = "monMotDePasseSuperSecret";
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Mot de passe hashé:", hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Le mot de passe correspond-il ?", isMatch);
}

testPasswordHashing();
