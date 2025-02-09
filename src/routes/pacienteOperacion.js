const express = require('express');
const router = express.Router();
const pacienteOperacionController = require('../controllers/pacienteOperacionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, pacienteOperacionController.crearPacienteOperacion);
router.get('/', authMiddleware, pacienteOperacionController.obtenerPacientesOperaciones);

// Otras rutas CRUD...

module.exports = router;
