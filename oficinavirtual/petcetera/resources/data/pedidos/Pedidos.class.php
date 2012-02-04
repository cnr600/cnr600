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
			case "cancel":
				$this->cancel();
				break;	
			case "pagado":
				$this->pagado();
				break;							
		}
	}
	function getList(){
		$success=true;
		$count="Select count(*) as count from pedidos WHERE vendedor='".$_SESSION['vendedor']."' ";
		$query="select 
idpedidos,
vendedor,
envio,
factura,
cliente,
idcliente,
tipopedido,
idempleado,
tipodepago,
DATE_FORMAT(fecha, '%d-%m-%Y') as fecha,
cantidad,
peso,
descpremiumpercent,
descpremium,
descpremiumotros,
desclineapercent,
desclinea,
desclineaotros,
subtotal,
costoenvio,
total,
(select nombre from pedidos_estatushistorial a left join (pedidos_estatus b) on (a.estatus=b.id) where pedido=idpedidos order by created DESC LIMIT 1) as estatus,
(select id from pedidos_estatushistorial a left join (pedidos_estatus b) on (a.estatus=b.id) where pedido=idpedidos order by created DESC LIMIT 1) as estatusid

FROM pedidos WHERE vendedor='".$_SESSION['vendedor']."' AND ";
	


	
$result=$this->getQuery($query);
		$rows = Array();
		while ($row =  mysql_fetch_assoc($result)) {
			array_push($rows, $row);
		}

$result=$this->getUpdateQuery($count);
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
	$resultProd;
	$resultEnv;
//Creamos el ID del pedido***********************************************************************************	
		$count="Select count(*) as count from pedidos WHERE vendedor='".$_SESSION["vendedor"]."' AND ";
		$result=$this->getQuery($count);
		$total=-1;
		while ($row =  mysql_fetch_assoc($result)) {
			 $total=$row["count"];
		}
 		$total++;
		$today = date("Ymd");		
 		 $idpedido=$today."-V".$_SESSION['vendedor']."-".$total;
//***********************************************************************************************************
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

 $datetime = new DateTime(); 
$fecha=$datetime->format('Y-m-d H:i:s');
 $queryPedido="INSERT INTO pedidos
(
idpedidos,
vendedor,
envio,
factura,
cliente,
idcliente,
tipopedido,
idempleado,
tipodepago,
fecha,
cantidad,
peso,
descpremiumpercent,
descpremium,
descpremiumotros,
desclineapercent,
desclinea,
desclineaotros,
subtotal,
costoenvio,
total
)
VALUES
(
'".$idpedido."',
'".$_SESSION["vendedor"]."',
".$_POST["envio"].",
".$_POST["factura"].",
".$_POST["cliente"].",
'".$_POST["idcliente"]."',
'".$_POST["tipopedido"]."',
'".$_POST["idempleado"]."',
'".$_POST["tipodepago"]."',
'".$fecha."',
'".$_POST["cantidad"]."',
'".$_POST["peso"]."',
'".$_POST["premiumdescperc"]."',
'".$_POST["premiumdescped"]."',
'".$_POST["premiumdescotros"]."',
'".$_POST["lineadescperc"]."',
'".$_POST["lineadescped"]."',
'".$_POST["lineadescotros"]."',
'".$_POST["subtotal"]."',
'".$_POST["costoenvio"]."',
'".$_POST["total"]."'
);";
$result=$this->getUpdateQuery($queryPedido);
//Estatus **********
$estatus="INSERT INTO pedidos_estatushistorial
(pedido,estatus)
values('".$idpedido."','pi');";
$result2=$this->getUpdateQuery($estatus);

//Envio ***************************************

if($_POST["envio"]){
$envios="INSERT INTO pedidos_envios 
(
pedido,
recibe,
guia,
calle,
numero,
colonia,
cp,
municipio,
ciudad,
estado,
pais,
telefono,
telcel,
email,
notas,
estatus
)
VALUES
(
'".$idpedido."',
'".$_POST["recibe"]."',
'".$_POST["guia"]."',
'".$_POST["ecalle"]."',
'".$_POST["enum"]."',
'".$_POST["ecolonia"]."',
'".$_POST["ecp"]."',
'".$_POST["emunicipio"]."',
'".$_POST["eciudad"]."',
'".$_POST["eestado"]."',
'".$_POST["epais"]."',
'".$_POST["etelefono"]."',
'".$_POST["etelcel"]."',
'".$_POST["eemail"]."',
'".$_POST["enotas"]."',
'enviosolicitado'
);
";

$guias=$_POST["guias"];
$guiascount=0;
while($guiascount<$guias){
	$guiascount++;
	$result2=$this->getUpdateQuery($envios);
}

}

//Facturas***************************************
if($_POST["factura"]){ 
 $facturas="INSERT INTO pedidos_facturas
(
pedido,
empresa,
estatus
)
VALUES
(
'".$idpedido."',
".$_POST["empresa"].",
'fa'
)
";
$resultFacturas=$this->getUpdateQuery($facturas);
}
//*************************

$productosmail.="Idproducto		Cantidad <br/>"	;

$countproductos=$_POST["countproductos"];		
$idproductos=explode("-",$_POST["idproductos"]);
$cantidad=explode("-",$_POST["cantidadproductos"]);
$precio=explode("-",$_POST["precioproductos"]);
$peso=explode("-",$_POST["pesoproductos"]);
$sucessproductos=1;
for ($i=0;$i<$countproductos;$i++){
	$productosmail.=$idproductos[$i]."			".$cantidad[$i]."<br/>";	
	 $productosQuery="INSERT INTO pedidos_productos (pedido,producto,cantidad,precio,peso) values
	(
	'".$idpedido."',
	'".$idproductos[$i]."',
	".$cantidad[$i].",
	".$precio[$i].",
	". round($peso[$i], 4)."
	);";
	 $resultado=$this->getUpdateQuery($productosQuery);

	$sucessproductos=$sucessproductos*$resultado;

	}


if (!$result&&!$result2&&!$sucessproductos) {

    echo "{failure:'true',msg:'El registro no fue ingresado1'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";

/*$to = "pedidos@catalogopetcetera.com,cnr600@hotmail.com";
$subject = "Pedido Iniciado";
$message = '

Le informamos que ha sido creado un nuevo pedido ('.$idpedidos.')
';
			
$from = "oficinavirtual@catalogopetcetera.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);

*/
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
function cancel(){
	$estatus="INSERT INTO pedidos_estatushistorial
(pedido,estatus)
values('".$_POST["id"]."','pc');";
$result=$this->getUpdateQuery($estatus);
	if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}	
}
function pagado(){
	$estatus="INSERT INTO pedidos_estatushistorial
(pedido,estatus)
values('".$_POST["id"]."','pp');";
$result=$this->getUpdateQuery($estatus);
	if (!$result) {
    echo "{failure:'true',msg:'El registro no fue ingresado'}";
}else{
	echo "{success:'true',msg:'El registro fue ingresado ex&iacutetosamente!'}";
}	
}
}

$object=new Iphoenix($_GET["info"]);
?>