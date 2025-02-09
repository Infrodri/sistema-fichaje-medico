const express = require('express');
const router = express.Router();
const fichaMedicaController = require('../controllers/fichaMedicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, fichaMedicaController.crearFichaMedica);
router.get('/', authMiddleware, fichaMedicaController.obtenerFichasMedicas);

// Otras rutas CRUD...

module.exports = router;
