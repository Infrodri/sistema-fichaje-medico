const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const AuditoriaUsuario = sequelize.define('AuditoriaUsuario', {
  id_auditoria: {
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
  accion: {
    type: DataTypes.ENUM('INSERT', 'UPDATE', 'DELETE'),
  },
  fecha_accion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  detalles: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Auditoria_Usuarios',
  timestamps: false,
});

Usuario.hasMany(AuditoriaUsuario, { foreignKey: 'id_usuario' });
AuditoriaUsuario.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = AuditoriaUsuario;
