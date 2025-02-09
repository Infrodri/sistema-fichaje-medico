const AuditoriaEsquema = require('../models/auditoriaEsquema');

exports.crearAuditoriaEsquema = async (req, res) => {
  try {
    const nuevaAuditoria = await AuditoriaEsquema.create(req.body);
    res.status(201).json({ mensaje: 'Auditoría de esquema creada exitosamente', auditoria: nuevaAuditoria });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando auditoría de esquema', error });
  }
};

exports.obtenerAuditoriasEsquema = async (req, res) => {
  try {
    const auditorias = await AuditoriaEsquema.findAll();
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo auditorías de esquema', error });
  }
};

// Otros métodos CRUD...
