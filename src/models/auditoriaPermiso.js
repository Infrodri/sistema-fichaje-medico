const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const AuditoriaPermiso = sequelize.define('AuditoriaPermiso', {
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
    type: DataTypes.ENUM('GRANT', 'REVOKE'),
  },
  fecha_accion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  detalles: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Auditoria_Permisos',
  timestamps: false,
});

Usuario.hasMany(AuditoriaPermiso, { foreignKey: 'id_usuario' });
AuditoriaPermiso.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = AuditoriaPermiso;
