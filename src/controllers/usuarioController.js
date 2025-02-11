const Usuario = require('../models/usuario');
const AuditoriaUsuario = require('../models/auditoriaUsuario');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const saltRounds = 10;

// Función para encriptar contraseñas
const encriptarContrasena = async (contrasena) => {
  return await bcrypt.hash(contrasena, saltRounds);
};

// Crear usuario
exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre_usuario, contrasena, nombre, email } = req.body;

  try {
    const existeUsuario = await Usuario.findOne({ where: { email } });
    if (existeUsuario) {
      return res.status(400).json({ mensaje: "El email ya está en uso." });
    }

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
    console.error("Error creando usuario:", error);
    res.status(500).json({ mensaje: 'Error creando usuario', error });
  }
};

// Obtener usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Usuario.findAndCountAll({
      attributes: ['id_usuario', 'nombre_usuario', 'nombre', 'email'],
      limit: parseInt(pageSize),
      offset: parseInt(offset)
    });

    res.status(200).json({
      total: count,
      pagina: parseInt(page),
      totalPaginas: Math.ceil(count / pageSize),
      usuarios: rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre_usuario, nombre, email, contrasena } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Verificar si el email ya está en uso por otro usuario
    if (email) {
      const existeUsuario = await Usuario.findOne({ where: { email } });
      if (existeUsuario && existeUsuario.id_usuario !== usuario.id_usuario) {
        return res.status(400).json({ mensaje: "El email ya está en uso." });
      }
    }

    usuario.nombre_usuario = nombre_usuario || usuario.nombre_usuario;
    usuario.nombre = nombre || usuario.nombre;
    usuario.email = email || usuario.email;

    if (contrasena) {
      usuario.contrasena = await encriptarContrasena(contrasena);
    }

    await usuario.save();

    await AuditoriaUsuario.create({
      id_usuario: usuario.id_usuario,
      accion: 'UPDATE',
      detalles: `Usuario actualizado: ${usuario.nombre_usuario}`
    });

    res.status(200).json({ mensaje: 'Usuario actualizado exitosamente', usuario });
  } catch (error) {
    console.error("Error actualizando usuario:", error);
    res.status(500).json({ mensaje: 'Error actualizando usuario', error });
  }
};

// Eliminar usuario
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
    console.error("Error eliminando usuario:", error);
    res.status(500).json({ mensaje: 'Error eliminando usuario', error });
  }
};

