<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- Voor Zoekmachines om de site te vinden-->	
<meta name="description" content="MC2 Reintegratie - Fysiotherapie Afspraken"/>
<meta name="keywords" content="Psychologie, Fysiotherapie, Tilburg, MC2, MCtwee, Reintegratie, Re-integratie, Afspraken"/>
<meta name="author" content="Rick Tijink - ICT Media Design Student"/>
<meta name="robots" content="index, follow"/>
<meta name="revisit-after" content="3 month"/>        
    
  <!-- Jquery Library, CSS -->
  <link rel="stylesheet" type="text/css" href="CSS/FYSstyle.css"/>
	<script type="text/javascript" src="JS/jquery-1.4.3.min.js"></script>

	<!-- Custom Jquery Code -->
	<script type="text/javascript" src="JS/customjquery.js"></script>
	<script type="text/javascript" src="JS/Menu.js"></script>
	<script type="text/javascript" src="JS/jquery.easing.min.js"></script>

	<!--fancybox-->    
	<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css" media="screen" />
    
  <!-- Nivo Slider -->
  <script type="text/javascript" src="JS/jquery.nivo.slider.pack.js"></script>
	<link rel="stylesheet" href="CSS/default.css" type="text/css" media="screen" />
  <link rel="stylesheet" href="CSS/nivo-slider.css" type="text/css" media="screen" />
                        
 	<!-- Font Squirrel -->
  <link rel="stylesheet" href="CSS/deckerwebfont.css" type="text/css" charset="utf-8" />
    
  <title>MC² Reïntegratie - Fysiotherapie Werkwijze</title>

