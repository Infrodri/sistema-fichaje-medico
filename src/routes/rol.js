const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, rolController.crearRol);
router.get('/', authMiddleware, rolController.obtenerRoles);
router.put('/actualizar/:id_rol', authMiddleware, rolController.actualizarRol);
router.delete('/eliminar/:id_rol', authMiddleware, rolController.eliminarRol);

module.exports = router;
