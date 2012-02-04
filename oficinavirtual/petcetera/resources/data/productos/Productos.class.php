<?php
include ('../Db.class.php');
session_start();
class Productos extends Db {


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
		$count="Select count(*) as count from productos WHERE ";
		$query="SELECT
					codigointerno,
					codigodebarras,
					parent_id,
					nombre,
					talla,
					preciovendedor,
					precioempleado,
					preciopublico,
          existenciareal,
          existenciaconreservas,
					p.puntodereorden,
					p.reordensugerido,
					peso,
					descripcion,
					meta_keywords,
					imagen,
					clasificacion,
					text as clasificacionnombre,
					premium,
					p.active
					FROM productos p left join (productos_clasificacion c) On (p.clasificacion=c.id)
          left join (inventario i) On (p.codigointerno=i.producto)    WHERE ";	


	
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

	$query="INSERT INTO productos
(codigointerno,
codigodebarras,
nombre,
talla,
preciovendedor,
preciopublico,
precioempleado,
peso,
descripcion,
meta_keywords,
clasificacion,
premium,
puntodereorden,
reordensugerido,
active
)
VALUES
(
'".$_POST["codigointerno"]."',
'".$_POST["codigodebarras"]."',
'".$_POST["nombre"]."',
'".$_POST["talla"]."',
'".$_POST["preciovendedor"]."',
'".$_POST["preciopublico"]."',
'".$_POST["precioempleado"]."',
".$_POST["peso"].",
'".$_POST["descripcion"]."',
'".$_POST["meta_keywords"]."',
'".$_POST["clasificacion"]."',
'".$_POST["premium"]."',
'".$_POST["puntodereorden"]."',
'".$_POST["reordensugerido"]."',
".$_POST["active"]."
);";
$result=$this->getUpdateQuery($query);

	$query2="INSERT INTO inventario
(
producto,
puntodereorden,
reordensugerido
)
VALUES
(
'".$_POST["codigointerno"]."',
'".$_POST["puntodereorden"]."',
'".$_POST["reordensugerido"]."'
);";
$result2=$this->getUpdateQuery($query2);
if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}	
	}
function update(){
	$query="UPDATE productos
SET
clasificacion='".$_POST["clasificacion"]."',
codigointerno='".$_POST["codigointerno"]."',
codigodebarras = '".$_POST["codigodebarras"]."',
nombre = '".$_POST["nombre"]."',
talla = '".$_POST["talla"]."',
preciovendedor = '".$_POST["preciovendedor"]."',
preciopublico = '".$_POST["preciopublico"]."',
precioempleado = '".$_POST["precioempleado"]."',
peso = ".$_POST["peso"].",
descripcion = '".$_POST["descripcion"]."',
meta_keywords = '".$_POST["meta_keywords"]."',
premium = '".$_POST["premium"]."',
puntodereorden = '".$_POST["puntodereorden"]."',
reordensugerido = '".$_POST["reordensugerido"]."',
active = '".$_POST["active"]."'



WHERE codigointerno='".$_POST["codigointerno"]."';";

$result=$this->getUpdateQuery($query);
if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
function delete(){
	//$parameters=explode("=", file_get_contents("php://input"));
//	$json=json_decode();
	$query="DELETE FROM productos
			WHERE codigointerno='".$_POST["codigointerno"]."';";
		 $result=$this->getUpdateQuery($query);
	if (!$result) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
}
$object=new Productos($_GET["info"]);
?>