<?PHP include("resources/data/Tips.class.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Cat&aacute;logo Petcetera</title>
<meta charset="latin">
<link rel="stylesheet" href="resources/css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="resources/css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="resources/css/style.css" type="text/css" media="all">
<script type="text/javascript" src="resources/js/jquery-1.6.js"></script>
<script type="text/javascript" src="resources/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="resources/js/tms-0.3.js"></script>
<script type="text/javascript" src="resources/js/tms_presets.js"></script>
<script type="text/javascript" src="resources/js/script.js"></script>
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
<style type="text/css">
.colorClass01 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #0daf2b;
}
.tipsColor02 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #FFF;
	background-color: #0daf2b;
}
.colorClass03 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #4f3324;
}
.colorClass04 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: medium;
	color: #FFF;
	background-color: #4f3324;
}
</style>
</head>
<body id="page3">
<div class="body1">
	<div class="main">
<!--header -->
		<header>
						<div class="wrapper"> <a href="index.php" id="logo">#</a>
<nav>
<ul id="menu">
<li ><a href="index.php">Inicio</a></li>
<li><a href="innovando.php">┐Innovando con pasi&oacute;n?</a></li>
<li><a href="catalogo/" target="_blank">Cat&aacute;logo</a></li>
<li><a href="noticias.php">Noticias</a></li>
<li><a href="oficinavirtual/">Oficina virtual</a></li>
<li class="active"><a href="tips.php">Tips</a></li>
<li><a href="contacto.php">Cont&aacute;ctanos</a></li>
</ul>
</nav>
</div>
		</header><div class="ic"></div>
<!-- / header -->
<!-- content -->
		<article id="content">
			<div class="wrapper">
				<h2 class="price">Tips</h2>
				<?PHP $treeDataModel = new Tips;
$treeDataModel ->getAllTips('petceter_emexica','petceter_emexica','Catalogo1','localhost');?>
                <div class="wrapper pad_top1"></div>
			</div>
		</article>
	</div>
</div>
<div class="body2">
	<div class="main"><!-- / content -->
	</div>
</div>
<div class="main">
<!-- footer -->
	<footer>
		<div class="wrapper">
			<section class="col2">
				<div class="wrapper">
				  <section class="col4">
				    <ul id="icons">
				      <li><a href="https://www.facebook.com/pages/cat%C3%A1logo-petcetera/130071893731596?sk=wall" target="_blank"><img src="resources/images/facebook.png" alt=""></a>facebook</li>
				      <li><a href="#"><img src="resources/images/twitter.png" alt=""></a>twitter</li>
				      <li></li>
			        </ul>
			      </section>
				  <section class="col4 pad_left1">
					<h3>Noticias &amp; Articulos</h3>
                        <ul id="why_us">
                          <li></li>
                        </ul>
					</section>
				</div>
				<div id="footer_link">CAT&Aacute;LOGO PETCETERA<br>
Todos Los Derechos Reservados</div>
			</section>
			<section class="col3 pad_left2">
			  <h4>&nbsp;</h4>
			  <div class="wrapper pad_top1" >
			    <figure class="left marg_right1" ><a href="consolo100.php" ><img src="resources/images/alerta.gif" alt="" width="90" height="90"></a></figure>
			    <p><span class="font1 color2">Con solo $100</span><br>
			      Mejora tus ingresos y logra tu independencia financiera. <a href="#" class="link1">Leer Mas</a> </p>
		      </div>
			  <div class="wrapper">
			    <figure class="left marg_right1"><a href="http://www.fundaciontomy.org" target="_new"><img src="resources/images/tomy.jpg" alt="" width="90"></a></figure>
			    <p><span class="font1 color2">Fundaci&oacute;n TOMY</span><br>
			      Con la compra de nuestros productos apoyas a la fundaci&oacute;n TOMY
			      . &nbsp;<a href="#" class="link1">Lee</a></p>
		      </div>
		  </section>
		</div>
		<!-- {%FOOTER_LINK} -->
	</footer>
<!-- / footer -->
</div>
</body>
</html>