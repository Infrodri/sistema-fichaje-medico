const express = require('express');
const router = express.Router();
const examenMedicoController = require('../controllers/examenMedicoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, examenMedicoController.crearExamenMedico);
router.get('/', authMiddleware, examenMedicoController.obtenerExamenesMedicos);

// Otras rutas CRUD...

module.exports = router;
