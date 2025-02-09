const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoOperacionQuirurgica = sequelize.define('TipoOperacionQuirurgica', {
  id_operacion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_operacion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Tipos_Operaciones_Quirurgicas',
  timestamps: false,
});

module.exports = TipoOperacionQuirurgica;
