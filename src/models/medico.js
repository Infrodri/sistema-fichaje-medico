const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medico = sequelize.define('Medico', {
  id_medico: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_usuario: {  // Nueva columna para la relación
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  nombres: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  especialidad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
  },
}, {
  tableName: 'Medicos',
  timestamps: false,
});

Medico.associate = (models) => {
  Medico.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
  });
};

module.exports = Medico;