</head>
<body onload="MM_preloadImages('FYSimages/TabMC21.png','FYSimages/meer1.jpg','FYSimages/TabPSY1.png','FYSimages/TabContact1.png','FYSimages/facebook1.jpg','FYSimages/twitter1.png','FYSimages/linkedin1.png','FYSimages/TabAr1.png')">
    <div id="OuterWrapper">    
		    <div id="Header">
            <div id="TopBar">
                <div id="Logo">
                    <a href="index.php"><img src="FYSimages/Logo.png" width="175" height="106" title="MC2 Logo" alt="MC2 logo"/></a>
                </div>
              	<div id="Tabs">
                    <a href="index.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('TabMC2','','FYSimages/TabMC21.png',1)"><img src="FYSimages/TabMC20.png" alt="Tab MC2 " name="TabMC2" width="129" height="72" border="0" id="TabMC2" /></a>&nbsp;<a href="ReWerknemer.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('TabReintegratie','','FYSimages/TabAr1.png',1)"><img src="FYSimages/TabAr0.png" alt="Tab Reintegratie" name="TabReintegratie" width="129" height="72" border="0" id="TabReintegratie" /></a>&nbsp;<a href="Psychologie.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('TabPsychologie','','FYSimages/TabPSY1.png',1)"><img src="FYSimages/TabPSY0.png" alt="Tab Psychologie" name="TabPsychologie" width="129" height="72" border="0" id="TabPsychologie" /></a>&nbsp;<img src="FYSimages/TabFYS1.png" width="129" height="72" alt="Tab Fysiotherapie" />&nbsp;<a href="Contact.php" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('TabContact','','FYSimages/TabContact1.png',1)"><img src="FYSimages/TabContact0.png" alt="Tab Contact" name="TabContact" width="129" height="72" border="0" id="TabContact" /></a>
              	</div>
            </div> 			
            <div class="slider-wrapper theme-default">
                <div id="slider" class="nivoSlider">
                    <img src="FYSimages/sliderimg3.jpg" alt="img3" />
                    <img src="FYSimages/sliderimg2.jpg" alt="img2" />
                    <img src="FYSimages/sliderimg4.jpg" alt="img4" />
                </div>
            </div>   
            <div id="Navigation">
         		    <ul>
                    <li><a href="Fysiotherapie.php" id="fys1">Fysiotherapie</a></li>
                  	<li><a href="FYSklachtenbeeld.php" id="fys2">Klachtbeeld</a></li>
                  	<li><a href="#" class="highlight" id="fys3">Werkwijze</a></li>
                    <li><a href="Diensten.php" id="fys4">MultiDisciplinair Programma</a></li>                        
               	</ul>
            </div>
        </div> <!-- END Header -->
        <div id="InnerWrapper">
            <div id="Content">
                <div class="ColumnOneThird floatleft marginright">
                    <div id="navilinkstext" class="editable">
                        <hr>
                        <a id="Keuze1" class="option optionhighlight" name="Keuze1">Werkwijze</a>
                        <hr>
                        <a id="Keuze2" class="option" name="Keuze2">Verhindering</a>
                        <hr>
                        <a id="Keuze3" class="option" name="Keuze3">Zorgverzekering / Betaling</a>
                        <hr>
                        <a id="Keuze4" class="option" name="Keuze4">Overig</a>
                        <hr>
                    </div>
           	  	</div>  
           	  	<div class="ColumnTwoThird floatleft">
           			    <div id="Inhoud1">
                		    <div id="fysafspraak1" class="editable">
                            <h2>Werkwijze</h2>
                            <p><br> • Voor het maken van een afspraak kun je het secretariaat bellen of mailen. Hiervoor heb je niet noodzakelijk een verwijzing nodig vanuit je (huis-)arts. Na het maken van de afspraak ontvang je per mail een afspraakbevestiging met een aanmeldformulier.<br> <br> • Binnen MC² wordt geen wachtlijst gehanteerd. Op dit moment zijn er geen wachttijden en is een intake bij de fysiotherapeut binnen 3 werkdagen mogelijk. Bij drukte binnen de praktijk word je geïnformeerd over de mogelijkheden.<br> <br> • Wanneer je in behandeling bent bij Martin van Ansem, fysiotherapeut, gelden de regels met betrekking tot vergoeding vanuit de zorgverzekering voor fysiotherapie. Dit betreft een aanvullende verzekering. Niet iedereen is verzekerd voor fysiotherapie. Voor voorwaarden en informatie over onder andere het eigen risico, het aantal te vergoeden behandelingen en (meer-)kosten dien je de polisvoorwaarden van je zorgverzekeraar te raadplegen. Een behandeling fysiotherapie duurt 30 minuten.<br> <br> • Wanneer je in behandeling bent bij Marco van Hooff of Lisette Wardekker (psychologen) én Martin van Ansem geldt dat zowel psychologie als fysiotherapie apart bij de zorgverzekeraar wordt gedeclareerd. Een combi-sessie met 2 therapeuten duurt 45 minuten.<br> <br> • Wanneer je niet tijdig op een afspraak komt, zullen bovenstaande tijden moeten worden ingekort met de tijd die je afwezig bent. Als deze tijd niet toereikend is, kan in overleg, worden bepaald of er een nieuwe afspraak wordt gemaakt (waarbij de eerste afspraak wel belast dient te worden).</p>
                        </div>	                           
                    </div>
                    <div id="Inhoud2">
                  	    <div id="fysafspraak2" class="editable">
                            <h2>Verhindering</h2>
                            <p><br> • Bij verhindering dienen afspraken 24 uur van tevoren geannuleerd te worden. Afspraken welke niet of te laat geannuleerd worden, zullen bij je in rekening worden gebracht.<br> <br> • Indien je niet aanwezig kunt zijn wegens ziekte, dien je dit voor 9:00 uur op de betreffende dag te melden bij ons secretariaat. Je kunt daarvoor ook de voicemail inspreken. Mocht de melding na 9:00 uur geschieden, wordt deze gekenmerkt als een te laat geannuleerde afspraak en alsnog gefactureerd.</p>
                        </div>
                    </div>
                    <div id="Inhoud3">
                        <div id="fysafspraak3" class="editable">
                            <h2>Zorgverzekering / Betaling</h2>
                            <p><br> • MC² heeft met nagenoeg alle zorgverzekeraars een contract. Declareren gaat rechtstreeks bij de betreffende zorgverzekeraar.<br> <br> • MC² stelt dat iedere cliënt verantwoordelijk is voor het in de gaten houden van zijn/haar aantal te vergoeden behandelingen per jaar per therapie. Wanneer achteraf blijkt dat je niet (langer) verzekerd bent voor een sessie zal deze alsnog bij je in rekening gebracht worden. Er kunnen dus (meer-)kosten ontstaan voor de therapie. Je bent zelf verantwoordelijk om wijzigingen (in je zorgverzekering) aan MC² door te geven.<br> <br> • Voor cliënten met een restitutiepolis en voor cliënten die niet of onvoldoende (aanvullend) verzekerd zijn, zijn praktijktarieven opgesteld. Deze liggen in de wachtruimte en zijn op te vragen bij het secretariaat MC².<br><br></p>
                        </div>                            
                    </div>
                    <div id="Inhoud4"> 
              	  	    <div id="fysafspraak4" class="editable">
                            <h2>Overig</h2>
                            <p><br> • Vertrouwelijkheid en privacy is binnen MC² gewaarborgd. Details hieromtrent zijn vastgelegd in ons privacyreglement, op te vragen bij ons secretariaat. Evenzo zijn opvraagbaar: het klachtenreglement en het waarnemingsreglement van MC².<br> <br> • Dossiers worden volgens de regels van de beroepsethiek bewaard in onze praktijk voor maximaal 10 jaar. Daarna worden de documenten volgens diezelfde regels vernietigd.<br><br>• MC² is continue bezig met de waarborging van haar kwaliteit. Hierbij heeft MC² een certificeringstraject voor de NEN-norm Zorg en Welzijn doorlopen en zijn wij in mei 2014 gecertificeerd. Dit houdt in dat alle informatie binnen MC² gecontroleerd kan worden door auditeurs. Specifiek kan dit voor jou betekenen dat je cliëntendossier ingezien kan worden door de auditeur van de NEN-norm. Wanneer je er bezwaar tegen hebt dat deze jouw dossier kan inzien, kun je dit specifiek vermelden bij het secretariaat.</p>
                        </div>
                    </div>                         
              	</div>
                <div class="break"></div>
        	  </div> <!-- End Content -->
      	</div> <!-- End InnerWrapper -->    
        <div id="Footer">
            <?php include('Includes/inc_footer.php'); ?>
        </div> <!-- End Footer -->
    </div> <!-- End OuterWrapper -->           
</body>
</html>

