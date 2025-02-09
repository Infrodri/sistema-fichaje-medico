const PacienteObstetricoGinecologico = require('../models/pacienteObstetricoGinecologico');

exports.crearPacienteObstetricoGinecologico = async (req, res) => {
  try {
    const nuevoRegistro = await PacienteObstetricoGinecologico.create(req.body);
    res.status(201).json({ mensaje: 'Registro obstétrico-ginecológico de paciente creado exitosamente', registro: nuevoRegistro });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando registro obstétrico-ginecológico de paciente', error });
  }
};

exports.obtenerPacientesObstetricosGinecologicos = async (req, res) => {
  try {
    const registros = await PacienteObstetricoGinecologico.findAll();
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo registros obstétrico-ginecológicos de pacientes', error });
  }
};

// Otros métodos CRUD...
