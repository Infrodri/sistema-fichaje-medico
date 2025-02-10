const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', [
  authMiddleware,
  check('nombre_usuario').notEmpty().withMessage('El nombre de usuario es obligatorio'),
  check('contrasena').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], usuarioController.crearUsuario);

router.get('/', authMiddleware, usuarioController.obtenerUsuarios);
router.put('/:id', authMiddleware, usuarioController.actualizarUsuario);
router.delete('/:id', authMiddleware, usuarioController.eliminarUsuario);

module.exports = router;


