const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, medicoController.crearMedico);
router.get('/', authMiddleware, medicoController.obtenerMedicos);

// Otras rutas CRUD...

module.exports = router;
