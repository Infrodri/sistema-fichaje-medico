const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamentoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, medicamentoController.crearMedicamento);
router.get('/', authMiddleware, medicamentoController.obtenerMedicamentos);

// Otras rutas CRUD...

module.exports = router;
