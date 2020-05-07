<?php 
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("Conectar.php");
  $con=retornarConexion();
  

  mysqli_query($con,"insert into Usuarios(idUsuario,Nombre,Apellidos,Correo,Carrera,Contraseña) values($params->idUsuario,'$params->Nombre','$params->Apellidos','$params->Correo','$params->Carrera','$params->Contraseña'");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';


  echo json_encode($response);  
?>