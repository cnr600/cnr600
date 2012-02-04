<?php session_start(); 
if(!isset($_SESSION['vendedor'])){
	  header( 'Location: ../index.php' ) ;
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;" />
<meta charset="latin">
<title>Cat&aacute;logo Petcetera - Oficina Virtual</title>

<link rel="stylesheet" type="text/css" href="/extjs4/resources/css/ext-all-gray.css">
<link rel="stylesheet" type="text/css" href="resources/css/icons.css">
<link rel="stylesheet" type="text/css" href="resources/css/catalogo.css">
<link rel="stylesheet" type="text/css" href="resources/css/mensaje.css">
	
		    <style type="text/css">
		
		#loading-mask {
  position: absolute;
  left:     0;
  top:      0;
  width:    100%;
  height:   100%;
  z-index:  20000;
  background-color: white;
}

#loading {
  position: absolute;
  left:     50%;
  top:      50%;
  padding:  2px;
  z-index:  20001;
  height:   auto;
  margin:   -35px 0 0 -30px;
}

#loading .loading-indicator {
  background: url(resources/images/emexicaloading.gif) no-repeat;
  color:      #555;
  height: 100;
  font:       bold 13px tahoma,arial,helvetica;
  padding:    8px 42px;
  margin:     0;
  text-align: center;
  height:     auto;
}  </style>
</head>

<body>
<div id="loading-mask"></div>
<div id="loading">
  <div class="loading-indicator">
   Abiendo tu<br/><b>Oficina Virtual</b>...
  </div>
</div>

<script type="text/javascript" src="/extjs4/bootstrap.js"></script>
<script type="text/javascript" src="/extjs4/locale/ext-lang-es.js"></script>
<script type="text/javascript" src="app/app.js"></script>
 <script type="text/javascript" src="/extjs4/examples/shared/examples.js"></script>
 <script type"text/javascript">
			Ext.Loader.setConfig({enabled:true});
			Ext.Loader.setPath('Ext.ux', '/extjs4/examples/ux');
			Ext.Loader.setPath('Ext.example', '/extjs4/examples/shared');
		</script>
</body>
</html>