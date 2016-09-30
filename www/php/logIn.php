<?php
$servername = "127.0.0.1";
$username = "root";
$password = "pass";
$DBName = "mydb";

$user = $_POST['user'];
$passwordUser = $_POST['password'];
// Connect
$mysqli = new mysqli($servername, $username, $password,$DBName );
if(!$mysqli) {
    header('HTTP/1.1 400 Bad Request');
    die();
}
 


// Prepare IN parameters
$mysqli->query("SET @user  = " . "'" . $mysqli->real_escape_string($user) . "'");
$mysqli->query("SET @password  = " . "'" . $mysqli->real_escape_string($passwordUser) . "'");
 
 
// Call sproc
// AddNote(IN username CHAR(20), IN sessionId INT(10), IN note TEXT)
$resultado = $mysqli->query("CALL logIn(  @user, @password)");
$row = $resultado->fetch_array();
if ($row[0] != 1){
	if($mysqli) $mysqli->close(); // Close DB connection
    header('HTTP/1.1 400 Usuario y contraseña no coinciden');
    die();
}
 
if($mysqli) $mysqli->close(); // Close DB connection


echo "Las credenciales coinciden" ;
?>