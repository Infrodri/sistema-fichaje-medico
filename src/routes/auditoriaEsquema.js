const express = require('express');
const router = express.Router();
const auditoriaEsquemaController = require('../controllers/auditoriaEsquemaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, auditoriaEsquemaController.crearAuditoriaEsquema);
router.get('/', authMiddleware, auditoriaEsquemaController.obtenerAuditoriasEsquema);

// Otras rutas CRUD...

module.exports = router;


