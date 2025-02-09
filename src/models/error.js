const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Error = sequelize.define('Error', {
  id_error: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha_error: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  descripcion_error: {
    type: DataTypes.TEXT,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario',
    },
  },
}, {
  tableName: 'Errores',
  timestamps: false,
});

Usuario.hasMany(Error, { foreignKey: 'id_usuario' });
Error.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Error;
