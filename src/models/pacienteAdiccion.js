const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const TipoAdiccion = require('./tipoAdiccion');

const PacienteAdiccion = sequelize.define('PacienteAdiccion', {
  id_paciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'id_paciente',
    },
    primaryKey: true,
  },
  id_adiccion: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoAdiccion,
      key: 'id_adiccion',
    },
    primaryKey: true,
  },
  fecha_diagnostico: {
    type: DataTypes.DATE,
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Pacientes_Adicciones',
  timestamps: false,
});

Paciente.belongsToMany(TipoAdiccion, { through: PacienteAdiccion, foreignKey: 'id_paciente' });
TipoAdiccion.belongsToMany(Paciente, { through: PacienteAdiccion, foreignKey: 'id_adiccion' });

module.exports = PacienteAdiccion;
