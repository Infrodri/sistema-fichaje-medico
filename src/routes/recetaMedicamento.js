const express = require('express');
const router = express.Router();
const recetaMedicamentoController = require('../controllers/recetaMedicamentoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, recetaMedicamentoController.crearRecetaMedicamento);
router.get('/', authMiddleware, recetaMedicamentoController.obtenerRecetasMedicamentos);

// Otras rutas CRUD...

module.exports = router;
