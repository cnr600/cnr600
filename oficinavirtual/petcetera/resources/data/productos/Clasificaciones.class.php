<?php
include ('../Db.class.php');
session_start();
class Clasificaciones extends Db {


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
		$query="SELECT
					*
					FROM productos_clasificacion WHERE ";	


	
$result=$this->getQuery($query);
		$rows = Array();
		while ($row =  mysql_fetch_assoc($result)) {
			array_push($rows, $row);
		}


		$jsonString=json_encode(Array(
    "SUCCESS"=>$success,
    "TOTAL"=>'0',
   	 "DATA"=>$rows
		));
		echo $jsonString;
	}	
function add(){
//$json=json_decode(file_get_contents("php://input"));

	$query="INSERT INTO productos_clasificacion
(text,
parent_id,
active
)
VALUES
(
'".$_POST["text"]."',
".$_POST["parent_id"].",
".$_POST["active"]."
);";
$result=$this->getUpdateQuery($query);
if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'La nueva l&iacute;nea ha sido creado ex&iacutetosamente!'}";
}
}
function updateUser(){
	$query="UPDATE productos_clasificacion
SET
text = '".$_POST["text"]."',
parent_id = '".$_POST["parent_id"]."',
active = '".$_POST["active"]."'
WHERE id=".$_POST["id"].";";

$result=$this->getUpdateQuery($query);
if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
function deleteUser(){
	//$parameters=explode("=", file_get_contents("php://input"));
//	$json=json_decode();
	$query="DELETE FROM productos_clasificacion
			WHERE id=".$_POST["id"]." AND parent_id=".$_POST["id"].";";
		 $result=$this->getUpdateQuery($query);
	if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
}

$object=new Clasificaciones($_GET["info"]);
?>