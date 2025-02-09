const express = require('express');
const router = express.Router();
const consultaMedicaController = require('../controllers/consultaMedicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, consultaMedicaController.crearConsultaMedica);
router.get('/', authMiddleware, consultaMedicaController.obtenerConsultasMedicas);

// Otras rutas CRUD...

module.exports = router;
