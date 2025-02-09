const TipoObstetricoGinecologico = require('../models/tipoObstetricoGinecologico');

exports.crearTipoObstetricoGinecologico = async (req, res) => {
  try {
    const nuevoTipo = await TipoObstetricoGinecologico.create(req.body);
    res.status(201).json({ mensaje: 'Tipo obstétrico-ginecológico creado exitosamente', tipo: nuevoTipo });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando tipo obstétrico-ginecológico', error });
  }
};

exports.obtenerTiposObstetricosGinecologicos = async (req, res) => {
  try {
    const tipos = await TipoObstetricoGinecologico.findAll();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo tipos obstétricos-ginecológicos', error });
  }
};

// Otros métodos CRUD...
