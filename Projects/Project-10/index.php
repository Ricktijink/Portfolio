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
                <div id="RSStoggle"><img src="Images/info.png" width="30" height="28" alt="rsstoggle"/></div>
                <div id="languages">
                    <a href="?lan=nl"><img src="Images/nl.png" alt="nl" width="32" height="32"/></a>
                    <a href="?lan=eng"><img src="Images/eng.png" alt="eng" width="32" height="32"/></a>
                </div>
                <!-- Logo --> 
                <div id="logo">
                    <img class="logomobsize" src="Images/logov1.png" alt="portfolio_logo"/>
                </div>
                <!-- Content Wrapper --> 
    		    <div id="contentwrapper">
                    <div class="about_box" id="ABOUT">
                        <div class="introblock">
                            <p class="Text Textintro"><?php echo MY_INTRO; ?></p>
                        </div>
                    </div>
                    <!-- Featured --> 
                    <div class="feature_box" id="FEATURED">
                        <div class="Featuredbox">
                            <div id="featuredtext" class="fontMenu">Featured Designs</div>
                        </div>
                        <div id="demo" class="scroll-img">
                            <ul>
                                <li><a class="fancybox" rel="Featured" href="Images/animatie/animatie1.png"><img alt="Feature6" src="Images/animatie/animatie1.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/logo/biglogo11.png"><img alt="Feature5" src="Images/logo/logo11.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/graphics/biggraphic7.png"><img alt="Feature1" src="Images/graphics/graphic7.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/logo/biglogo9.png"><img alt="Feature2" src="Images/logo/logo9.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/website/bigweb4.png"><img alt="Feature3" src="Images/website/web4.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/logo/biglogo2.png"><img alt="Feature4" src="Images/logo/logo2.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/animatie/animatiebig3.png"><img alt="Feature8" src="Images/animatie/animatie3.png"/></a></li>
                                <li><a class="fancybox" rel="Featured" href="Images/graphics/biggraphic8.png"><img alt="Feature7" src="Images/graphics/graphic8.png"/></a></li>
                            </ul>
                        <div class="break"></div>
                        </div>  
                        <div id="demo-btn">
                            <div id="demo-backward" class="btnstyle mrgn-right"><img src="Images/left.png" width="20" height="20" alt="leftbtn"/></div>
                            <div id="demo-forward" class="btnstyle"><img src="Images/right.png" width="20" height="20" alt="rightbtn"/></div>
                        </div>
                    </div>
                    <!-- Navigation --> 
                    <div id="navigation">
                        <ul>
                            <li><a class="FontMenu" href="#WEBDESIGN" id="link_webdesign">Webdesign</a></li>
                            <li class="navblock"></li>    
                            <li><a class="FontMenu" href="#LOGO" id="link_logo">Logo</a></li>
                            <li class="navblock"></li> 
                            <li><a class="FontMenu" href="#GRAPHICS" id="link_graphics">Graphics</a></li>
                            <li class="navblock"></li> 
                            <li><a class="FontMenu" href="#DRIED" id="link_DRIED">3D Models</a></li>
                            <li class="navblock"></li> 
                            <li><a class="FontMenu" href="#ANIMATIE" id="link_animatie">Animatie</a></li>
                        </ul>
                    </div>
                    <!-- Website Area --> 
                    <div class="content_box more_web" id="WEBDESIGN">
                        <div class="one-third">
                            <img src="Images/headers/header_website.png" width="148" height="39" alt="webdesign header"/>
                            <p class="Text Textstyle"><?php echo WEB_INTRO; ?></p>  
                            <p class="Text Textstyle"><?php echo WEB_CONTENT; ?></p>
                            <p class="Text myFontClass3"><?php echo WEB_LIST; ?></p>
                        </div>
                        <div class="two-third">
                            <div id="myslide">
                                <div class="coverW">
                                    <div id="slide1" class="mystuff">
                                        <div class="imageBlock blockRmargin"><a class="image webs" href="showcase.php?p=mctwee"><span class="rollover"></span><img alt="web1" src="Images/website/web1.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image mobs" href="showcase.php?p=bvd"><span class="rollover"></span><img alt="web2" src="Images/website/web2.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image webs" href="showcase.php?p=booklet"><span class="rollover"></span><img alt="web3" src="Images/website/web3.png"/></a></div>
                        
                                        <div class="imageBlock blockRmargin"><a class="image mobs" href="showcase.php?p=portfolio"><span class="rollover"></span><img alt="web4" src="Images/website/web4.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image webs" href="showcase.php?p=bucketlife"><span class="rollover"></span><img alt="web5" src="Images/website/web5.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image mobs" href="showcase.php?p=corporate"><span class="rollover"></span><img alt="web6" src="Images/website/web6.png"/></a></div>
                                    </div>
                                    <div id="slide2" class="mystuff">
                                        <div class="imageBlock blockRmargin"><a class="image icons" href="showcase.php?p=johansipers"><span class="rollover"></span><img alt="web7" src="Images/website/web7.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=indicium"><span class="rollover"></span><img alt="web8" src="Images/website/web8.png"/></a></div>
                                    </div> 
                                </div> <!-- end of div cover -->
                            </div>  <!-- end of div myslide -->
                            <div class="slidebutton">
                                <p  class="buttonW1 x">2</p>
                                <p  class="buttonW2 active x">1</p>
                            </div> <!-- end of div button-->
                        </div>
                        <div class="break"></div>
                    </div>
                    <!-- Arrow to Top --> 
                    <div class="anchor">
                        <div class="anchorarrow">
                            <a href="#TOP" class="topbtn"><img src="Images/anchorarrow.png" width="20" height="20" alt="anchorarrow2"/></a>
                        </div>
                    </div>
                    <!-- Logo Area --> 
                    <div class="content_box more_logo" id="LOGO">
                        <div class="one-third">
                            <img src="Images/headers/header_logo.png" width="148" height="39" alt="logo header"/>
                            <p class="Text Textstyle"><?php echo LOGO_INTRO; ?></p>  
                            <p class="Text Textstyle"><?php echo LOGO_CONTENT; ?></p>
                            <p class="Text myFontClass3"><?php echo LOGO_LIST; ?></p>
                        </div>
                        <div class="two-third">
                            <div id="myslide">
                                <div class="coverL">
                                    <div id="slide1" class="mystuff">
                                        <div class="imageBlock blockRmargin"><a class="image icons" href="showcase.php?p=feedback"><span class="rollover"></span><img alt="logo1" src="Images/logo/logo1.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image icons" href="showcase.php?p=easycard"><span class="rollover"></span><img alt="logo2" src="Images/logo/logo2.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image typo" href="showcase.php?p=thecompany"><span class="rollover"></span><img alt="logo9" src="Images/logo/logo9.png"/></a></div>
                                        
                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=touch"><span class="rollover"></span><img alt="logo4" src="Images/logo/logo4.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=spacebunny"><span class="rollover"></span><img alt="logo6" src="Images/logo/logo6.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image icons" href="showcase.php?p=mc2logo"><span class="rollover"></span><img alt="logo3" src="Images/logo/logo3.png"/></a></div>  
                                    </div>
                                    <div id="slide2" class="mystuff">
                                        <div class="imageBlock blockRmargin"><a class="image icons" href="showcase.php?p=roadhouse"><span class="rollover"></span><img alt="logo8" src="Images/logo/logo8.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=3angle"><span class="rollover"></span><img alt="logo7" src="Images/logo/logo7.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image icons" href="showcase.php?p=life"><span class="rollover"></span><img alt="logo5" src="Images/logo/logo5.png"/></a></div>

                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=personallogo"><span class="rollover"></span><img alt="logo10" src="Images/logo/logo10.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image typo" href="showcase.php?p=sunnyweathers"><span class="rollover"></span><img alt="logo11" src="Images/logo/logo11.png"/></a></div>
                                    </div> 
                                </div> <!-- end of div cover -->
                            </div>  <!-- end of div myslide -->
                            <div class="slidebutton">
                                <p  class="buttonL1 x">2</p>
                                <p  class="buttonL2 x active">1</p>
                            </div> <!-- end of div button-->
                        </div>
                        <div class="break"></div>
                    </div>
                    <!-- Arrow to Top --> 
                    <div class="anchor">
                        <div class="anchorarrow">
                            <a href="#TOP" class="topbtn"><img src="Images/anchorarrow.png" width="20" height="20" alt="anchorarrow2"/></a>
                        </div>
                    </div>
                    <!-- Graphic Area --> 
                    <div class="content_box" id="GRAPHICS">
                        <div class="one-third">
                            <img src="Images/headers/header_graphic.png" width="148" height="39" alt="graphic header"/>
                            <p class="Text Textstyle"><?php echo GRAPH_INTRO; ?></p>  
                            <p class="Text Textstyle"><?php echo GRAPH_CONTENT; ?></p>
                            <p class="Text myFontClass3"><?php echo GRAPH_LIST; ?></p>
                        </div>
                        <div class="two-third">
                            <div class="imageBlock blockRmargin"><a class="image poster" href="showcase.php?p=landscape"><span class="rollover"></span><img alt="vector1" src="Images/graphics/graphic4.png"/></a></div>
                            <div class="imageBlock blockRmargin"><a class="image visite" href="showcase.php?p=feedback1"><span class="rollover"></span><img alt="brand1" src="Images/graphics/graphic1.png"/></a></div>
                            <div class="imageBlock blockBmargin"><a class="image poster" href="showcase.php?p=waterguy"><span class="rollover"></span><img alt="vector3" src="Images/graphics/graphic7.png"/></a></div>
                            
                            <div class="imageBlock blockRmargin"><a class="image poster" href="showcase.php?p=elephant"><span class="rollover"></span><img alt="vector8" src="Images/graphics/graphic8.png"/></a></div>
                            <div class="imageBlock blockRmargin"><a class="image poster" href="showcase.php?p=bird"><span class="rollover"></span><img alt="vector5" src="Images/graphics/graphic5.png"/></a></div>
                            <div class="imageBlock"><a class="image visite" href="showcase.php?p=mc21"><span class="rollover"></span><img alt="brand2" src="Images/graphics/graphic2.png"/></a></div>
                        </div>
                        <div class="break"></div>
                    </div>
                    <!-- Arrow to Top --> 
                    <div class="anchor">
                        <div class="anchorarrow">
                            <a href="#TOP" class="topbtn"><img src="Images/anchorarrow.png" width="20" height="20" alt="anchorarrow3"/></a>
                        </div>
                    </div>
                    <!-- 3D Area --> 
                    <div class="content_box" id="DRIED">
                        <div class="one-third">
                            <img src="Images/headers/header_3d.png" width="148" height="39" alt="3d header"/>
                            <p class="Text Textstyle"><?php echo drieD_INTRO; ?></p>  
                            <p class="Text Textstyle"><?php echo drieD_CONTENT; ?></p>
                        </div>
                        <div class="two-third">
                            <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=church"><span class="rollover"></span><img alt="3d_1" src="Images/3d/3d_1.png"/></a></div>
                            <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=floatingisland"><span class="rollover"></span><img alt="3d_7" src="Images/3d/3d_7.png"/></a></div>
                            <div class="imageBlock blockBmargin"><a class="image" href="showcase.php?p=apartment"><span class="rollover"></span><img alt="3d_3" src="Images/3d/3d_3.png"/></a></div>

                            <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=rollcat"><span class="rollover"></span><img alt="3d_4" src="Images/3d/3d_4.png"/></a></div>
                            <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=windmill"><span class="rollover"></span><img alt="3d_2" src="Images/3d/3d_2.png"/></a></div>
                            <div class="imageBlock"><a class="image" href="showcase.php?p=cellphone"><span class="rollover"></span><img alt="3d_6" src="Images/3d/3d_6.png"/></a></div>
                        </div>
                        <div class="break"></div>
                    </div>
                    <!-- Arrow to Top --> 
                    <div class="anchor">
                        <div class="anchorarrow">
                            <a href="#TOP" class="topbtn"><img src="Images/anchorarrow.png" width="20" height="20" alt="anchorarrow4"/></a>
                        </div>
                    </div>
                    <!-- Animatie Area -->
                    <div class="content_box" id="ANIMATIE">
                        <div class="one-third">
                            <img src="Images/headers/header_animatie.png" width="180" height="39" alt="animatie header"/>
                            <p class="Text Textstyle"><?php echo drieD_INTRO; ?></p>  
                            <p class="Text Textstyle"><?php echo drieD_CONTENT; ?></p>
                        </div>
                        <div class="two-third">
                            <div id="smallslide">
                                <!-- <div class="coverA"> -->
                                    <div id="slide1" class="mystuff">
                                        <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=animatie"><span class="rollover"></span><img alt="animatie_1" src="Images/animatie/animatie1.png"/></a></div>
                                        <div class="imageBlock blockRmargin"><a class="image" href="showcase.php?p=limbo"><span class="rollover"></span><img alt="animatie_2" src="Images/animatie/animatie2.png"/></a></div>
                                        <div class="imageBlock blockBmargin"><a class="image" href="showcase.php?p=planet"><span class="rollover"></span><img alt="animatie_3" src="Images/animatie/animatie3.png"/></a></div>
                                    </div>
                                <!-- </div>  -->
                            </div>  
                        </div>
                        <div class="break"></div>
                    </div>
                    <div class="anchor">
                        <div class="anchorarrow">
                            <a href="#TOP" class="topbtn"><img src="Images/anchorarrow.png" width="20" height="20" alt="anchorarrow4"/></a>
                        </div>
                    </div>
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
                <span id="RSStext">Recent Updates:</span> <br/><br/>
                <div id="RSS">
                 <?php
                        function getFeed($url){
                            $x = simplexml_load_file($url);
                            
                            foreach ($x->channel->item as $key => $entry) {
                                    echo "<span class='RSShead'>$entry->title</span> <br/>"; 
                                    echo "<span class='RSSdes'>$entry->description</span> <br/>";
                                    echo "<span $entry->image</span> <br/>";
                                    // var_dump($entry->image[0][0][0]);
                                    // echo "<img src='rssimage.jpg'";
                                    echo "<span class='RSSlink'>$entry->link</span> <br/>";
                                    echo "<span class='RSSdate'>$entry->date</span> <br/>"; 
                                    echo "<br/><hr/><br/>";
                                }    
                        }
                        echo getFeed("info.rss");
                    ?> 
                </div>
            </div>
        </div>
	</body>
</html>