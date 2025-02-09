const TipoAdiccion = require('../models/tipoAdiccion');

exports.crearTipoAdiccion = async (req, res) => {
  try {
    const nuevoTipoAdiccion = await TipoAdiccion.create(req.body);
    res.status(201).json({ mensaje: 'Tipo de adicción creado exitosamente', tipoAdiccion: nuevoTipoAdiccion });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando tipo de adicción', error });
  }
};

exports.obtenerTiposAdiccion = async (req, res) => {
  try {
    const tiposAdiccion = await TipoAdiccion.findAll();
    res.status(200).json(tiposAdiccion);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo tipos de adicción', error });
  }
};

// Otros métodos CRUD...
