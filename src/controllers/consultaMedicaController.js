const ConsultaMedica = require('../models/consultaMedica');

exports.crearConsultaMedica = async (req, res) => {
  try {
    const nuevaConsulta = await ConsultaMedica.create(req.body);
    res.status(201).json({ mensaje: 'Consulta médica creada exitosamente', consulta: nuevaConsulta });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error creando consulta médica', error });
  }
};

exports.obtenerConsultasMedicas = async (req, res) => {
  try {
    const consultas = await ConsultaMedica.findAll();
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error obteniendo consultas médicas', error });
  }
};

// Otros métodos CRUD...
