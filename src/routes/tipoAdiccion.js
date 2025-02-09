const express = require('express');
const router = express.Router();
const tipoAdiccionController = require('../controllers/tipoAdiccionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, tipoAdiccionController.crearTipoAdiccion);
router.get('/', authMiddleware, tipoAdiccionController.obtenerTiposAdiccion);

// Otras rutas CRUD...

module.exports = router;
