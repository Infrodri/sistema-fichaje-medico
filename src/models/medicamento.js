const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medicamento = sequelize.define('Medicamento', {
  id_medicamento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_medicamento: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  presentacion: {
    type: DataTypes.STRING(50),
  },
  concentracion: {
    type: DataTypes.STRING(50),
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Medicamentos',
  timestamps: false,
});

module.exports = Medicamento;
