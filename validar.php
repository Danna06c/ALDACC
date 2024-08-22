<?php
session_start();

// Verifica si hay datos POST antes de usarlo
if (!isset($_POST['usuario']) || !isset($_POST['contraseña'])) {
    die("Datos de entrada inválidos.");
}

$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];

// Establece la conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "aldacc");

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Usa sentencias preparadas para evitar inyecciones SQL
$stmt = $conexion->prepare("SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?");
$stmt->bind_param("ss", $usuario, $contraseña);
$stmt->execute();
$resultado = $stmt->get_result();

if (!$resultado) {
    die("Error en la consulta: " . mysqli_error($conexion));
}

$filas = $resultado->fetch_array(MYSQLI_ASSOC);

if ($filas) {
    // Redirección según el rol
    switch ($filas['id_rol']) {
        case 1: // admin
            header("Location: /ALDACC%201.4.1/ALDACC%202/admin.php");
            break;
        case 2: // profesor
            header("Location: http://localhost/ALDACC_1.4.1/ALDACC_2/ALDACC/HOMEPAGE/HomePageMaestro.html");
            break;
        case 3: // estudiante
            header("Location: http://localhost/ALDACC_1.4.1/ALDACC_2/ALDACC/HOMEPAGE/HomePageEstudiante.html");
            break;
        default:
            // Si el rol no coincide con los esperados
            include("index.html");
            echo '<h1 class="bad">ERROR EN LA AUTENTICACIÓN</h1>';
    }
    exit(); // Asegura que no se ejecute más código después de redirigir
} else {
    // Si no se encontraron filas
    include("index.html");
    echo '<h1 class="bad">ERROR EN LA AUTENTICACIÓN</h1>';
}

$stmt->close();
mysqli_close($conexion);
?>