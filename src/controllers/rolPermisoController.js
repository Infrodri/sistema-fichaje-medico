const RolPermiso = require('../models/rolPermiso');

exports.crearRolPermiso = async (req, res) => {
  try {
    const nuevoRolPermiso = await RolPermiso.create(req.body);
    res.status(201).json({ mensaje: 'Relación rol-permiso creada exitosamente', rolPermiso: nuevoRolPermiso });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando relación rol-permiso', error });
  }
};

exports.obtenerRolesPermisos = async (req, res) => {
  try {
    const rolesPermisos = await RolPermiso.findAll();
    res.status(200).json(rolesPermisos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo relaciones rol-permiso', error });
  }
};

// Otros métodos CRUD...
