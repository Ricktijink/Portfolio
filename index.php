<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <!-- Stylesheet -->
      <link rel="stylesheet" type="text/css" href="Css/style.css">
      <!-- Google fonts -->
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway" rel="stylesheet">

      <title>Rick Tijink - Portfolio</title>
</head>

<body>
      <!-- Overlay Navigation -->
      <nav id="overlay">
            <!-- Close overlay BTN -->
            <a href="#" id="close-menu">Close X</a>
            <!-- Navigation Links -->
            <div class="overlaymenu">
                  <a href="#" class="menu-link active-page" id="menuItem1">PORTFOLIO</a>
                  <a href="skills.php" class="menu-link" id="menuItem2">SKILLS</a>
                  <a href="cv.html" class="menu-link" id="menuItem3">MIJN CV</a>
            </div>
      </nav>
      <!-- Mobile Navigation BTN -->
      <a href="#" id="open-menu-mobile" class="mobile-menu"><img src="Images/Icons/menu.png"></a>
      <!-- Businesscard Modal -->
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
                        <p class="modal-mail"><a href="mailto:ricktijink@hotmail.com">Ricktijink@hotmail.com</a></p>
                        <span>Telefoon:</span>
                        <p class="modal-phone">06 429 22 597</p>
                        <span>Locatie:</span>
                        <p class="modal-location">Nederland, Tilburg</p>
                  </div>
                  <span class="close-modal-button" id="close-modal">&times;</span>
            </div>
      </div>
      <!-- Container -->
      <div class="container">
            <!-- Sidebar -->
            <div class="page-sidebar">
                  <!-- Sidebar - Logo -->
                  <div class="sidebar-logo">
                        <div class="logo-icon">
                              <a href="index.php"><img src="Images/Logo.png" alt="Personal Logo"></a>
                        </div>
                        <div class="logo-text">
                              Rick Tijink<br />
                              <span>Front-end Developer</span>
                        </div>
                  </div>
                  <!-- Sidebar - Content -->
                  <div class="sidebar-content">
                        <p>
                        Afgestudeerd van de HBO opleiding ICT &amp; Media design en
                              beschikbaar als (Junior) Front End Developer.
                        </p>
                  </div>
                  <!-- Sidebar - Footer -->
                  <div class="sidebar-footer">
                        <div class="footer-social">
                              <!-- Facebook -->
                              <div class="soc-icon" id="soc-1">
                                    <a href="https://www.facebook.com/rick.tijink" target="_blank"><img src="Images/Icons/fb.png" alt="Fb icon"></a>
                              </div>
                              <!-- LinkedIn -->
                              <div class="soc-icon" id="soc-2">
                                    <a href="https://www.linkedin.com/in/rick-tijink-53548828/" target="_blank"><img src="Images/Icons/in.png" alt="LinkedIn icon"></a>
                              </div>
                              <!-- Email -->
                              <div class="soc-icon" id="soc-3">
                                    <a href="mailto:ricktijink@hotmail.com"><img src="Images/Icons/mail.png" alt="Email icon"></a>
                              </div>
                              <!-- BusinessCard -->
                              <div class="soc-icon" id="open-modal">
                                    <a href="#"><img src="Images/Icons/about.png" alt="Business card icon"></a>
                              </div>
                        </div>
                        <!-- Copyright -->
                        <div class="footer-copy">
                              Online Portfolio, 2018.<br />
                              <span>Rick Tijink</span>
                        </div>
                  </div>
            </div>
            <!-- Main Content -->
            <div class="page-content">
                  <!-- Topbar -->
                  <div class="content-topbar">
                        <div class="topbar-title">Portfolio</div>
                        <!-- Topbar buttons -->
                        <div class="menu-buttons">
                              <a href="#" id="open-menu"><img src="Images/Icons/menu.png"></a>
                              <a href="#" id="filter-menu-button"><img src="Images/Icons/filter.png"></a>
                        </div>
                  </div>
                  <!-- Masonry for portfolio items -->
                  <div class="content-masonry">
                        <!-- Filter -->
                        <div class="filter-menu">
                              <span class="close-filter-button">Close<span id="small-x"> &times;</span></span>
                              <ul>
                                    <!-- Filter options -->
                                    <li class="option" data-filter="all"><a href="#" class="active-filter">All</a></li>
                                    <li class="option" data-filter="html"><a href="#">HTML5</a></li>
                                    <li class="option" data-filter="css"><a href="#">CSS3</a></li>
                                    <li class="option" data-filter="php"><a href="#">PHP</a></li>
                                    <li class="option" data-filter="js"><a href="#">Javascript</a></li>
                                    <li class="option" data-filter="ang"><a href="#">Angular</a></li>
                                    <li class="option" data-filter="react"><a href="#">React</a></li>
                                    <li class="clearfix"></li>
                              </ul>
                        </div>
                        <!-- Projects (portfolio items) Include for readability -->
                        <main>
                              <?php include 'inc_projects.php';?>
                              <div class="clearfix"></div>
                        </main>
                        <!-- Go to top BTN -->
                        <a href="#"><img src="Images/Icons/up.png" onclick="topFunction()" id="myBtn" alt="Go top"></a>
                  </div>
            </div>
      </div>
      <!-- Jquery -->
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
      <!-- Include custom javascript -->
      <script src="Js/javascript.js"></script>
</body>

</html>