const Paciente = require('../models/paciente');

exports.crearPaciente = async (req, res) => {
  try {
    const nuevoPaciente = await Paciente.create(req.body);
    res.status(201).json({ mensaje: 'Paciente creado exitosamente', paciente: nuevoPaciente });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando paciente', error });
  }
};

exports.obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo pacientes', error });
  }
};

// Otros métodos CRUD...
