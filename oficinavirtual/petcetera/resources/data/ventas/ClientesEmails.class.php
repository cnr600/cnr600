<?php
include ('../Db.class.php');
session_start();

class Clientes extends Db {

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
		$count="Select count(*) as count from vendedores_clientesemails WHERE ";
		$query="SELECT
id,		
email,
cliente,
tipo,
(select nombre from general_contactotiposemail where id=tipo) as tiponombre
from vendedores_clientesemails WHERE ";


	
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
	 $query="INSERT INTO vendedores_clientesemails
(
email,
cliente,
tipo
)
VALUES
(
'".$_POST["email"]."',
'".$_POST["cliente"]."',
'".$_POST["tipoemail"]."'
);";


$result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
function update(){

  $query="UPDATE vendedores_clientesemails
SET
email='".$_POST["email"]."',
tipo='".$_POST["tipoemail"]."'
WHERE id='".$_POST["id"]."';";




$result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'El tel&eacute;fono no fue editado'}";
}else{
	echo "{success:'true',msg:'El tel&eacute;fono ha sido editado ex&iacutetosamente!'}";
}
}
function delete(){

	$query="DELETE from vendedores_clientesemails
where id='".$_POST["id"]."'";

		 $result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
}

$object=new Clientes($_GET["info"]);

?>