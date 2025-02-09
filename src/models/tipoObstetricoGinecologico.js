const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoObstetricoGinecologico = sequelize.define('TipoObstetricoGinecologico', {
  id_tipo_og: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_tipo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Tipos_Obstetricos_Ginecologicos',
  timestamps: false,
});

module.exports = TipoObstetricoGinecologico;
