<?php
$servername = "127.0.0.1";
$username = "root";
$password = "pass";
$DBName = "mydb";

$nombre = $_POST['nombre'];
$apellido1 = $_POST['apellido1'];
$apellido2 = $_POST['apellido2'];
$user = $_POST['user'];
$passwordUser = $_POST['password'];

// Connect
$mysqli = new mysqli($servername, $username, $password,$DBName );
if(!$mysqli) {
    header('HTTP/1.1 400 Bad Request');
    die();
}
 
// Prepare IN parameters
$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
$mysqli->query("SET @apellido1   = " . "'" . $mysqli->real_escape_string($apellido1) . "'");
$mysqli->query("SET @apellido2  = " . "'" . $mysqli->real_escape_string($apellido2) . "'");
$mysqli->query("SET @user  = " . "'" . $mysqli->real_escape_string($user) . "'");
$mysqli->query("SET @password  = " . "'" . $mysqli->real_escape_string($passwordUser) . "'");
 
 
// Call sproc
// AddNote(IN username CHAR(20), IN sessionId INT(10), IN note TEXT)
if(!$mysqli->query("CALL createUser(  @user, @password,@nombre, @apellido1, @apellido2)"))
{
    if($mysqli) $mysqli->close(); // Close DB connection
    header('HTTP/1.1 400 Es posible que el usuario ya exista');
    die();
}
 
if($mysqli) $mysqli->close(); // Close DB connection


echo "Usuario creado";
?>