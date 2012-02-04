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
		$count="Select count(*) as count from pedidos_productos WHERE ";
		$query="select 
id,
pedido,
producto as idproducto,
(select nombre from productos where codigointerno=producto) as producto,
(select imagen from productos where codigointerno=producto) as imagen,
cantidad,
precio
FROM pedidos_productos WHERE ";
	


	
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
if($_POST["cliente"]=="on"){
	$_POST["cliente"]=1;
}else{
	$_POST["cliente"]=0;
}
if($_POST["factura"]=="on"){
	$_POST["factura"]=1;
}else{
	$_POST["factura"]=0;
}
if($_POST["envio"]=="on"){
	$_POST["envio"]=1;
}else{
	$_POST["envio"]=0;
}
if($_POST["lineapremium"]=="on"){
	$_POST["lineapremium"]=1;
}else{
	$_POST["lineapremium"]=0;
}
if($_POST["idcliente"]==null){
	$_POST["idcliente"]=0;
}
  $query="INSERT INTO pedidos
(
vendedor,
cliente,
factura,
envio,
lineapremium,
idcliente,
rfc,
fcalle,
fnumero,
fcolonia,
fmunicipio,
fcp,
fciudad,
festado,
fpais,
ftel,
eguia,
ecalle,
enumero,
ecolonia,
emunicipio,
ecp,
eciudad,
eestado,
epais,
etel,
enotas,
estatus,
costoenvio,
tipodepago,
descuento
)
VALUES
(

".$_SESSION["vendedor"].",
".$_POST["cliente"].",
".$_POST["factura"].",
".$_POST["envio"].",
".$_POST["lineapremium"].",
".$_POST["idcliente"].",
'".$_POST["rfc"]."',
'".$_POST["fcalle"]."',
'".$_POST["fnumero"]."',
'".$_POST["fcolonia"]."',
'".$_POST["fmunicipio"]."',
'".$_POST["fcp"]."',
'".$_POST["fciudad"]."',
'".$_POST["festado"]."',
'".$_POST["fpais"]."',
'".$_POST["ftel"]."',
'".$_POST["eguia"]."',
'".$_POST["ecalle"]."',
'".$_POST["enumero"]."',
'".$_POST["ecolonia"]."',
'".$_POST["emunicipio"]."',
'".$_POST["ecp"]."',
'".$_POST["eciudad"]."',
'".$_POST["eestado"]."',
'".$_POST["epais"]."',
'".$_POST["etel"]."',
'".$_POST["enotas"]."',
1,
".$_POST["costoenvio"].",
".$_POST["tipodepago"].",
".$_POST["descuento"]."
);";

$result=$this->getUpdateQuery($query);
if (!$result) {

    echo "{failure:'true',msg:'El registro no fue ingresado1'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}


}
function update(){
if($_POST["cliente"]=="on"){
	$_POST["cliente"]=1;
}else{
	$_POST["cliente"]=0;
}
if($_POST["factura"]=="on"){
	$_POST["factura"]=1;
}else{
	$_POST["factura"]=0;
}
if($_POST["envio"]=="on"){
	$_POST["envio"]=1;
}else{
	$_POST["envio"]=0;
}
if($_POST["lineapremium"]=="on"){
	$_POST["lineapremium"]=1;
}else{
	$_POST["lineapremium"]=0;
}
if($_POST["idcliente"]==null){
	$_POST["idcliente"]=0;
}
  $query="UPDATE pedidos
SET
vendedor=".$_SESSION["vendedor"].",
cliente=".$_POST["cliente"].",
factura=".$_POST["factura"].",
envio=".$_POST["envio"].",
lineapremium=".$_POST["lineapremium"].",
idcliente=".$_POST["idcliente"].",
rfc='".$_POST["rfc"]."',
fcalle='".$_POST["fcalle"]."',
fnumero='".$_POST["fnumero"]."',
fcolonia='".$_POST["fcolonia"]."',
fmunicipio='".$_POST["fmunicipio"]."',
fcp='".$_POST["fcp"]."',
fciudad='".$_POST["fciudad"]."',
festado='".$_POST["festado"]."',
fpais='".$_POST["fpais"]."',
ftel='".$_POST["ftel"]."',
eguia='".$_POST["eguia"]."',
ecalle='".$_POST["ecalle"]."',
enumero='".$_POST["enumero"]."',
ecolonia='".$_POST["ecolonia"]."',
emunicipio='".$_POST["emunicipio"]."',
ecp='".$_POST["ecp"]."',
eciudad='".$_POST["eciudad"]."',
eestado='".$_POST["eestado"]."',
epais='".$_POST["epais"]."',
etel='".$_POST["etel"]."',
enotas='".$_POST["enotas"]."',
estatus=1,
costoenvio='".$_POST["costoenvio"]."',
tipodepago='".$_POST["tipodepago"]."',
descuento='".$_POST["descuento"]."'
WHERE idpedidos='".$_SESSION["idpedido"]."';";




$result=$this->getUpdateQuery($query);

if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}
}
function delete(){

	 $query="DELETE FROM comunicacion_oficinavirtualbanners
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