const RecetaMedica = require('../models/recetaMedica');

exports.crearRecetaMedica = async (req, res) => {
  try {
    const nuevaReceta = await RecetaMedica.create(req.body);
    res.status(201).json({ mensaje: 'Receta médica creada exitosamente', receta: nuevaReceta });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando receta médica', error });
  }
};

exports.obtenerRecetasMedicas = async (req, res) => {
  try {
    const recetas = await RecetaMedica.findAll();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo recetas médicas', error });
  }
};

// Otros métodos CRUD...
