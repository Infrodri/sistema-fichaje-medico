const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const usuarioRolController = require('../controllers/usuarioRolController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', [
  check('id_usuario').notEmpty().withMessage('El ID de usuario es obligatorio'),
  check('id_rol').notEmpty().withMessage('El ID de rol es obligatorio')
], authMiddleware, usuarioRolController.crearUsuarioRol);

router.get('/', authMiddleware, usuarioRolController.obtenerUsuariosRoles);
router.put('/:id', authMiddleware, usuarioRolController.actualizarUsuarioRol);
router.delete('/:id_usuario/:id_rol', authMiddleware, usuarioRolController.eliminarUsuarioRol);

// Otras rutas CRUD...

module.exports = router;
