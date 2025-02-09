const express = require('express');
const router = express.Router();
const auditoriaPermisoController = require('../controllers/auditoriaPermisoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, auditoriaPermisoController.crearAuditoriaPermiso);
router.get('/', authMiddleware, auditoriaPermisoController.obtenerAuditoriasPermisos);

// Otras rutas CRUD...

module.exports = router;
