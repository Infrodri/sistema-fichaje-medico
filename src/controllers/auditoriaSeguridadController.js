const AuditoriaSeguridad = require('../models/auditoriaSeguridad');

exports.crearAuditoriaSeguridad = async (req, res) => {
  try {
    const nuevaAuditoria = await AuditoriaSeguridad.create(req.body);
    res.status(201).json({ mensaje: 'Auditoría de seguridad creada exitosamente', auditoria: nuevaAuditoria });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando auditoría de seguridad', error });
  }
};

exports.obtenerAuditoriasSeguridad = async (req, res) => {
  try {
    const auditorias = await AuditoriaSeguridad.findAll();
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo auditorías de seguridad', error });
  }
};

// Otros métodos CRUD...
