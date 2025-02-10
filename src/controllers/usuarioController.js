const Usuario = require('../models/usuario');
const AuditoriaUsuario = require('../models/auditoriaUsuario');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const saltRounds = 10;

// Función para encriptar contraseñas
const encriptarContrasena = async (contrasena) => {
  const hash = await bcrypt.hash(contrasena, saltRounds);
  return hash;
};

exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre_usuario, contrasena, nombre, email } = req.body;

  try {
    const contrasenaHash = await encriptarContrasena(contrasena);
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      contrasena: contrasenaHash,
      nombre,
      email
    });

    await AuditoriaUsuario.create({
      id_usuario: nuevoUsuario.id_usuario,
      accion: 'INSERT',
      detalles: `Usuario creado: ${nuevoUsuario.nombre_usuario}`
    });

    res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando usuario', error });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo usuarios', error });
  }
};

exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre_usuario, nombre, email, contrasena } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    usuario.nombre_usuario = nombre_usuario || usuario.nombre_usuario;
    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;

    if (contrasena) {
      const contrasenaHash = await encriptarContrasena(contrasena);
      usuario.contrasena = contrasenaHash;
    }

    await usuario.save();

    await AuditoriaUsuario.create({
      id_usuario: usuario.id_usuario,
      accion: 'UPDATE',
      detalles: `Usuario actualizado: ${usuario.nombre_usuario}`
    });

    res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error actualizando usuario', error });
  }
};

exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    await usuario.destroy();

    await AuditoriaUsuario.create({
      id_usuario: usuario.id_usuario,
      accion: 'DELETE',
      detalles: `Usuario eliminado: ${usuario.nombre_usuario}`
    });

    res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error eliminando usuario', error });
  }
};
