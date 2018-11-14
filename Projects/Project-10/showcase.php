<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- Search Engine Optimalisation -->
<meta name="description" content="Rick Tijink Online Portfolio"/>
<meta name="keywords" content="Design, Media, Portfolio, Rick Tijink, Logo, Website, Tilburg"/>
<meta name="author" content="Rick Tijink - ICT Media Design Student"/>
<meta name="robots" content="index, follow"/>
<meta name="revisit-after" content="3 month"/>

<!-- CSS, Jquery Library -->
<link rel="stylesheet" type="text/css" href="CSS/portfolio.css"/>
<script type="text/javascript" src="JS/jquery-1.11.1.min.js"></script>

<!-- Fancybox -->   
<link rel="stylesheet" href="Fancybox/jquery.fancybox.css" type="text/css" media="screen"/>
<script type="text/javascript" src="Fancybox/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="JS/customJS.js"></script>

<!-- ScrollBox -->   
<script type="text/javascript" src="JS/jquery.scrollbox.js"></script>    

<!-- Google Analytics -->   
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-31737971-1', 'auto');
  ga('send', 'pageview');
</script>

<title>Rick Tijink - Online Portfolio</title>

</head>
	<body>
        <!-- Language Switcher -->   
        <?php require_once('Languages/lanSwitcher.php'); ?>
        <div id="whitewrapper">
            <div id="sitewrapper">
                <div id="settings"><img src="Images/settings.png" width="30" height="28" alt="settings"/></div>
                <div id="languages">
                    <a href=""><img src="Images/nl.png" alt="nl" width="32" height="32"/></a>
                    <a href=""><img src="Images/eng.png" alt="eng" width="32" height="32"/></a>
                </div>
                <!-- Logo --> 
                <div id="logo">
                    <a href="index.php"><img class="logomobsize" src="Images/logov1.png" alt="portfolio_logo"/></a>
                </div>
                <!-- Content Wrapper --> 
    		    <div id="contentwrapper">
<!--                     <div class="about_box" id="ABOUT">
                        <div class="introblock">
                            <p class="Text Textintro"><?php echo MY_INTRO; ?></p>
                        </div>
                    </div> --><br/><br/>
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
                        // } else {
                        //     include $pages_dir.'/mctwee.php'; 
                        }
                    ?>  
                    <!--<?php //require_once('Pages/bvd.php'); ?> -->
                </div>
                <!-- Footer --> 
                <div id="footer">
                    <div class="footerblock" id="CONTACT">
                        <img src="Images/headers/header_contact.png" width="124" height="31" alt="contact header"/>
                        <p class="Text Textstyle"><?php echo CONTACT_ME; ?></p>
                        <div class="contactme contactbutton contactop">Contact me!</div>
                        <div class="closecontactme contactbutton contactclose">Close</div>
                        <!-- Contact form -->
                        <div id="mailform">
                            <span class="invis">
                                <form id="contact_form" action="#!" method="post">
                                    <label for="name">Your name:</label><br />
                                    <input id="name" class="input" name="name" type="text" value="" size="30" /><br/><br/>
                                    <label for="email">Your email:</label><br />
                                    <input id="email" class="input" name="email" type="text" value="" size="30" /><br/><br/>
                                    <label for="message">Your message:</label><br />
                                    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br/><br/>
                                    <input id="submit_button" type="submit" value="Send email" />
                                </form> 
                            </span>
                        </div>
                        <!-- Social Media Bar -->
                        <div id="s_mediabar">
                            <div class="mediablock fblockmarginR"><a href="https://www.facebook.com/rick.tijink" target="_blank"><img src="Images/socialF.png" alt="Facebook"/></a></div>
                            <div class="mediablock fblockmarginR"><a class="fancybox" href="Images/OnlineCV.png"><img src="Images/CV.png" alt="CV"/></a></div>
                            <div class="mediablock"><a href="http://nl.linkedin.com/pub/rick-tijink/28/488/535/" target="_blank"><img src="Images/socialIn.png" alt="LinkedIn"/></a></div>
                            <div class="mediablock"><a class="contactme" id="link_contact" href="#!"><img src="Images/socialContact.png" alt="Contact"/></a></div>
                        </div>    
                    </div>
                    <div class="break"></div>
                    <!-- Copyright --> 
                    <div id="copyright">
                        <p>&copy; <?php echo COPYRIGHT; ?></p>
                    </div>
                </div>
            </div>
        </div>
	</body>
</html>