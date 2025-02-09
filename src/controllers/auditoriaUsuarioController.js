const AuditoriaUsuario = require('../models/auditoriaUsuario');

exports.crearAuditoriaUsuario = async (req, res) => {
  try {
    const nuevaAuditoria = await AuditoriaUsuario.create(req.body);
    res.status(201).json({ mensaje: 'Auditoría de usuario creada exitosamente', auditoria: nuevaAuditoria });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando auditoría de usuario', error });
  }
};

exports.obtenerAuditoriasUsuarios = async (req, res) => {
  try {
    const auditorias = await AuditoriaUsuario.findAll();
    res.status(200).json(auditorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo auditorías de usuarios', error });
  }
};

// Otros métodos CRUD...
