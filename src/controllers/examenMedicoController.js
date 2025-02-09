const ExamenMedico = require('../models/examenMedico');

exports.crearExamenMedico = async (req, res) => {
  try {
    const nuevoExamen = await ExamenMedico.create(req.body);
    res.status(201).json({ mensaje: 'Examen médico creado exitosamente', examen: nuevoExamen });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando examen médico', error });
  }
};

exports.obtenerExamenesMedicos = async (req, res) => {
  try {
    const examenes = await ExamenMedico.findAll();
    res.status(200).json(examenes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo exámenes médicos', error });
  }
};

// Otros métodos CRUD...
