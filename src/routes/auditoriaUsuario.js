const express = require('express');
const router = express.Router();
const auditoriaUsuarioController = require('../controllers/auditoriaUsuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, auditoriaUsuarioController.crearAuditoriaUsuario);
router.get('/', authMiddleware, auditoriaUsuarioController.obtenerAuditoriasUsuarios);

// Otras rutas CRUD...

module.exports = router;
