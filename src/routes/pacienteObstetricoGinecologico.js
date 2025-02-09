const express = require('express');
const router = express.Router();
const pacienteObstetricoGinecologicoController = require('../controllers/pacienteObstetricoGinecologicoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', authMiddleware, pacienteObstetricoGinecologicoController.crearPacienteObstetricoGinecologico);
router.get('/', authMiddleware, pacienteObstetricoGinecologicoController.obtenerPacientesObstetricosGinecologicos);

// Otras rutas CRUD...

module.exports = router;
