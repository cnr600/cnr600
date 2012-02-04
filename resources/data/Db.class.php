<?php
session_start();
class Db{

	var $db_server="localhost";
	var $db_user="petceter_emexica";
	var $db_pwd="Catalogo1";
	var $db_name="petceter_emexica";

	var $start;
	var $count;
	var $sort;
	var $dir;
	var $where;
	
	var $QueryCount;

	function __construct(){
		$this->start  = isset($_REQUEST['start'])  ? $_REQUEST['start']  :  0;
		$this->count  = isset($_REQUEST['limit'])  ? $_REQUEST['limit']  : 50;
		$this->sort   = isset($_REQUEST['sort'])   ? $_REQUEST['sort']   : '';
		$this->dir    = isset($_REQUEST['dir'])    ? $_REQUEST['dir']    : 'ASC';
		$filters = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;

		if (is_array($filters)) {
			$encoded = false;
		} else {
			$encoded = true;
			$filters = json_decode($filters);
		}

		$this->where = ' 0 = 0 ';
		$qs = '';

		// loop through filters sent by client
		if (is_array($filters)) {
			for ($i=0;$i<count($filters);$i++){
				$filter = $filters[$i];

				// assign filter data (location depends if encoded or not)
				if ($encoded) {
					$field = $filter->field;
					$value = $filter->value;
					$compare = isset($filter->comparison) ? $filter->comparison : null;
					$filterType = $filter->type;
				} else {
					$field = $filter['field'];
					$value = $filter['data']['value'];
					$compare = isset($filter['data']['comparison']) ? $filter['data']['comparison'] : null;
					$filterType = $filter['data']['type'];
				}

				switch($filterType){
					case 'string' : $qs .= " AND ".$field." LIKE '%".$value."%'"; Break;
					case 'list' :
						if (strstr($value,',')){
							$fi = explode(',',$value);
							for ($q=0;$q<count($fi);$q++){
								$fi[$q] = "'".$fi[$q]."'";
							}
							$value = implode(',',$fi);
							$qs .= " AND ".$field." IN (".$value.")";
						}else{
							$qs .= " AND ".$field." = '".$value."'";
						}
						Break;
					case 'boolean' : $qs .= " AND ".$field." = ".($value); Break;
					case 'numeric' :
						switch ($compare) {
							case 'eq' : $qs .= " AND ".$field." = ".$value; Break;
							case 'lt' : $qs .= " AND ".$field." < ".$value; Break;
							case 'gt' : $qs .= " AND ".$field." > ".$value; Break;
						}
						Break;
					case 'date' :
						switch ($compare) {
							case 'eq' : $qs .= " AND ".$field." = '".date('Y-m-d',strtotime($value))."'"; Break;
							case 'lt' : $qs .= " AND ".$field." < '".date('Y-m-d',strtotime($value))."'"; Break;
							case 'gt' : $qs .= " AND ".$field." > '".date('Y-m-d',strtotime($value))."'"; Break;
						}
						Break;
				}
			}
			$this->where .= $qs;
		}
	}
	//**** Generic function to get all queries
	function getQuery($query){
			
			
			$query = $query.$this->where;
	if ($this->sort != "") {
    $query .= " ORDER BY ".$this->sort." ".$this->dir;
	}
	$query .= " LIMIT ".$this->start.",".$this->count;
			

	
	
		$con = mysql_connect($this->db_server,$this->db_user,$this->db_pwd);

		if (!$con)
		{
			die('Could not connect: ' . mysql_error());
		}

		$db_selected = mysql_select_db($this->db_name, $con);

		if (!$db_selected) {
			die ('Can\'t use database : ' . mysql_error());

		}

		//echo $query;
		//echo $queryCount;
	    mysql_set_charset("latin1");
		$result = mysql_query($query);
		return $result;
		mysql_close($con);
	}
	
	function getSingleQuery($query){


		$con = mysql_connect($this->db_server,$this->db_user,$this->db_pwd);

		if (!$con)
		{
			die('Could not connect: ' . mysql_error());
		}

		$db_selected = mysql_select_db($this->db_name, $con);

		if (!$db_selected) {
			die ('Can\'t use database : ' . mysql_error());

		}
		$query = $query.$where;
		if ($sort != "") {
    		$query .= " ORDER BY ".$sort." ".$dir;
		}
		$query .= " LIMIT ".$start.",".$count;
		//echo $query;
		//echo $queryCount;
		mysql_set_charset("latin1");
		$resultAll = mysql_query($query);
		mysql_close($con);
		return $resultAll;
		
	}

	//**********************Fin de funcion generica
function getUpdateQuery($query){

		
		$con = mysql_connect($this->db_server,$this->db_user,$this->db_pwd);

		if (!$con)
		{
			die('Could not connect: ' . mysql_error());
		}

		$db_selected = mysql_select_db($this->db_name, $con);

		if (!$db_selected) {
			die ('Can\'t use database : ' . mysql_error());

		}
		mysql_set_charset("latin1");
		$result = mysql_query($query);
	

		return $result;
		mysql_close($con);
	}
}

?>