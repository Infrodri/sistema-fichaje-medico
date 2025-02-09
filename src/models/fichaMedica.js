const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const Medico = require('./medico');

const FichaMedica = sequelize.define('FichaMedica', {
  id_ficha: {
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
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Fichas_Medicas',
  timestamps: false,
});

Paciente.hasMany(FichaMedica, { foreignKey: 'id_paciente' });
Medico.hasMany(FichaMedica, { foreignKey: 'id_medico' });
FichaMedica.belongsTo(Paciente, { foreignKey: 'id_paciente' });
FichaMedica.belongsTo(Medico, { foreignKey: 'id_medico' });

module.exports = FichaMedica;
