const Medicamento = require('../models/medicamento');

exports.crearMedicamento = async (req, res) => {
  try {
    const nuevoMedicamento = await Medicamento.create(req.body);
    res.status(201).json({ mensaje: 'Medicamento creado exitosamente', medicamento: nuevoMedicamento });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando medicamento', error });
  }
};

exports.obtenerMedicamentos = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll();
    res.status(200).json(medicamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo medicamentos', error });
  }
};

// Otros métodos CRUD...
