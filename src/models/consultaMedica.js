const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const FichaMedica = require('./fichaMedica');
const Medico = require('./medico');

const ConsultaMedica = sequelize.define('ConsultaMedica', {
  id_consulta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_ficha: {
    type: DataTypes.INTEGER,
    references: {
      model: FichaMedica,
      key: 'id_ficha',
    },
  },
  id_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: Medico,
      key: 'id_medico',
    },
  },
  fecha_consulta: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  motivo_consulta: {
    type: DataTypes.TEXT,
  },
  diagnostico: {
    type: DataTypes.TEXT,
  },
  tratamiento: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Consultas_Medicas',
  timestamps: false,
});

FichaMedica.hasMany(ConsultaMedica, { foreignKey: 'id_ficha' });
Medico.hasMany(ConsultaMedica, { foreignKey: 'id_medico' });
ConsultaMedica.belongsTo(FichaMedica, { foreignKey: 'id_ficha' });
ConsultaMedica.belongsTo(Medico, { foreignKey: 'id_medico' });

module.exports = ConsultaMedica;
