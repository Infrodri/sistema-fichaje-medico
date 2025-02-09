const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ConsultaMedica = require('./consultaMedica');
const Medico = require('./medico');

const RecetaMedica = sequelize.define('RecetaMedica', {
  id_receta: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_consulta: {
    type: DataTypes.INTEGER,
    references: {
      model: ConsultaMedica,
      key: 'id_consulta',
    },
  },
  id_medico: {
    type: DataTypes.INTEGER,
    references: {
      model: Medico,
      key: 'id_medico',
    },
  },
  fecha_receta: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  indicaciones: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Recetas_Medicas',
  timestamps: false,
});

ConsultaMedica.hasMany(RecetaMedica, { foreignKey: 'id_consulta' });
Medico.hasMany(RecetaMedica, { foreignKey: 'id_medico' });
RecetaMedica.belongsTo(ConsultaMedica, { foreignKey: 'id_consulta' });
RecetaMedica.belongsTo(Medico, { foreignKey: 'id_medico' });

module.exports = RecetaMedica;
