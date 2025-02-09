const PacienteOperacion = require('../models/pacienteOperacion');

exports.crearPacienteOperacion = async (req, res) => {
  try {
    const nuevaOperacion = await PacienteOperacion.create(req.body);
    res.status(201).json({ mensaje: 'Operación de paciente creada exitosamente', operacion: nuevaOperacion });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando operación de paciente', error });
  }
};

exports.obtenerPacientesOperaciones = async (req, res) => {
  try {
    const operaciones = await PacienteOperacion.findAll();
    res.status(200).json(operaciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo operaciones de pacientes', error });
  }
};

// Otros métodos CRUD...
