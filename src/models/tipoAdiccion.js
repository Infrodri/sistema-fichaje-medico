const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoAdiccion = sequelize.define('TipoAdiccion', {
  id_adiccion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_adiccion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Tipos_Adicciones',
  timestamps: false,
});

module.exports = TipoAdiccion;
