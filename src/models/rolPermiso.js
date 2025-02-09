const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Rol = require('./rol');
const Permiso = require('./permiso');

const RolPermiso = sequelize.define('RolPermiso', {
  id_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'id_rol',
    },
    primaryKey: true,
  },
  id_permiso: {
    type: DataTypes.INTEGER,
    references: {
      model: Permiso,
      key: 'id_permiso',
    },
    primaryKey: true,
  },
}, {
  tableName: 'Roles_Permisos',
  timestamps: false,
});

module.exports = RolPermiso;
