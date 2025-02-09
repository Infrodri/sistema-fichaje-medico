// src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const saltRounds = 10;

// Función para encriptar contraseñas
const encriptarContrasena = async (contrasena) => {
  const hash = await bcrypt.hash(contrasena, saltRounds);
  return hash;
};

exports.register = async (req, res) => {
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
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error registrando usuario', error });
  }
};

exports.login = async (req, res) => {
  const { nombre_usuario, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { nombre_usuario } });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    const coincide = await bcrypt.compare(contrasena, usuario.contrasena);
    if (coincide) {
      const token = jwt.sign(
        { id_usuario: usuario.id_usuario, nombre_usuario: usuario.nombre_usuario },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ mensaje: 'Autenticación exitosa', token });
    } else {
      res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error iniciando sesión', error });
  }
};

exports.logout = (req, res) => {
  // El cierre de sesión en el lado del servidor puede implicar invalidar el token
  // pero una forma sencilla es eliminar el token en el cliente
  res.json({ mensaje: 'Cierre de sesión exitoso' });
};
