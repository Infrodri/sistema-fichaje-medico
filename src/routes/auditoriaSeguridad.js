const express = require('express');
const router = express.Router();
const auditoriaSeguridadController = require('../controllers/auditoriaSeguridadController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, auditoriaSeguridadController.crearAuditoriaSeguridad);
router.get('/', authMiddleware, auditoriaSeguridadController.obtenerAuditoriasSeguridad);

// Otras rutas CRUD...

module.exports = router;
