const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Rol = require('./rol');

const UsuarioRol = sequelize.define('UsuarioRol', {
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario',
    },
    primaryKey: true,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id_rol',
    },
    primaryKey: true,
  },
}, {
  tableName: 'Usuarios_Roles',
  timestamps: false,
});

module.exports = UsuarioRol;
