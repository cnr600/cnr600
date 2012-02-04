<?php
include ('../Db.class.php');
session_start();
class Iphoenix extends Db {


	function __construct($info){
		parent::__construct();
		switch ($info){

		    case "list":
				$this->getList();
				break;
			case "add":
				$this->add();
				break;
			case "edit":
				$this->update();
				break;	
			case "delete":
				$this->delete();
				break;				
		}
	}
	function getList(){
		$success=true;
		$count="Select count(*) as count from pedidos_estatushistorial WHERE ";
		$query="SELECT 
pedido,
estatus,
nombre as estatusnombre,
DATE_FORMAT(created, '%d-%m-%Y') as created,
descripcion
from pedidos_estatushistorial a left join (pedidos_estatus b) on 
(a.estatus=b.id) WHERE ";
	


	
$result=$this->getQuery($query);
		$rows = Array();
		while ($row =  mysql_fetch_assoc($result)) {
			array_push($rows, $row);
		}

$result=$this->getQuery($count);
$total=0;

		while ($row =  mysql_fetch_assoc($result)) {
			$total=$row["count"];
		}

		$jsonString=json_encode(Array(
    "SUCCESS"=>$success,
    "TOTAL"=>$total,
   	 "DATA"=>$rows
		));
		echo $jsonString;
	}	
function add(){
$target_path = $target_path . basename( $_FILES['file']['name']);
$filename=$target_path ;
  $target_path = "../../comunicacion/emexica/banners/";
$target_path = $target_path . basename( $_FILES['file']['name']); 
$query="INSERT INTO comunicacion_emexicabanners
(
imagen,
sort_order,
status
)
VALUES
(
'".$filename."',
".$_POST["sort_order"].",
".$_POST["status"]."

);";
if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    //echo "The file ".  basename( $_FILES['file']['name']). 
  //  " has been uploaded";
  	
$result=$this->getUpdateQuery($query);
if (!$result) {

    echo "{failure:'true',msg:'El registro no fue ingresado1'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
  
} else{
      echo "{failure:'true',msg:'El registro no fue ingresado'}";
}
}
function update(){

$query="UPDATE comunicacion_emexicabanners
SET
sort_order = ".$_POST["sort_order"].",
status = ".$_POST["status"]." 
WHERE id=".$_POST["id"].";";




$result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
}
function delete(){

	 $query="DELETE FROM comunicacion_emexicabanners
			WHERE id=".$_POST["id"]."";
		 $result=$this->getUpdateQuery($query);
	if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
}
}

$object=new Iphoenix($_GET["info"]);
?>