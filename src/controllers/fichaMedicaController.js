const FichaMedica = require('../models/fichaMedica');

exports.crearFichaMedica = async (req, res) => {
  try {
    const nuevaFicha = await FichaMedica.create(req.body);
    res.status(201).json({ mensaje: 'Ficha médica creada exitosamente', ficha: nuevaFicha });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando ficha médica', error });
  }
};

exports.obtenerFichasMedicas = async (req, res) => {
  try {
    const fichas = await FichaMedica.findAll();
    res.status(200).json(fichas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo fichas médicas', error });
  }
};

// Otros métodos CRUD...
