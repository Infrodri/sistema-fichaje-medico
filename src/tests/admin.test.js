const request = require('supertest');
const app = require('../app');
const { Usuario, Rol } = require('../models');

describe('Admin Routes', () => {
  let adminToken;

  beforeAll(async () => {
    // Crear usuario admin y obtener token
    const admin = await Usuario.create({ 
      nombre_usuario: 'admin',
      contrasena: 'P@ssw0rd123',
      email: 'admin@test.com'
    });
    const rolAdmin = await Rol.create({ nombre_rol: 'Administrador' });
    await admin.addRol(rolAdmin);
    
    // Simular login para obtener token
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'admin@test.com', contrasena: 'P@ssw0rd123' });
    
    adminToken = response.body.token;
  });

  test('POST /admin/usuarios - Debe crear usuario con auditoría', async () => {
    const response = await request(app)
      .post('/admin/usuarios')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        nombre_usuario: 'nuevo_usuario',
        contrasena: 'P@ssw0rd123',
        email: 'nuevo@test.com'
      });
    
    expect(response.status).toBe(201);
    
    // Verificar auditoría
    const auditoria = await AuditoriaUsuario.findOne({
      where: { id_usuario: response.body.usuario.id_usuario }
    });
    expect(auditoria).not.toBeNull();
  });
});