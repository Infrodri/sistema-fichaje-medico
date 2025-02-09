const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, pacienteController.crearPaciente);
router.get('/', authMiddleware, pacienteController.obtenerPacientes);

// Otras rutas CRUD...

module.exports = router;
