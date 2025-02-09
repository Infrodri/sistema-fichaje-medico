const Error = require('../models/error');

exports.crearError = async (req, res) => {
  try {
    const nuevoError = await Error.create(req.body);
    res.status(201).json({ mensaje: 'Error registrado exitosamente', error: nuevoError });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error registrando el error', error });
  }
};

exports.obtenerErrores = async (req, res) => {
  try {
    const errores = await Error.findAll();
    res.status(200).json(errores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo errores', error });
  }
};

// Otros métodos CRUD...
