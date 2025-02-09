const express = require('express');
const router = express.Router();
const tipoOperacionQuirurgicaController = require('../controllers/tipoOperacionQuirurgicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, tipoOperacionQuirurgicaController.crearTipoOperacionQuirurgica);
router.get('/', authMiddleware, tipoOperacionQuirurgicaController.obtenerTiposOperacionesQuirurgicas);

// Otras rutas CRUD...

module.exports = router;
