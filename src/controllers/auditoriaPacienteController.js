const AuditoriaPaciente = require('../models/auditoriaPaciente');

exports.crearAuditoriaPaciente = async (req, res) => {
  try {
    const nuevaAuditoria = await AuditoriaPaciente.create(req.body);
    res.status(201).json({ mensaje: 'Auditoría de paciente creada exitosamente', auditoria: nuevaAuditoria });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando auditoría de paciente', error });
  }
};

exports.obtenerAuditoriasPacientes = async (req, res) => {
  try {
    const auditorias = await AuditoriaPaciente.findAll();
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo auditorías de pacientes', error });
  }
};

// Otros métodos CRUD...
