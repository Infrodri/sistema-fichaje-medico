const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, usuarioController.crearUsuario);
router.get('/', authMiddleware, usuarioController.obtenerUsuarios);

// Otras rutas CRUD...

module.exports = router;
