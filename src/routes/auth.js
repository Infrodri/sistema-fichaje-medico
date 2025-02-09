// src/routes/auth.js
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', [
  check('nombre_usuario').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  check('contrasena').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], authController.register);

router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;






