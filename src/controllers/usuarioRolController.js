const UsuarioRol = require('../models/usuarioRol');

exports.crearUsuarioRol = async (req, res) => {
  try {
    const nuevoUsuarioRol = await UsuarioRol.create(req.body);
    res.status(201).json({ mensaje: 'Relación usuario-rol creada exitosamente', usuarioRol: nuevoUsuarioRol });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando relación usuario-rol', error });
  }
};

exports.obtenerUsuariosRoles = async (req, res) => {
  try {
    const usuariosRoles = await UsuarioRol.findAll();
    res.status(200).json(usuariosRoles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo relaciones usuario-rol', error });
  }
};

// Otros métodos CRUD...
