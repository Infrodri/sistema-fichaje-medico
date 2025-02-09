const express = require('express');
const router = express.Router();
const auditoriaPacienteController = require('../controllers/auditoriaPacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, auditoriaPacienteController.crearAuditoriaPaciente);
router.get('/', authMiddleware, auditoriaPacienteController.obtenerAuditoriasPacientes);

// Otras rutas CRUD...

module.exports = router;
