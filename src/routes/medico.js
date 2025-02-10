const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const medicoController = require('../controllers/medicoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/crear', [
  authMiddleware,
  check('nombres').notEmpty().withMessage('El nombre es obligatorio'),
  check('apellidos').notEmpty().withMessage('El apellido es obligatorio'),
  check('especialidad').notEmpty().withMessage('La especialidad es obligatoria'),
], medicoController.crearMedico);

router.get('/', authMiddleware, medicoController.obtenerMedicos);
router.put('/:id', authMiddleware, medicoController.actualizarMedico);
router.delete('/:id', authMiddleware, medicoController.eliminarMedico);

module.exports = router;

