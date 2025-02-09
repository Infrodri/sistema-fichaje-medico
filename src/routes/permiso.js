const express = require('express');
const router = express.Router();
const permisoController = require('../controllers/permisoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, permisoController.crearPermiso);
router.get('/', authMiddleware, permisoController.obtenerPermisos);

// Otras rutas CRUD...

module.exports = router;
