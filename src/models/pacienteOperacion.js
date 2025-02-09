const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const TipoOperacionQuirurgica = require('./tipoOperacionQuirurgica');

const PacienteOperacion = sequelize.define('PacienteOperacion', {
  id_paciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'id_paciente',
    },
    primaryKey: true,
  },
  id_operacion: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoOperacionQuirurgica,
      key: 'id_operacion',
    },
    primaryKey: true,
  },
  fecha_operacion: {
    type: DataTypes.DATE,
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Pacientes_Operaciones',
  timestamps: false,
});

Paciente.belongsToMany(TipoOperacionQuirurgica, { through: PacienteOperacion, foreignKey: 'id_paciente' });
TipoOperacionQuirurgica.belongsToMany(Paciente, { through: PacienteOperacion, foreignKey: 'id_operacion' });

module.exports = PacienteOperacion;
