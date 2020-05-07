<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("Conectar.php");
  $con=retornarConexion();

  $registros=mysql_query($con,"select * from Usuarios");
  $vec=[];  
  while ($reg=mysql_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>