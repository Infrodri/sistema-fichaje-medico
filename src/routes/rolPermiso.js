const express = require('express');
const router = express.Router();
const rolPermisoController = require('../controllers/rolPermisoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, rolPermisoController.crearRolPermiso);
router.get('/', authMiddleware, rolPermisoController.obtenerRolesPermisos);

// Otras rutas CRUD...

module.exports = router;
