<?php
function retornarConexion() {
  $con=mysqli_connect("sql303.byethost.com","b4_25611203","estufas","b4_25611203_Foro");
  return $con;
}
?>