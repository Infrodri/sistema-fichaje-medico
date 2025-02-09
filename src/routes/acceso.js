const express = require('express');
const router = express.Router();
const accesoController = require('../controllers/accesoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, accesoController.crearAcceso);
router.get('/', authMiddleware, accesoController.obtenerAccesos);

// Otras rutas CRUD...

module.exports = router;
