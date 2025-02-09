const TipoOperacionQuirurgica = require('../models/tipoOperacionQuirurgica');

exports.crearTipoOperacionQuirurgica = async (req, res) => {
  try {
    const nuevaOperacion = await TipoOperacionQuirurgica.create(req.body);
    res.status(201).json({ mensaje: 'Tipo de operación quirúrgica creado exitosamente', operacion: nuevaOperacion });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando tipo de operación quirúrgica', error });
  }
};

exports.obtenerTiposOperacionesQuirurgicas = async (req, res) => {
  try {
    const operaciones = await TipoOperacionQuirurgica.findAll();
    res.status(200).json(operaciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo tipos de operaciones quirúrgicas', error });
  }
};

// Otros métodos CRUD...
