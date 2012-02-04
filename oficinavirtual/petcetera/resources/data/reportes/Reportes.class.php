<?php
include ('../Db.class.php');
session_start();
class Iphoenix extends Db {


	function __construct($info){
		parent::__construct();
		switch ($info){

		    case "report1":
				$this->getReport1();
				break;
			case "ventasporproducto":
				$this->reporteVentasPorProducto();
				break;
			case "ventaspormes":
				$this->reporteVentasPorMes();
				break;
			case "talentodestacado":
				$this->reporteTalentoDestacado();
				break;
			case "talentonodestacado":
				$this->reporteTalentoNoDestacado();
				break;
			case "talentocercabaja":
				$this->reporteTalentoCercaBaja();
				break;
			case "usuariosemexica":
				$this->usuariosEmexica();
				break;	
			case "usuariosov":
				$this->usuariosOV();
				break;
			case "caja":
				$this->caja();
				break;	
			case "inventario":
				$this->inventario();
				break;	
			case "provedores":
				$this->provedores();
				break;	
			case "clientes":
				$this->clientes();
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
	function getReport1(){
		$success=true;
		$count="Select count(*) as count FROM pedidos GROUP BY tipopedido ";
	 $query="SELECT 
		count(*) as numpedidos,tipopedido,nombre,SUM(cantidad) as cantidad,SUM(total) as total 
		FROM pedidos p 
    left join (pedidos_tipos pt) on (p.tipopedido=pt.id) 
    left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
    WHERE estatus='pe' and vendedor='".$_SESSION['vendedor']."'
     GROUP BY tipopedido 
		";
	


	
$result=$this->getUpdateQuery($query);
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
	function reporteVentasPorProducto(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";
		$query="select 
codigointerno,
nombre,
sum(pp.cantidad) as cantidad,
sum(pp.cantidad*pp.precio) as total
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto
		";
	


	
$result=$this->getUpdateQuery($query);
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
function reporteVentasPorMes(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";
		$query="
select 
(select  DATE_FORMAT(created, '%m-%Y')from pedidos_estatushistorial where pedido=pp.pedido and estatus='pi') as id,
sum(pp.cantidad) as cantidad,
sum(pp.cantidad*pp.precio) as total,
(select  DATE_FORMAT(created, '%m')from pedidos_estatushistorial where pedido=pp.pedido and estatus='pi') as mes,
(select  DATE_FORMAT(created, '%Y')from pedidos_estatushistorial where pedido=pp.pedido and estatus='pi') as ano
from pedidos_productos pp
left join (pedidos_estatushistorial ph)
on (pp.pedido=ph.pedido)
where ph.estatus='pe'
group by (select  DATE_FORMAT(created, '%m')from pedidos_estatushistorial where pedido=pp.pedido and estatus='pi')
		";
	


	
$result=$this->getUpdateQuery($query);
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
	function reporteTalentoDestacado(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
	function reporteTalentoCercaBaja(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
	function reporteTalentoNoDestacado(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
function usuariosOV(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
function usuariosEmexica(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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

function caja(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
function inventario(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
function provedores(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
function clientes(){
		$success=true;
		$count="select 
count(*) as count
from pedidos_productos pp
left join (productos p) 
on (pp.producto=p.codigointerno)
group by pp.producto ";

		$query="
select
idvendedor,
titulo,
nombres,
apaterno,
amaterno,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as pedidoscompletados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
left join (pedidos_productos pp) on (p.idpedidos=pp.pedido) 
where vendedor=v.idvendedor and estatus='pe') as productoscomprados,
(select count(*) from pedidos p 
left join (pedidos_estatushistorial ph) on (p.idpedidos=ph.pedido) 
where vendedor=v.idvendedor and estatus='pe') as total
from vendedores v
		";
	


	
$result=$this->getUpdateQuery($query);
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
}

$object=new Iphoenix($_GET["info"]);
?>

