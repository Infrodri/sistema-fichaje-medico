const Medico = require('../models/medico');
const AuditoriaUsuario = require('../models/auditoriaUsuario');
const { validationResult } = require('express-validator');

exports.crearMedico = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    const nuevoMedico = await Medico.create(req.body);

    await AuditoriaUsuario.create({
      id_usuario: req.usuario.id_usuario,
      accion: 'INSERT',
      detalles: `Médico creado: ${nuevoMedico.nombres} ${nuevoMedico.apellidos}`
    });

    res.status(201).json({ mensaje: 'Médico creado exitosamente', medico: nuevoMedico });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando médico', error });
  }
};

exports.obtenerMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.status(200).json(medicos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo médicos', error });
  }
};

exports.actualizarMedico = async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, especialidad, telefono, email } = req.body;

  try {
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }

    medico.nombres = nombres || medico.nombres;
    medico.apellidos = apellidos || medico.apellidos;
    medico.especialidad = especialidad || medico.especialidad;
    medico.telefono = telefono || medico.telefono;
    medico.email = email || medico.email;

    await medico.save();

    await AuditoriaUsuario.create({
      id_usuario: req.usuario.id_usuario,
      accion: 'UPDATE',
      detalles: `Médico actualizado: ${medico.nombres} ${medico.apellidos}`
    });

    res.status(200).json({ mensaje: 'Médico actualizado exitosamente', medico });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error actualizando médico', error });
  }
};

exports.eliminarMedico = async (req, res) => {
  const { id } = req.params;
  try {
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }

    await medico.destroy();

    await AuditoriaUsuario.create({
      id_usuario: req.usuario.id_usuario,
      accion: 'DELETE',
      detalles: `Médico eliminado: ${medico.nombres} ${medico.apellidos}`
    });

    res.status(200).json({ mensaje: 'Médico eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error eliminando médico', error });
  }
};

