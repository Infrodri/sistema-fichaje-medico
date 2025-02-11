const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_usuario: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
  },
}, {
  tableName: 'Usuarios',
  timestamps: false,
});

// Relaciones
Usuario.associate = (models) => {
  // Relación N:M con Roles
  Usuario.belongsToMany(models.Rol, {
    through: 'Usuarios_Roles',
    foreignKey: 'id_usuario',
    otherKey: 'id_rol'
  });

  // Relación 1:1 con Médico
  Usuario.hasOne(models.Medico, {
    foreignKey: 'id_usuario',
    as: 'medico'
  });

  // Relación con Auditoría
  Usuario.hasMany(models.AuditoriaUsuario, {
    foreignKey: 'id_usuario'
  });
};

module.exports = Usuario;




