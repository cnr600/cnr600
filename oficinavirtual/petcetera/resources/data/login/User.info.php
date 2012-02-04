<?php
session_start(); 
$rows['username']= $_SESSION['usuario'];
$rows['name']= $_SESSION['nombre'];
$rows['access']="1";
$rows['vendedor']=$_SESSION['vendedor'];
$jsonString = json_encode(Array("SUCCESS" => "true", "TOTAL" => "1", "DATA" => $rows));
		echo $jsonString;
?>
