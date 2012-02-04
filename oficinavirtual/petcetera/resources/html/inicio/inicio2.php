<?PHP include("Banners.class.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Inicio</title>
<meta charset="latin">
<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<script type="text/javascript" src="js/jquery-1.6.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/tms-0.3.js"></script>
<script type="text/javascript" src="js/tms_presets.js"></script>
<script type="text/javascript" src="js/script.js"></script>
 <!--[if lt IE 9]>
	<script type="text/javascript" src="js/html5.js"></script>
	<style type="text/css">
		#menu a, .bg, .bg2, #ContactForm a {behavior:url(js/PIE.htc)}
	</style>
<![endif]-->
<!--[if lt IE 7]>
	<div style='clear:both;text-align:center;position:relative'>
		<a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/images/upgrade.jpg" border="0" alt="" /></a>
	</div>
<![endif]-->
</head>
<body id="page1">
<div class="body1"></div>
<div class="body2">
	<div class="main">
		<article id="content2">
			<div class="wrapper">
			  <section class="col2">
              	<p><strong class="font1"><a href="inicio.php">regresar</a></strong> </p>
              	
              	  <?PHP $treeDataModel = new Tips;
$treeDataModel ->getComunicado('petceter_emexica','petceter_emexica','Catalogo1','localhost',$_GET["id"]);?>
           	  
          
                  <p><strong class="font1"><a href="inicio.php">regresar</a></strong><br/>
                </p>
				    <div class="wrapper">
						<section class="col4">
							<ul class="list1">
								<li></li>
							</ul>
						</section>
				  </div>
				</section>
			</div>
		</article>
<!-- / content -->
	</div>
</div>
<div class="main">
<!-- footer -->
  <footer><!-- {%FOOTER_LINK} -->
	</footer>
<!-- / footer --></div>

</body>
</html>