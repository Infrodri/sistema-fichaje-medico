const Permiso = require('../models/permiso');

exports.crearPermiso = async (req, res) => {
  try {
    const nuevoPermiso = await Permiso.create(req.body);
    res.status(201).json({ mensaje: 'Permiso creado exitosamente', permiso: nuevoPermiso });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando permiso', error });
  }
};

exports.obtenerPermisos = async (req, res) => {
  try {
    const permisos = await Permiso.findAll();
    res.status(200).json(permisos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo permisos', error });
  }
};

// Otros métodos CRUD...
