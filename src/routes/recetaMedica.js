const express = require('express');
const router = express.Router();
const recetaMedicaController = require('../controllers/recetaMedicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, recetaMedicaController.crearRecetaMedica);
router.get('/', authMiddleware, recetaMedicaController.obtenerRecetasMedicas);

// Otras rutas CRUD...

module.exports = router;
