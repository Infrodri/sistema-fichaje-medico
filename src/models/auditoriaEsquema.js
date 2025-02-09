const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');

const AuditoriaEsquema = sequelize.define('AuditoriaEsquema', {
  id_auditoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  accion: {
    type: DataTypes.ENUM('CREATE', 'ALTER', 'DROP'),
  },
  fecha_accion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  detalles: {
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
  tableName: 'Auditoria_Esquema',
  timestamps: false,
});

Usuario.hasMany(AuditoriaEsquema, { foreignKey: 'id_usuario' });
AuditoriaEsquema.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = AuditoriaEsquema;
