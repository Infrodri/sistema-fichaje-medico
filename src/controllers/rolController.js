const Rol = require('../models/rol');

exports.crearRol = async (req, res) => {
  const { nombre_rol, descripcion } = req.body;
  try {
    const nuevoRol = await Rol.create({ nombre_rol, descripcion });
    res.status(201).json({ mensaje: 'Rol creado exitosamente', rol: nuevoRol });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando rol', error });
  }
};

exports.obtenerRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo roles', error });
  }
};

exports.actualizarRol = async (req, res) => {
  const { id_rol } = req.params;
  const { nombre_rol, descripcion } = req.body;
  try {
    const rol = await Rol.findByPk(id_rol);
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    rol.nombre_rol = nombre_rol;
    rol.descripcion = descripcion;
    await rol.save();
    res.status(200).json({ mensaje: 'Rol actualizado exitosamente', rol });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error actualizando rol', error });
  }
};

exports.eliminarRol = async (req, res) => {
  const { id_rol } = req.params;
  try {
    const rol = await Rol.findByPk(id_rol);
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    await rol.destroy();
    res.status(200).json({ mensaje: 'Rol eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error eliminando rol', error });
  }
};