<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Main stylesheet -->
   <link rel="stylesheet" type="text/css" href="Css/style.css">
   <!-- Google fonts -->
   <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway" rel="stylesheet">

   <!-- Important Owl stylesheet -->
   <link rel="stylesheet" href="owl-carousel/owl.carousel.css">
   <!-- Default Theme -->
   <link rel="stylesheet" href="owl-carousel/owl.theme.css">

   <title>Rick Tijink - CV</title>
</head>
<body>
   <!-- Modal (Temp location) -->
   <div id="businesscard-modal" class="modal">
      <div class="modal-content">
         <div class="modal-header">
            <h3>Rick Tijink</h3>
            <h4>Frontend Developer</h4>
            <div class="modal-header-profile">
               <img src="Images/businesscard-profile.png" alt="Profile">
            </div>
         </div>
         <div class="modal-contentarea">
            <span>E-Mail:</span>
            <p><a href="mailto:ricktijink@hotmail.com">Ricktijink@hotmail.com</a></p>
            <span>Telefoon:</span>
            <p>06 429 22 597</p>
            <span>Locatie:</span>
            <p>Nederland, Tilburg</p>
         </div>
         <span class="close-modal-button" id="close-modal">&times;</span>
      </div>
   </div>
   <!-- Container for website -->
   <div class="container">
      <!-- Sidebar (Change div to sidebar?) -->
      <div class="page-sidebar">
         <!-- Sidebar logo -->
         <div class="sidebar-logo">
            <div class="logo-icon">
               <a href="index.html"><img src="Images/Logo.png" alt="Personal Logo"></a>
            </div>
            <div class="logo-text">
               Rick Tijink<br/>
               <span>Front-end Developer</span>
            </div>
         </div>
         <!-- Sidebar content -->
         <div class="sidebar-content">
            <p>
               Hallo, mijn naam is Rick Tijink en ik ben een ICT & Media designer. Dat betekent dat ik me bezig houd met de grafische vormgeving van producten zoals websites, logos, posters en visitekaartjes. Tevens ontwikkel en beheer ik ICT-gerichte applicaties.
            </p>
            <div class="sidebar-links">
               <h3>Navigatie</h3>
               <nav>
                  <a href="index.html">PORTFOLIO</a>
                  <a href="#" class="active-page">MIJN CV</a>
               </nav>
            </div>
         </div>
         <!-- Sidebar footer -->
         <div class="sidebar-footer">
            <!-- Social Media -->
            <div class="footer-social">
                  <!-- Facebook -->
                  <div class="soc-icon">
                     <a href="https://www.facebook.com/rick.tijink" target="_blank"><img src="Images/Icons/mail.png" alt="Fb icon"></a>
                  </div>
                  <!-- LinkedIn -->
                  <div class="soc-icon">
                     <a href="https://www.linkedin.com/in/rick-tijink-53548828/" target="_blank"><img src="Images/Icons/in.png" alt="LinkedIn icon"></a>
                  </div>
                  <!-- Email -->
                  <div class="soc-icon">
                     <a href="mailto:ricktijink@hotmail.com"><img src="Images/Icons/mail.png" alt="Email icon"></a>
                  </div>
                  <!-- CV -->
                  <div class="soc-icon" id="open-modal">
                     <a href="#"><img src="Images/Icons/about.png" alt="CV icon"></a>
                  </div>
            </div>
            <!-- Holds copyright -->
            <div class="footer-copy">
               Online Portfolio, 2018.<br/>
               <span>Rick Tijink</span>
            </div>
         </div>
      </div>
      <!-- Content area -->
      <div class="page-content">
         <!-- Content top bar -->
         <div class="content-topbar">
            <!-- topbar title -->
            <div class="topbar-title">Mijn CV</div>
            <div class="filter-menu-button">
               <a href="#"><img src="Images/Icons/hire-me.png"></a>
               <span>Hire Me:</span>
            </div>
         </div>
         <!-- Masonry for items -->
         <div class="content-masonry">
            <div class="cv">
               <div class="cv-left">
						left
               </div><!-- End cv left -->
               <div class="cv-right">
						right

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
               </div><!-- End cv right -->
            </div>
            <a href="#"><img src="Images/Icons/up.png" onclick="topFunction()" id="myBtn" alt="Go top"></a>
         </div>
      </div>
   </div>
   <!-- Jquery -->
   <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
   <!-- Include js plugin -->
   <script src="owl-carousel/owl.carousel.js"></script>
   <!-- Main code file -->
   <script src="Js/javascript.js"></script>
</body>
</html>
