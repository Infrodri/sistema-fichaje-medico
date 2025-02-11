-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2025 a las 13:38:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbfichamedica2025ultima`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas_medicas`
--

CREATE TABLE `consultas_medicas` (
  `id_consulta` int(11) NOT NULL,
  `id_ficha` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `fecha_consulta` date DEFAULT curdate(),
  `motivo_consulta` text DEFAULT NULL,
  `diagnostico` text DEFAULT NULL,
  `tratamiento` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consultas_medicas`
--

INSERT INTO `consultas_medicas` (`id_consulta`, `id_ficha`, `id_medico`, `fecha_consulta`, `motivo_consulta`, `diagnostico`, `tratamiento`) VALUES
(1, 1, 2, '2025-02-07', 'Control prenatal de rutina.', 'Hipertensión gestacional.', 'Reposo y control de presión.'),
(2, 2, 1, '2025-02-07', 'Dolor de cabeza frecuente.', 'Migraña.', 'Analgésicos y cambio en la dieta.'),
(3, 3, 2, '2025-02-07', 'Irregularidades menstruales.', 'Menopausia precoz.', 'Terapia hormonal.'),
(4, 4, 5, '2025-02-07', 'Dolor lumbar.', 'Problemas musculares.', 'Fisioterapia y analgésicos.'),
(5, 5, 2, '2025-02-07', 'Control de embarazo.', 'Placenta previa.', 'Seguimiento y posible cesárea.'),
(6, 6, 4, '2025-02-07', 'Chequeo general.', 'Hipertensión.', 'Ajuste de medicación.'),
(7, 7, 2, '2025-02-07', 'Náuseas matutinas.', 'Embarazo de alto riesgo.', 'Medicamentos antieméticos.'),
(8, 8, 9, '2025-02-07', 'Dolor abdominal.', 'Gastritis.', 'Antiácidos y dieta blanda.'),
(9, 9, 6, '2025-02-07', 'Erupción en la piel.', 'Dermatitis atópica.', 'Cremas tópicas y antihistamínicos.'),
(10, 10, 10, '2025-02-07', 'Ansiedad y estrés.', 'Trastorno de ansiedad.', 'Terapia psicológica y medicación.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examenes_medicos`
--

CREATE TABLE `examenes_medicos` (
  `id_examen` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `tipo_examen` varchar(100) DEFAULT NULL,
  `fecha_examen` date DEFAULT NULL,
  `resultados` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examenes_medicos`
--

INSERT INTO `examenes_medicos` (`id_examen`, `id_paciente`, `id_medico`, `tipo_examen`, `fecha_examen`, `resultados`) VALUES
(1, 1, 2, 'Ecografía Obstétrica', '2023-10-05', 'Desarrollo fetal normal.'),
(2, 2, 1, 'Análisis de Sangre', '2023-09-20', 'Niveles de colesterol elevados.'),
(3, 3, 2, 'Perfil Hormonal', '2023-09-25', 'Bajos niveles de estrógenos.'),
(4, 4, 5, 'Resonancia Magnética', '2023-08-15', 'Sin hallazgos patológicos.'),
(5, 5, 2, 'Ecografía', '2023-08-18', 'Placenta previa confirmada.'),
(6, 6, 4, 'Electrocardiograma', '2023-07-10', 'Arritmia leve.'),
(7, 7, 2, 'Análisis de Orina', '2023-06-25', 'Sin infecciones.'),
(8, 8, 9, 'Endoscopía', '2023-05-30', 'Gastritis leve.'),
(9, 9, 6, 'Biopsia de Piel', '2023-04-20', 'Dermatitis atópica confirmada.'),
(10, 10, 10, 'Evaluación Psicológica', '2023-03-15', 'Ansiedad generalizada.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fichas_medicas`
--

CREATE TABLE `fichas_medicas` (
  `id_ficha` int(11) NOT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `fecha_creacion` date DEFAULT curdate(),
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fichas_medicas`
--

INSERT INTO `fichas_medicas` (`id_ficha`, `id_paciente`, `id_medico`, `fecha_creacion`, `observaciones`) VALUES
(1, 1, 2, '2025-02-07', 'Paciente con antecedentes de preeclampsia.'),
(2, 2, 1, '2025-02-07', 'Sin antecedentes médicos relevantes.'),
(3, 3, 2, '2025-02-07', 'Menopausia precoz diagnosticada recientemente.'),
(4, 4, 5, '2025-02-07', 'Historial de tabaquismo y cirugía de hernia.'),
(5, 5, 2, '2025-02-07', 'Embarazo actual con placenta previa.'),
(6, 6, 4, '2025-02-07', 'Hipertensión controlada con medicación.'),
(7, 7, 2, '2025-02-07', 'Embarazo de alto riesgo por hipertensión.'),
(8, 8, 9, '2025-02-07', 'Antecedentes de colecistectomía y consumo de cocaína.'),
(9, 9, 6, '2025-02-07', 'Alergias cutáneas recurrentes.'),
(10, 10, 10, '2025-02-07', 'Estrés laboral y adicción al juego.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fich_med_datos_personales_medicos`
--

CREATE TABLE `fich_med_datos_personales_medicos` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fich_med_datos_personales_pac`
--

CREATE TABLE `fich_med_datos_personales_pac` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fich_med_tipo_adicciones`
--

CREATE TABLE `fich_med_tipo_adicciones` (
  `idAdicciones` bigint(20) NOT NULL,
  `Estado` varchar(8) NOT NULL,
  `Referencia` varchar(5) DEFAULT NULL,
  `Campo_Auditoria` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `Observacion` varchar(100) DEFAULT NULL,
  `Nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentos`
--

CREATE TABLE `medicamentos` (
  `id_medicamento` int(11) NOT NULL,
  `nombre_medicamento` varchar(100) DEFAULT NULL,
  `presentacion` varchar(50) DEFAULT NULL,
  `concentracion` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicamentos`
--

INSERT INTO `medicamentos` (`id_medicamento`, `nombre_medicamento`, `presentacion`, `concentracion`, `descripcion`) VALUES
(1, 'Paracetamol', 'Tabletas', '500 mg', 'Analgésico y antipirético'),
(2, 'Amoxicilina', 'Cápsulas', '500 mg', 'Antibiótico de amplio espectro'),
(3, 'Ibuprofeno', 'Suspensión Oral', '100 mg/5 ml', 'Antiinflamatorio no esteroideo'),
(4, 'Salbutamol', 'Inhalador', '100 mcg', 'Broncodilatador para el asma'),
(5, 'Metformina', 'Tabletas', '850 mg', 'Hipoglucemiante oral para diabetes tipo 2'),
(6, 'Omeprazol', 'Cápsulas', '20 mg', 'Inhibidor de la bomba de protones para acidez estomacal'),
(7, 'Losartán', 'Tabletas', '50 mg', 'Antihipertensivo'),
(8, 'Diclofenaco Sódico', 'Inyectable', '75 mg/3 ml', 'Antiinflamatorio y analgésico'),
(9, 'Clorfenamina', 'Jarabe', '2 mg/5 ml', 'Antihistamínico para alergias'),
(10, 'Insulina NPH', 'Suspensión Inyectable', '100 UI/ml', 'Control de glucemia en diabetes mellitus');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `id_medico` int(11) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `especialidad` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`id_medico`, `nombres`, `apellidos`, `especialidad`, `telefono`, `email`) VALUES
(1, 'Juan Carlos', 'Pérez Muñoz', 'Medicina General', '76543210', 'juan.perez@correo.com'),
(2, 'María Fernanda', 'López Sánchez', 'Ginecología', '71234567', 'maria.lopez@correo.com'),
(3, 'Luis Alberto', 'Gómez Flores', 'Pediatría', '78451236', 'luis.gomez@correo.com'),
(4, 'Ana Patricia', 'Velasco Díaz', 'Cardiología', '77665544', 'ana.velasco@correo.com'),
(5, 'Carlos Eduardo', 'Rodríguez León', 'Neurología', '79998877', 'carlos.rodriguez@correo.com'),
(6, 'Sofía Alejandra', 'Méndez Rocha', 'Dermatología', '71122334', 'sofia.mendez@correo.com'),
(7, 'Diego Armando', 'Castillo Rojas', 'Ortopedia', '75556677', 'diego.castillo@correo.com'),
(8, 'Laura Beatriz', 'Ruiz Ortega', 'Endocrinología', '78889900', 'laura.ruiz@correo.com'),
(9, 'José Miguel', 'Chávez Aguilar', 'Gastroenterología', '72223344', 'jose.chavez@correo.com'),
(10, 'Elena Margarita', 'Vargas Peña', 'Psiquiatría', '76664422', 'elena.vargas@correo.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` enum('Masculino','Femenino','Otro') DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombres`, `apellidos`, `fecha_nacimiento`, `genero`, `direccion`, `telefono`, `email`, `fecha_registro`) VALUES
(1, 'Andrea Valeria', 'Morales Quiroga', '1990-05-12', 'Femenino', 'Av. Libertad #123', '71234567', 'andrea.morales@correo.com', '2025-02-07 22:22:30'),
(2, 'Miguel Ángel', 'Ortiz Gutiérrez', '1985-08-20', 'Masculino', 'Calle Sucre #456', '77654321', 'miguel.ortiz@correo.com', '2025-02-07 22:22:30'),
(3, 'Camila Isabel', 'Flores Vega', '2000-11-30', 'Femenino', 'Zona Central, Edif. Sol', '71112233', 'camila.flores@correo.com', '2025-02-07 22:22:30'),
(4, 'José Antonio', 'Rojas López', '1975-02-14', 'Masculino', 'Barrio Obrero, Calle 5', '79990011', 'jose.rojas@correo.com', '2025-02-07 22:22:30'),
(5, 'Lucía Fernanda', 'Vargas Chacón', '1995-07-07', 'Femenino', 'Urbanización Las Lomas', '74445566', 'lucia.vargas@correo.com', '2025-02-07 22:22:30'),
(6, 'Carlos Daniel', 'Ramírez Salazar', '1968-12-25', 'Masculino', 'Av. Bolívar #789', '72223344', 'carlos.ramirez@correo.com', '2025-02-07 22:22:30'),
(7, 'Mariana Alejandra', 'Pérez Dávila', '1988-03-18', 'Femenino', 'Calle 21 de Calacoto', '75556677', 'mariana.perez@correo.com', '2025-02-07 22:22:30'),
(8, 'Alejandro Luis', 'Torres Espinoza', '1992-09-09', 'Masculino', 'Villa Fátima, Calle 12', '78889900', 'alejandro.torres@correo.com', '2025-02-07 22:22:30'),
(9, 'Sofía Gabriela', 'Aguilar Mendoza', '2001-01-01', 'Femenino', 'Sopocachi, Edif. Luna', '76664422', 'sofia.aguilar@correo.com', '2025-02-07 22:22:30'),
(10, 'Juan Sebastián', 'Gutiérrez Arias', '1980-06-15', 'Masculino', 'Obrajes, Calle 8', '79998877', 'juan.gutierrez@correo.com', '2025-02-07 22:22:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes_adicciones`
--

CREATE TABLE `pacientes_adicciones` (
  `id_paciente` int(11) NOT NULL,
  `id_adiccion` int(11) NOT NULL,
  `fecha_diagnostico` date DEFAULT NULL,
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes_adicciones`
--

INSERT INTO `pacientes_adicciones` (`id_paciente`, `id_adiccion`, `fecha_diagnostico`, `observaciones`) VALUES
(2, 1, '2023-05-01', 'Consumo diario de alcohol desde hace 5 años.'),
(4, 2, '2023-04-15', 'Fuma un paquete de cigarrillos al día.'),
(6, 6, '2023-03-10', 'Uso excesivo de dispositivos móviles.'),
(8, 3, '2023-02-05', 'Consumo ocasional de cocaína.'),
(10, 5, '2023-01-20', 'Afición al juego en casinos locales.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes_obstetricos_ginecologicos`
--

CREATE TABLE `pacientes_obstetricos_ginecologicos` (
  `id_paciente` int(11) NOT NULL,
  `id_tipo_og` int(11) NOT NULL,
  `fecha_registro` date DEFAULT NULL,
  `detalles` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes_obstetricos_ginecologicos`
--

INSERT INTO `pacientes_obstetricos_ginecologicos` (`id_paciente`, `id_tipo_og`, `fecha_registro`, `detalles`) VALUES
(1, 2, '2023-10-01', 'Preeclampsia detectada en segundo trimestre.'),
(3, 9, '2023-09-15', 'Menopausia precoz diagnosticada a los 20 años.'),
(5, 6, '2023-08-10', 'Placenta previa en embarazo actual.'),
(7, 1, '2023-07-05', 'Embarazo de alto riesgo por hipertensión.'),
(9, 4, '2023-06-20', 'Antecedente de parto prematuro en primer embarazo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes_operaciones`
--

CREATE TABLE `pacientes_operaciones` (
  `id_paciente` int(11) NOT NULL,
  `id_operacion` int(11) NOT NULL,
  `fecha_operacion` date DEFAULT NULL,
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes_operaciones`
--

INSERT INTO `pacientes_operaciones` (`id_paciente`, `id_operacion`, `fecha_operacion`, `observaciones`) VALUES
(2, 1, '2022-12-01', 'Apendicectomía por apendicitis aguda.'),
(5, 2, '2023-08-15', 'Cesárea programada.'),
(6, 4, '2021-05-10', 'Hernioplastia inguinal derecha.'),
(8, 3, '2020-11-05', 'Colecistectomía laparoscópica.'),
(10, 9, '2019-04-20', 'Cirugía de tiroides por bocio multinodular.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id_permiso` int(11) NOT NULL,
  `nombre_permiso` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id_permiso`, `nombre_permiso`, `descripcion`) VALUES
(1, 'Ver Usuarios', 'Permite ver la lista de usuarios'),
(2, 'Crear Usuarios', 'Permite crear nuevos usuarios'),
(3, 'Editar Usuarios', 'Permite editar usuarios existentes'),
(4, 'Eliminar Usuarios', 'Permite eliminar usuarios'),
(5, 'Ver Pacientes', 'Permite ver la lista de pacientes'),
(6, 'Crear Pacientes', 'Permite registrar nuevos pacientes'),
(7, 'Editar Pacientes', 'Permite editar información de pacientes'),
(8, 'Eliminar Pacientes', 'Permite eliminar pacientes'),
(9, 'Ver Reportes', 'Permite acceder a los reportes del sistema');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas_medicamentos`
--

CREATE TABLE `recetas_medicamentos` (
  `id_receta` int(11) NOT NULL,
  `id_medicamento` int(11) NOT NULL,
  `dosis` varchar(50) DEFAULT NULL,
  `frecuencia` varchar(50) DEFAULT NULL,
  `duracion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas_medicamentos`
--

INSERT INTO `recetas_medicamentos` (`id_receta`, `id_medicamento`, `dosis`, `frecuencia`, `duracion`) VALUES
(1, 7, '50 mg', 'Cada 24 horas', '30 días'),
(2, 1, '500 mg', 'Cada 8 horas', '5 días'),
(3, 5, '850 mg', 'Cada 12 horas', '60 días'),
(4, 8, '75 mg', 'Cada 12 horas', '10 días'),
(5, 2, '500 mg', 'Cada 8 horas', '7 días'),
(6, 7, '50 mg', 'Cada 24 horas', '90 días'),
(7, 9, '5 ml', 'Cada 8 horas', '7 días'),
(8, 6, '20 mg', 'Antes del desayuno', '14 días'),
(9, 9, '5 ml', 'Cada 12 horas', '10 días'),
(10, 10, 'Según indicación', 'Variable', '30 días');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas_medicas`
--

CREATE TABLE `recetas_medicas` (
  `id_receta` int(11) NOT NULL,
  `id_consulta` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `fecha_receta` date DEFAULT curdate(),
  `indicaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas_medicas`
--

INSERT INTO `recetas_medicas` (`id_receta`, `id_consulta`, `id_medico`, `fecha_receta`, `indicaciones`) VALUES
(1, 1, 2, '2025-02-07', 'Tomar medicación según lo prescrito y medir presión diariamente.'),
(2, 2, 1, '2025-02-07', 'Analgésicos cuando sea necesario y llevar un diario de los síntomas.'),
(3, 3, 2, '2025-02-07', 'Seguir terapia hormonal y controlar niveles cada mes.'),
(4, 4, 5, '2025-02-07', 'Asistir a fisioterapia dos veces por semana.'),
(5, 5, 2, '2025-02-07', 'Reposo absoluto y evitar esfuerzos físicos.'),
(6, 6, 4, '2025-02-07', 'Tomar medicación antihipertensiva en las mañanas.'),
(7, 7, 2, '2025-02-07', 'Tomar antieméticos antes de las comidas.'),
(8, 8, 9, '2025-02-07', 'Evitar alimentos irritantes y seguir dieta blanda.'),
(9, 9, 6, '2025-02-07', 'Aplicar crema dos veces al día y evitar alérgenos conocidos.'),
(10, 10, 10, '2025-02-07', 'Asistir a sesiones de terapia y tomar medicación ansiolítica.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre_rol`, `descripcion`) VALUES
(1, 'Administrador', 'Tiene acceso total al sistema'),
(2, 'Medico', 'Acceso a funcionalidades médicas y reportes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_permisos`
--

CREATE TABLE `roles_permisos` (
  `id_rol` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles_permisos`
--

INSERT INTO `roles_permisos` (`id_rol`, `id_permiso`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(2, 5),
(2, 6),
(2, 7),
(2, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_adicciones`
--

CREATE TABLE `tipos_adicciones` (
  `id_adiccion` int(11) NOT NULL,
  `nombre_adiccion` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_adicciones`
--

INSERT INTO `tipos_adicciones` (`id_adiccion`, `nombre_adiccion`, `descripcion`) VALUES
(1, 'Alcoholismo', 'Consumo excesivo y dependencia del alcohol'),
(2, 'Tabaquismo', 'Adicción a la nicotina presente en el tabaco'),
(3, 'Consumo de Cocaína', 'Uso habitual de cocaína'),
(4, 'Uso de Marihuana', 'Consumo frecuente de cannabis'),
(5, 'Juego Patológico', 'Compulsión por los juegos de azar'),
(6, 'Adicción a la Tecnología', 'Uso desmedido de dispositivos electrónicos'),
(7, 'Dependencia a los Opioides', 'Uso indebido de medicamentos opioides'),
(8, 'Trastorno por Videojuegos', 'Uso compulsivo de videojuegos'),
(9, 'Adicción a Redes Sociales', 'Uso excesivo de plataformas sociales en línea'),
(10, 'Adicción a la Pachamama', 'Uso ritual y excesivo de hojas de coca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_obstetricos_ginecologicos`
--

CREATE TABLE `tipos_obstetricos_ginecologicos` (
  `id_tipo_og` int(11) NOT NULL,
  `nombre_tipo` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_obstetricos_ginecologicos`
--

INSERT INTO `tipos_obstetricos_ginecologicos` (`id_tipo_og`, `nombre_tipo`, `descripcion`) VALUES
(1, 'Embarazo de Alto Riesgo', 'Embarazo con complicaciones potenciales'),
(2, 'Preeclampsia', 'Hipertensión inducida por el embarazo'),
(3, 'Diabetes Gestacional', 'Alteración de la glucosa durante el embarazo'),
(4, 'Parto Prematuro', 'Nacimiento antes de las 37 semanas de gestación'),
(5, 'Eclampsia', 'Convulsiones en mujeres embarazadas con preeclampsia'),
(6, 'Placenta Previa', 'Inserción anómala de la placenta en el útero'),
(7, 'Infecciones Urinarias', 'Infecciones frecuentes durante el embarazo'),
(8, 'Anemia Gestacional', 'Bajos niveles de hemoglobina en el embarazo'),
(9, 'Menopausia Precoz', 'Cese temprano de la menstruación'),
(10, 'Síndrome de Ovario Poliquístico', 'Trastorno hormonal que afecta los ovarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_operaciones_quirurgicas`
--

CREATE TABLE `tipos_operaciones_quirurgicas` (
  `id_operacion` int(11) NOT NULL,
  `nombre_operacion` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_operaciones_quirurgicas`
--

INSERT INTO `tipos_operaciones_quirurgicas` (`id_operacion`, `nombre_operacion`, `descripcion`) VALUES
(1, 'Apendicectomía', 'Extirpación del apéndice'),
(2, 'Cesárea', 'Parto quirúrgico mediante incisión abdominal'),
(3, 'Colecistectomía', 'Extirpación de la vesícula biliar'),
(4, 'Hernioplastia', 'Reparación de hernia'),
(5, 'Artroscopía de Rodilla', 'Cirugía mínimamente invasiva en la rodilla'),
(6, 'Cirugía de Cataratas', 'Remoción de cristalino opaco del ojo'),
(7, 'Bypass Gástrico', 'Cirugía para reducir el tamaño del estómago'),
(8, 'Amigdalectomía', 'Extirpación de las amígdalas'),
(9, 'Cirugía de Tiroides', 'Procedimientos en la glándula tiroides'),
(10, 'Prostatectomía', 'Remoción parcial o total de la próstata');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `contrasena` varchar(256) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `contrasena`, `nombre`, `email`) VALUES
(1, 'admin', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', 'Administrador del Sistema', 'admin@sistemafichaje.com'),
(2, 'drlopez', '5d1b1c80e68240b196e6756df5da8b686dee405658a7ff2b164c1989ffebe3c4', 'Dr. María López', 'maria.lopez@sistemafichaje.com'),
(6, 'admin1', '$2b$10$buL4KTlWGDCY5FZqTzCXXOUEv93UvuB3tsH1Sre5SNo/wydp4Bv8K', 'Administrador del Sistema1', 'admin1@sistemafichaje.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_roles`
--

CREATE TABLE `usuarios_roles` (
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_roles`
--

INSERT INTO `usuarios_roles` (`id_usuario`, `id_rol`) VALUES
(1, 1),
(2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consultas_medicas`
--
ALTER TABLE `consultas_medicas`
  ADD PRIMARY KEY (`id_consulta`),
  ADD KEY `id_ficha` (`id_ficha`),
  ADD KEY `id_medico` (`id_medico`),
  ADD KEY `idx_consultas_fecha` (`fecha_consulta`);

--
-- Indices de la tabla `examenes_medicos`
--
ALTER TABLE `examenes_medicos`
  ADD PRIMARY KEY (`id_examen`),
  ADD KEY `id_paciente` (`id_paciente`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `fichas_medicas`
--
ALTER TABLE `fichas_medicas`
  ADD PRIMARY KEY (`id_ficha`),
  ADD KEY `id_paciente` (`id_paciente`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `fich_med_datos_personales_medicos`
--
ALTER TABLE `fich_med_datos_personales_medicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fich_med_datos_personales_pac`
--
ALTER TABLE `fich_med_datos_personales_pac`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fich_med_tipo_adicciones`
--
ALTER TABLE `fich_med_tipo_adicciones`
  ADD PRIMARY KEY (`idAdicciones`);

--
-- Indices de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD PRIMARY KEY (`id_medicamento`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`id_medico`),
  ADD KEY `idx_medicos_especialidad` (`especialidad`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `idx_pacientes_nombre` (`nombres`,`apellidos`);

--
-- Indices de la tabla `pacientes_adicciones`
--
ALTER TABLE `pacientes_adicciones`
  ADD PRIMARY KEY (`id_paciente`,`id_adiccion`),
  ADD KEY `id_adiccion` (`id_adiccion`);

--
-- Indices de la tabla `pacientes_obstetricos_ginecologicos`
--
ALTER TABLE `pacientes_obstetricos_ginecologicos`
  ADD PRIMARY KEY (`id_paciente`,`id_tipo_og`),
  ADD KEY `id_tipo_og` (`id_tipo_og`);

--
-- Indices de la tabla `pacientes_operaciones`
--
ALTER TABLE `pacientes_operaciones`
  ADD PRIMARY KEY (`id_paciente`,`id_operacion`),
  ADD KEY `id_operacion` (`id_operacion`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id_permiso`),
  ADD UNIQUE KEY `nombre_permiso` (`nombre_permiso`);

--
-- Indices de la tabla `recetas_medicamentos`
--
ALTER TABLE `recetas_medicamentos`
  ADD PRIMARY KEY (`id_receta`,`id_medicamento`),
  ADD KEY `id_medicamento` (`id_medicamento`);

--
-- Indices de la tabla `recetas_medicas`
--
ALTER TABLE `recetas_medicas`
  ADD PRIMARY KEY (`id_receta`),
  ADD KEY `id_consulta` (`id_consulta`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`),
  ADD UNIQUE KEY `nombre_rol` (`nombre_rol`);

--
-- Indices de la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD PRIMARY KEY (`id_rol`,`id_permiso`),
  ADD KEY `id_permiso` (`id_permiso`);

--
-- Indices de la tabla `tipos_adicciones`
--
ALTER TABLE `tipos_adicciones`
  ADD PRIMARY KEY (`id_adiccion`);

--
-- Indices de la tabla `tipos_obstetricos_ginecologicos`
--
ALTER TABLE `tipos_obstetricos_ginecologicos`
  ADD PRIMARY KEY (`id_tipo_og`);

--
-- Indices de la tabla `tipos_operaciones_quirurgicas`
--
ALTER TABLE `tipos_operaciones_quirurgicas`
  ADD PRIMARY KEY (`id_operacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `nombre_usuario` (`nombre_usuario`);

--
-- Indices de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD PRIMARY KEY (`id_usuario`,`id_rol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consultas_medicas`
--
ALTER TABLE `consultas_medicas`
  MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `examenes_medicos`
--
ALTER TABLE `examenes_medicos`
  MODIFY `id_examen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `fichas_medicas`
--
ALTER TABLE `fichas_medicas`
  MODIFY `id_ficha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `fich_med_datos_personales_medicos`
--
ALTER TABLE `fich_med_datos_personales_medicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fich_med_datos_personales_pac`
--
ALTER TABLE `fich_med_datos_personales_pac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fich_med_tipo_adicciones`
--
ALTER TABLE `fich_med_tipo_adicciones`
  MODIFY `idAdicciones` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  MODIFY `id_medicamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `id_medico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id_permiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `recetas_medicas`
--
ALTER TABLE `recetas_medicas`
  MODIFY `id_receta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipos_adicciones`
--
ALTER TABLE `tipos_adicciones`
  MODIFY `id_adiccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipos_obstetricos_ginecologicos`
--
ALTER TABLE `tipos_obstetricos_ginecologicos`
  MODIFY `id_tipo_og` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipos_operaciones_quirurgicas`
--
ALTER TABLE `tipos_operaciones_quirurgicas`
  MODIFY `id_operacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consultas_medicas`
--
ALTER TABLE `consultas_medicas`
  ADD CONSTRAINT `consultas_medicas_ibfk_1` FOREIGN KEY (`id_ficha`) REFERENCES `fichas_medicas` (`id_ficha`),
  ADD CONSTRAINT `consultas_medicas_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`);

--
-- Filtros para la tabla `examenes_medicos`
--
ALTER TABLE `examenes_medicos`
  ADD CONSTRAINT `examenes_medicos_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `examenes_medicos_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`);

--
-- Filtros para la tabla `fichas_medicas`
--
ALTER TABLE `fichas_medicas`
  ADD CONSTRAINT `fichas_medicas_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `fichas_medicas_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`);

--
-- Filtros para la tabla `pacientes_adicciones`
--
ALTER TABLE `pacientes_adicciones`
  ADD CONSTRAINT `pacientes_adicciones_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `pacientes_adicciones_ibfk_2` FOREIGN KEY (`id_adiccion`) REFERENCES `tipos_adicciones` (`id_adiccion`);

--
-- Filtros para la tabla `pacientes_obstetricos_ginecologicos`
--
ALTER TABLE `pacientes_obstetricos_ginecologicos`
  ADD CONSTRAINT `pacientes_obstetricos_ginecologicos_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `pacientes_obstetricos_ginecologicos_ibfk_2` FOREIGN KEY (`id_tipo_og`) REFERENCES `tipos_obstetricos_ginecologicos` (`id_tipo_og`);

--
-- Filtros para la tabla `pacientes_operaciones`
--
ALTER TABLE `pacientes_operaciones`
  ADD CONSTRAINT `pacientes_operaciones_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`),
  ADD CONSTRAINT `pacientes_operaciones_ibfk_2` FOREIGN KEY (`id_operacion`) REFERENCES `tipos_operaciones_quirurgicas` (`id_operacion`);

--
-- Filtros para la tabla `recetas_medicamentos`
--
ALTER TABLE `recetas_medicamentos`
  ADD CONSTRAINT `recetas_medicamentos_ibfk_1` FOREIGN KEY (`id_receta`) REFERENCES `recetas_medicas` (`id_receta`),
  ADD CONSTRAINT `recetas_medicamentos_ibfk_2` FOREIGN KEY (`id_medicamento`) REFERENCES `medicamentos` (`id_medicamento`);

--
-- Filtros para la tabla `recetas_medicas`
--
ALTER TABLE `recetas_medicas`
  ADD CONSTRAINT `recetas_medicas_ibfk_1` FOREIGN KEY (`id_consulta`) REFERENCES `consultas_medicas` (`id_consulta`),
  ADD CONSTRAINT `recetas_medicas_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id_medico`);

--
-- Filtros para la tabla `roles_permisos`
--
ALTER TABLE `roles_permisos`
  ADD CONSTRAINT `roles_permisos_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`),
  ADD CONSTRAINT `roles_permisos_ibfk_2` FOREIGN KEY (`id_permiso`) REFERENCES `permisos` (`id_permiso`);

--
-- Filtros para la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD CONSTRAINT `usuarios_roles_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `usuarios_roles_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
