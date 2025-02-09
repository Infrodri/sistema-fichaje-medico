const Medico = require('../models/medico');

exports.crearMedico = async (req, res) => {
  try {
    const nuevoMedico = await Medico.create(req.body);
    res.status(201).json({ mensaje: 'Médico creado exitosamente', medico: nuevoMedico });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando médico', error });
  }
};

exports.obtenerMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo médicos', error });
  }
};

// Otros métodos CRUD...
