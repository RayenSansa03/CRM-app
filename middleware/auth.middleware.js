const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé' });
  }

  try {
    const verified = jwt.verify(token, 'votre_secret_jwt');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token invalide' });
  }
};

module.exports = auth;
// auth.middleware.js
const verifyRHRole = (req, res, next) => {
  if (req.user && req.user.role === 'RH') {
    next();
  } else {
    res.status(403).json({ message: 'Accès refusé: seuls les RH peuvent effectuer cette action.' });
  }
};

module.exports = verifyRHRole;
