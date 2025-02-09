const PacienteAdiccion = require('../models/pacienteAdiccion');

exports.crearPacienteAdiccion = async (req, res) => {
  try {
    const nuevaAdiccion = await PacienteAdiccion.create(req.body);
    res.status(201).json({ mensaje: 'Adicción de paciente creada exitosamente', adiccion: nuevaAdiccion });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando adicción de paciente', error });
  }
};

exports.obtenerPacientesAdicciones = async (req, res) => {
  try {
    const adicciones = await PacienteAdiccion.findAll();
    res.status(200).json(adicciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo adicciones de pacientes', error });
  }
};

// Otros métodos CRUD...
