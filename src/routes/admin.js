const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { isAdmin } = require('../middlewares/authMiddleware');
const usuarioController = require('../controllers/usuarioController');
const rolController = require('../controllers/rolController');

// Crear usuario (solo admin)
router.post('/usuarios', [
  isAdmin,
  check('nombre_usuario').isLength({ min: 5 }),
  check('contrasena').isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1
  }),
  check('email').isEmail().normalizeEmail()
], usuarioController.crearUsuario);

// Asignar rol
router.post('/usuarios/:id/roles', [
  isAdmin,
  check('id_rol').isInt()
], rolController.asignarRol);

module.exports = router;