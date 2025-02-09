const Acceso = require('../models/acceso');

exports.crearAcceso = async (req, res) => {
  try {
    const nuevoAcceso = await Acceso.create(req.body);
    res.status(201).json({ mensaje: 'Acceso creado exitosamente', acceso: nuevoAcceso });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando acceso', error });
  }
};

exports.obtenerAccesos = async (req, res) => {
  try {
    const accesos = await Acceso.findAll();
    res.status(200).json(accesos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo accesos', error });
  }
};

// Otros métodos CRUD...
