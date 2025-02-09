const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');

const AuditoriaPaciente = sequelize.define('AuditoriaPaciente', {
  id_auditoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'id_paciente',
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
  tableName: 'Auditoria_Pacientes',
  timestamps: false,
});

Paciente.hasMany(AuditoriaPaciente, { foreignKey: 'id_paciente' });
AuditoriaPaciente.belongsTo(Paciente, { foreignKey: 'id_paciente' });

module.exports = AuditoriaPaciente;
