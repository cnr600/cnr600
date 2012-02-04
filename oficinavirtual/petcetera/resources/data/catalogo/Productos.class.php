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
					
		}
	}
	function getList(){
		$success=true;
		$count="Select count(*) as count from productos WHERE ";
		$query="SELECT
					codigointerno as idproductos,
					nombre,
					preciovendedor,
					peso,
					descripcion,
					meta_keywords,
					imagen,
					(select text from productos_clasificacion where id=clasificacion)as clasificacion,
					premium
					FROM productos WHERE ";	


	
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

}

$object=new Productos($_GET["info"]);
?>