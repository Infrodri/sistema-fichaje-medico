const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const AuditoriaSeguridad = sequelize.define('AuditoriaSeguridad', {
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
    type: DataTypes.ENUM('UPDATE', 'DELETE'),
  },
  fecha_accion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  detalles: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Auditoria_Seguridad',
  timestamps: false,
});

Usuario.hasMany(AuditoriaSeguridad, { foreignKey: 'id_usuario' });
AuditoriaSeguridad.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = AuditoriaSeguridad;
