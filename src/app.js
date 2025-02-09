// src/app.js
const express = require('express');
const app = express();
const sequelize = require('./config/database');
require('dotenv').config();

// Middlewares
app.use(express.json());


// Importar modelos para sincronización
const Usuario = require('./models/usuario');
const Rol = require('./models/rol');
const Permiso = require('./models/permiso');
const UsuarioRol = require('./models/usuarioRol');
const RolPermiso = require('./models/rolPermiso');
const Paciente = require('./models/paciente');
const Medico = require('./models/medico');
const FichaMedica = require('./models/fichaMedica');
const ConsultaMedica = require('./models/consultaMedica');
const RecetaMedica = require('./models/recetaMedica');
const Medicamento = require('./models/medicamento');
const RecetaMedicamento = require('./models/recetaMedicamento');
const TipoAdiccion = require('./models/tipoAdiccion');
const PacienteAdiccion = require('./models/pacienteAdiccion');
const TipoObstetricoGinecologico = require('./models/tipoObstetricoGinecologico');
const PacienteObstetricoGinecologico = require('./models/pacienteObstetricoGinecologico');
const TipoOperacionQuirurgica = require('./models/tipoOperacionQuirurgica');
const PacienteOperacion = require('./models/pacienteOperacion');
const ExamenMedico = require('./models/examenMedico');
const AuditoriaUsuario = require('./models/auditoriaUsuario');
const AuditoriaPaciente = require('./models/auditoriaPaciente');
const Acceso = require('./models/acceso');
const Error = require('./models/error');
const AuditoriaEsquema = require('./models/auditoriaEsquema');
const AuditoriaPermiso = require('./models/auditoriaPermiso');
const AuditoriaSeguridad = require('./models/auditoriaSeguridad');




// Agrega otros modelos según sea necesario...
// Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const usuarioRoutes = require('./routes/usuario');
app.use('/api/usuarios', usuarioRoutes);

const rolRoutes = require('./routes/rol');
app.use('/api/roles', rolRoutes);

const permisoRoutes = require('./routes/permiso');
app.use('/api/permisos', permisoRoutes);

const usuarioRolRoutes = require('./routes/usuarioRol');
app.use('/api/usuarios-roles', usuarioRolRoutes);

const rolPermisoRoutes = require('./routes/rolPermiso');
app.use('/api/roles-permisos', rolPermisoRoutes);

const pacienteRoutes = require('./routes/paciente');
app.use('/api/pacientes', pacienteRoutes);

const medicoRoutes = require('./routes/medico');
app.use('/api/medicos', medicoRoutes);

const fichaMedicaRoutes = require('./routes/fichaMedica');
app.use('/api/fichas-medicas', fichaMedicaRoutes);

const consultaMedicaRoutes = require('./routes/consultaMedica');
app.use('/api/consultas-medicas', consultaMedicaRoutes);

const recetaMedicaRoutes = require('./routes/recetaMedica');
app.use('/api/recetas-medicas', recetaMedicaRoutes);

const medicamentoRoutes = require('./routes/medicamento');
app.use('/api/medicamentos', medicamentoRoutes);

const recetaMedicamentoRoutes = require('./routes/recetaMedicamento');
app.use('/api/recetas-medicamentos', recetaMedicamentoRoutes);

const tipoAdiccionRoutes = require('./routes/tipoAdiccion');
app.use('/api/tipos-adicciones', tipoAdiccionRoutes);

const pacienteAdiccionRoutes = require('./routes/pacienteAdiccion');
app.use('/api/pacientes-adicciones', pacienteAdiccionRoutes);

const tipoObstetricoGinecologicoRoutes = require('./routes/tipoObstetricoGinecologico');
app.use('/api/tipos-obstetricos-ginecologicos', tipoObstetricoGinecologicoRoutes);

const pacienteObstetricoGinecologicoRoutes = require('./routes/pacienteObstetricoGinecologico');
app.use('/api/pacientes-obstetricos-ginecologicos', pacienteObstetricoGinecologicoRoutes);

const tipoOperacionQuirurgicaRoutes = require('./routes/tipoOperacionQuirurgica');
app.use('/api/tipos-operaciones-quirurgicas', tipoOperacionQuirurgicaRoutes);

const pacienteOperacionRoutes = require('./routes/pacienteOperacion');
app.use('/api/pacientes-operaciones', pacienteOperacionRoutes);

const examenMedicoRoutes = require('./routes/examenMedico');
app.use('/api/examenes-medicos', examenMedicoRoutes);

const auditoriaUsuarioRoutes = require('./routes/auditoriaUsuario');
app.use('/api/auditoria-usuarios', auditoriaUsuarioRoutes);

const auditoriaPacienteRoutes = require('./routes/auditoriaPaciente');
app.use('/api/auditoria-pacientes', auditoriaPacienteRoutes);

const accesoRoutes = require('./routes/acceso');
app.use('/api/accesos', accesoRoutes);

const errorRoutes = require('./routes/error');
app.use('/api/errores', errorRoutes);

const auditoriaEsquemaRoutes = require('./routes/auditoriaEsquema');
app.use('/api/auditoria-esquema', auditoriaEsquemaRoutes);

const auditoriaPermisoRoutes = require('./routes/auditoriaPermiso');
app.use('/api/auditoria-permisos', auditoriaPermisoRoutes);

const auditoriaSeguridadRoutes = require('./routes/auditoriaSeguridad');
app.use('/api/auditoria-seguridad', auditoriaSeguridadRoutes); 



// Sincronizar modelos y luego iniciar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
    return sequelize.sync(); // Sincroniza modelos con la base de datos
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Middleware global para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Algo salió mal', error: err.message });
});



