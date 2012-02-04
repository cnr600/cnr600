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
		$count="Select count(*) as count from vendedores_empresasfacturacion WHERE vendedor='".$_SESSION["vendedor"]."' AND";
		$query="select 
id,
razonsocial,
alias,
rfc,
calle,
numero,
colonia,
cp,
municipio,
ciudad,
estado,
pais,
telefono
FROM vendedores_empresasfacturacion WHERE vendedor='".$_SESSION["vendedor"]."' AND";
	


	
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
	
	$query="INSERT INTO vendedores_empresasfacturacion
(
vendedor,
razonsocial,
alias,
rfc,
calle,
numero,
colonia,
cp,
municipio,
ciudad,
estado,
pais,
telefono
)
VALUES
(
'".$_SESSION["vendedor"]."',
'".$_POST["frazonsocial"]."',
'".$_POST["falias"]."',
'".$_POST["frfc"]."',
'".$_POST["fcalle"]."',
'".$_POST["fnumero"]."',
'".$_POST["fcolonia"]."',
'".$_POST["fcp"]."',
'".$_POST["fmunicipio"]."',
'".$_POST["fciudad"]."',
'".$_POST["festado"]."',
'".$_POST["fpais"]."',
'".$_POST["telefono"]."'
);";
$result=$this->getUpdateQuery($query);
if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
}
function update(){

  $query="UPDATE vendedores_empresasfacturacion
SET
razonsocial='".$_POST["razonsocial"]."',
alias='".$_POST["alias"]."',
rfc='".$_POST["rfc"]."',
calle='".$_POST["calle"]."',
numero='".$_POST["numero"]."',
colonia='".$_POST["colonia"]."',
cp='".$_POST["cp"]."',
municipio='".$_POST["municipio"]."',
ciudad='".$_POST["ciudad"]."',
estado='".$_POST["estado"]."',
pais='".$_POST["pais"]."',
telefono='".$_POST["telefono"]."'
WHERE id='".$_POST["id"]."';";




$result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
}
function delete(){

	 $query="DELETE FROM vendedores_empresasfacturacion
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