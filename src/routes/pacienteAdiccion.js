const express = require('express');
const router = express.Router();
const pacienteAdiccionController = require('../controllers/pacienteAdiccionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, pacienteAdiccionController.crearPacienteAdiccion);
router.get('/', authMiddleware, pacienteAdiccionController.obtenerPacientesAdicciones);

// Otras rutas CRUD...

module.exports = router;
