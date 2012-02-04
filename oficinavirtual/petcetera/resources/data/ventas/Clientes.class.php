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
		$count="Select count(*) as count from vendedores_clientes WHERE vendedor='".$_SESSION["vendedor"]."' AND";
		$query="SELECT
v.id,
titulo,
nombre,
apaterno,
amaterno,
sexo,
DATE_FORMAT(fechanac, '%d-%m-%Y') as fechanac,
comentarios,
created,
calle,
numero,
colonia,
municipio,
cp,
ciudad,
estado,
pais,
tipo,	
(select nombre from general_contactotipodireccion where id=vd.tipo) as tipodireccion,
latitud,
logitud as longitud
					from vendedores_clientes v, vendedores_clientesdirecciones vd where v.id=vd.cliente AND vendedor='".$_SESSION["vendedor"]."' AND";

	
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
	$count="Select count(*) as count from vendedores_clientes WHERE vendedor='".$_SESSION["vendedor"]."' AND ";
		$result=$this->getQuery($count);
$total=-1;

		while ($row =  mysql_fetch_assoc($result)) {
			$total=$row["count"];
		}
$total++;
$today = date("Ymd");		
$idcliente=$today."-ClienteV".$_SESSION['vendedor']."-".$total;
//$json=json_decode(file_get_contents("php://input"));
	$fechanac = explode("-", $_POST["fechanac"]);
	$fecha=$fechanac[2]."-".$fechanac[1]."-".$fechanac[0];
	$query="INSERT INTO vendedores_clientes
(
id,
vendedor,
titulo,
nombre,
apaterno,
amaterno,
sexo,
fechanac,
comentarios
)
VALUES
(
'".$idcliente."',
'".$_SESSION["vendedor"]."',
'".$_POST["titulo"]."',
'".$_POST["nombre"]."',
'".$_POST["apaterno"]."',
'".$_POST["amaterno"]."',
'".$_POST["sexo"]."',
'".$fecha."',
'".$_POST["comentarios"]."'	
);";


$query2="INSERT INTO vendedores_clientesdirecciones
(
cliente,
calle,
numero,
colonia,
municipio,
cp,
ciudad,
estado,
pais,
tipo
)
VALUES
(
'".$idcliente."',
'".$_POST["calle"]."',
'".$_POST["numero"]."',
'".$_POST["colonia"]."',
'".$_POST["municipio"]."',
'".$_POST["cp"]."',
'".$_POST["ciudad"]."',
'".$_POST["estado"]."',
'".$_POST["pais"]."',
'".$_POST["tipo"]."'
);
";
 $query3="INSERT INTO vendedores_clientestelefonos
(
telefono,
tipo,
cliente
)
VALUES
(
'".$_POST["telefono"]."',
'".$_POST["tipotelefono"]."',
'".$idcliente."'
);";
$query4="INSERT INTO vendedores_clientesemails
(
email,
cliente,
tipo
)
VALUES
(
'".$_POST["email"]."',
'".$idcliente."',
'".$_POST["tipoemail"]."'
);";
$result=$this->getUpdateQuery($query);
$result2=$this->getUpdateQuery($query2);
$result3=$this->getUpdateQuery($query3);
$result4=$this->getUpdateQuery($query4);
if (!$result&&!$result2&&!$result3&&!$result4) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
function update(){
	$fechanac = explode("/", $_POST["fechanac"]);
	$fecha=$fechanac[2]."-".$fechanac[1]."-".$fechanac[0];
	 $query="UPDATE vendedores_clientes
SET
titulo = '".$_POST["titulo"]."',
nombre = '".$_POST["nombre"]."',
apaterno = '".$_POST["apaterno"]."',
amaterno = '".$_POST["amaterno"]."',
sexo = '".$_POST["sexo"]."',
fechanac ='".$fecha."'
WHERE id='".$_POST["id"]."';";


$query2="UPDATE vendedores_clientesdirecciones
SET
calle = '".$_POST["calle"]."',
numero = '".$_POST["numero"]."',
colonia = '".$_POST["colonia"]."',
municipio = '".$_POST["municipio"]."',
cp = '".$_POST["cp"]."',
ciudad = '".$_POST["ciudad"]."',
estado = '".$_POST["estado"]."',
pais = '".$_POST["pais"]."',
tipo = '".$_POST["tipo"]."'
WHERE cliente='".$_POST["id"]."';";


$result=$this->getUpdateQuery($query);
$result2=$this->getUpdateQuery($query2);
if (!$result&&!$result2) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
function delete(){
//	$parameters=explode("=", file_get_contents("php://input"));
$query="DELETE from vendedores_clientes
where id='".$_POST["id"]."'";
	$query2="DELETE from vendedores_clientesemails
where cliente='".$_POST["id"]."'";
	$query3="DELETE from vendedores_clientesdirecciones
where idvendedor='".$_POST["id"]."'";
	$query4="DELETE from vendedores_telefonos
where idclientevendedor='".$_POST["id"]."'";
$query4="DELETE from vendedores_visits
where idvendedor='".$_POST["id"]."'";
		 $result=$this->getUpdateQuery($query4);
		 $result1=$this->getUpdateQuery($query3);
		 $result2=$this->getUpdateQuery($query2);
		 $result3=$this->getUpdateQuery($query1);
if (!$result&&!$result2&&!$result3&&!$result4) {
    echo "{failure:'true',msg:'registro no ingresado'}";
}else{
	echo "{success:'true',msg:'El nuevo usuario ha sido creado ex&iacutetosamente!'}";
}
}
}

$object=new Clientes($_GET["info"]);

?>