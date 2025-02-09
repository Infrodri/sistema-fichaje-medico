const express = require('express');
const router = express.Router();
const tipoObstetricoGinecologicoController = require('../controllers/tipoObstetricoGinecologicoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, tipoObstetricoGinecologicoController.crearTipoObstetricoGinecologico);
router.get('/', authMiddleware, tipoObstetricoGinecologicoController.obtenerTiposObstetricosGinecologicos);

// Otras rutas CRUD...

module.exports = router;
