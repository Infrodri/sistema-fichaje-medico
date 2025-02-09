const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const Medico = require('./medico');

const ExamenMedico = sequelize.define('ExamenMedico', {
  id_examen: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'id_paciente',
    },
  },
  id_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: Medico,
      key: 'id_medico',
    },
  },
  tipo_examen: {
    type: DataTypes.STRING(100),
  },
  fecha_examen: {
    type: DataTypes.DATE,
  },
  resultados: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Examenes_Medicos',
  timestamps: false,
});

Paciente.hasMany(ExamenMedico, { foreignKey: 'id_paciente' });
Medico.hasMany(ExamenMedico, { foreignKey: 'id_medico' });
ExamenMedico.belongsTo(Paciente, { foreignKey: 'id_paciente' });
ExamenMedico.belongsTo(Medico, { foreignKey: 'id_medico' });

module.exports = ExamenMedico;
