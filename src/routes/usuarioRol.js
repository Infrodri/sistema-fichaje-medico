const express = require('express');
const router = express.Router();
const usuarioRolController = require('../controllers/usuarioRolController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, usuarioRolController.crearUsuarioRol);
router.get('/', authMiddleware, usuarioRolController.obtenerUsuariosRoles);

// Otras rutas CRUD...

module.exports = router;
