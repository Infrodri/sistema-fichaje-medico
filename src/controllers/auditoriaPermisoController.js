const AuditoriaPermiso = require('../models/auditoriaPermiso');

exports.crearAuditoriaPermiso = async (req, res) => {
  try {
    const nuevaAuditoria = await AuditoriaPermiso.create(req.body);
    res.status(201).json({ mensaje: 'Auditoría de permisos creada exitosamente', auditoria: nuevaAuditoria });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando auditoría de permisos', error });
  }
};

exports.obtenerAuditoriasPermisos = async (req, res) => {
  try {
    const auditorias = await AuditoriaPermiso.findAll();
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo auditorías de permisos', error });
  }
};

// Otros métodos CRUD...
