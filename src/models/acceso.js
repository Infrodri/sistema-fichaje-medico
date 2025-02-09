const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const Acceso = sequelize.define('Acceso', {
  id_acceso: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario',
    },
  },
  fecha_acceso: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  ip_acceso: {
    type: DataTypes.STRING(50),
  },
  accion_realizada: {
    type: DataTypes.STRING(255),
  },
}, {
  tableName: 'Accesos',
  timestamps: false,
});

Usuario.hasMany(Acceso, { foreignKey: 'id_usuario' });
Acceso.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Acceso;
