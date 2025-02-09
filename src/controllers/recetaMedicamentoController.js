const RecetaMedicamento = require('../models/recetaMedicamento');

exports.crearRecetaMedicamento = async (req, res) => {
  try {
    const nuevaRecetaMedicamento = await RecetaMedicamento.create(req.body);
    res.status(201).json({ mensaje: 'Receta-medicamento creada exitosamente', recetaMedicamento: nuevaRecetaMedicamento });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando receta-medicamento', error });
  }
};

exports.obtenerRecetasMedicamentos = async (req, res) => {
  try {
    const recetasMedicamentos = await RecetaMedicamento.findAll();
    res.status(200).json(recetasMedicamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo recetas-medicamentos', error });
  }
};

// Otros métodos CRUD...
