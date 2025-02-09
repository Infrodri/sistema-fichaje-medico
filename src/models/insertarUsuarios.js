const bcrypt = require('bcrypt');
const Usuario = require('./usuario'); // Ruta corregida

const usuarios = [
  {
    nombre_usuario: 'admin',
    contrasena: 'admin123',
    nombre: 'Administrador del Sistema',
    email: 'admin@sistemafichaje.com'
  },
  {
    nombre_usuario: 'drlopez',
    contrasena: 'lopez2023',
    nombre: 'Dr. María López',
    email: 'maria.lopez@sistemafichaje.com'
  }
];

const saltRounds = 10;

async function insertarUsuarios() {
  for (const usuario of usuarios) {
    const contrasenaHash = await bcrypt.hash(usuario.contrasena, saltRounds);
    await Usuario.create({
      nombre_usuario: usuario.nombre_usuario,
      contrasena: contrasenaHash,
      nombre: usuario.nombre,
      email: usuario.email
    });
  }
  console.log('Usuarios insertados correctamente');
}

insertarUsuarios().catch(console.error);