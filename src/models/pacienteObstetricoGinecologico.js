const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./paciente');
const TipoObstetricoGinecologico = require('./tipoObstetricoGinecologico');

const PacienteObstetricoGinecologico = sequelize.define('PacienteObstetricoGinecologico', {
  id_paciente: {
    type: DataTypes.INTEGER,
    references: {
      model: Paciente,
      key: 'id_paciente',
    },
    primaryKey: true,
  },
  id_tipo_og: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoObstetricoGinecologico,
      key: 'id_tipo_og',
    },
    primaryKey: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
  },
  detalles: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'Pacientes_Obstetricos_Ginecologicos',
  timestamps: false,
});

Paciente.belongsToMany(TipoObstetricoGinecologico, { through: PacienteObstetricoGinecologico, foreignKey: 'id_paciente' });
TipoObstetricoGinecologico.belongsToMany(Paciente, { through: PacienteObstetricoGinecologico, foreignKey: 'id_tipo_og' });

module.exports = PacienteObstetricoGinecologico;
