const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const RecetaMedica = require('./recetaMedica');
const Medicamento = require('./medicamento');

const RecetaMedicamento = sequelize.define('RecetaMedicamento', {
  id_receta: {
    type: DataTypes.INTEGER,
    references: {
      model: RecetaMedica,
      key: 'id_receta',
    },
    primaryKey: true,
  },
  id_medicamento: {
    type: DataTypes.INTEGER,
    references: {
      model: Medicamento,
      key: 'id_medicamento',
    },
    primaryKey: true,
  },
  dosis: {
    type: DataTypes.STRING(50),
  },
  frecuencia: {
    type: DataTypes.STRING(50),
  },
  duracion: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'Recetas_Medicamentos',
  timestamps: false,
});

RecetaMedica.belongsToMany(Medicamento, { through: RecetaMedicamento, foreignKey: 'id_receta' });
Medicamento.belongsToMany(RecetaMedica, { through: RecetaMedicamento, foreignKey: 'id_medicamento' });

module.exports = RecetaMedicamento;
