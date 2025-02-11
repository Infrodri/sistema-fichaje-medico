const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ mensaje: "Error del servidor: Clave JWT no definida." });
  }

  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Acceso denegado. No hay token proporcionado.' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensaje: 'Formato de token incorrecto.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ mensaje: "Token expirado." });
    } else {
      return res.status(401).json({ mensaje: "Token inválido." });
    }
  }
};


