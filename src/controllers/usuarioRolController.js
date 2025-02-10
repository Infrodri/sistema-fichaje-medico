const UsuarioRol = require('../models/usuarioRol');
const { validationResult } = require('express-validator');

exports.crearUsuarioRol = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

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

exports.actualizarUsuarioRol = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await UsuarioRol.update(req.body, { where: { id_usuario: id, id_rol: req.body.id_rol } });
    if (updated) {
      const updatedUsuarioRol = await UsuarioRol.findOne({ where: { id_usuario: id, id_rol: req.body.id_rol } });
      return res.status(200).json({ mensaje: 'Relación usuario-rol actualizada exitosamente', usuarioRol: updatedUsuarioRol });
    }
    throw new Error('Relación usuario-rol no encontrada');
  } catch (error) {
    res.status(500).json({ mensaje: 'Error actualizando relación usuario-rol', error });
  }
};

exports.eliminarUsuarioRol = async (req, res) => {
  const { id_usuario, id_rol } = req.params;
  try {
    const deleted = await UsuarioRol.destroy({ where: { id_usuario, id_rol } });
    if (deleted) {
      return res.status(200).json({ mensaje: 'Relación usuario-rol eliminada exitosamente' });
    }
    throw new Error('Relación usuario-rol no encontrada');
  } catch (error) {
    res.status(500).json({ mensaje: 'Error eliminando relación usuario-rol', error });
  }
};

