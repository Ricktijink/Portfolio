<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Portfolio - Showcase</title>
	<meta name="author" content="Rick Tijink" />
	<meta name="description" content="Dit moet nog ingevuld worden" />
	<meta name="keywords"  content="Website, Logo, Code, Animation, Design, Animation" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="CSS/main.css" />
	
	<!-- Javascript library & Custom code -->
	<script type="text/javascript" src="JS/jquery-1.7.1.min.js"></script>
	<!-- <script type="text/javascript" src="JS/jquery-3.1.0.min.js"></script> -->
	<script type="text/javascript" src="JS/custom.js"></script>
</head>
<body>
	<div id="portfolio-page">
		<!-- Logo in het midden -->
		<div id="logo-centered">
			<a href="index.html"><img src="IMG/logo.png" alt="logo"></a>
		</div>
		<!-- Back arrow -->
		<!-- <div id="back-arrow-top">
			yo
		</div>		 -->
		<div id="portfolio-wrapper">
			<!-- CONTENT Switcher -->  
		    <?php
		        $pages_dir = 'Pages';

		        if (!empty($_GET['p'])) {
		            $pages = scandir($pages_dir, 0);
		            unset($pages[0], $pages[1]);
		            
		            $p = $_GET['p'];
		            
		            if (in_array($p.'.php', $pages)) {
		                include($pages_dir.'/'.$p.'.php');
		            } else {
		                echo 'Sorry, Page not found...';
		            }
		        }
		    ?>
    	</div>
    	<div id="back-arrow"><a id="back-arrow" href="index.html">Terug</a></div>
    </div>
</body>
</html>