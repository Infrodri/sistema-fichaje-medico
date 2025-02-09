const express = require('express');
const router = express.Router();
const errorController = require('../controllers/errorController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, errorController.crearError);
router.get('/', authMiddleware, errorController.obtenerErrores);

// Otras rutas CRUD...

module.exports = router;
