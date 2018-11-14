

$(document).ready(function() {
////////////////////////////// Fancybox Initialisation //////////////////////////////  
    $(".fancybox").fancybox();

////////////////////////////// View More & View Less (WEB)///////////////////////////

    $( "#view_more" ).click(function() {
        $( ".more_web" ).animate({
            height:'754px'}, 500,  
        function() {
            // Animation complete.
            $(".invis").css("display", "block"), 500;    
        });
    });
    $('#view_less').click(function(){
        $(".invis").css("display", "none"), 500;
        $('.more_web').animate({height: '514px'}, 150);
        //addclass font color active link
    });

//////////////////////////////// Settings ///////////////////////////////////////////

$('#settings').click(function(){
    $("#languages").css("display", "block"), 500;
    $('#languages').animate({height: '0px'}, 150);
    setTimeout(function() {$('#languages').fadeOut('fast'); }, 2500); 
});

$('#RSStoggle').click(function(){
    $("#RSS").css("display", "block"), 500;
    $('#RSS').animate({height: '800px'}, 150);
    setTimeout(function() {$('#RSS').fadeOut('fast'); }, 16000); 
});

//////////////////////////////// View More & View Less (Contact)/////////////////////

    $(".contactme" ).click(function() {
        $("#mailform" ).animate({
            height:'320px'}, 500,  
        function() {
            // Animation complete.
            $(".invis").css("display", "block"), 500;
            $(".contactop").css("display", "none"), 500;
            $(".contactclose").css("display", "block"), 500;
        });
    });
    
    $( ".closecontactme" ).click(function() {
        $( "#mailform" ).animate({
            height:'0px'}, 500,  
        function() {
            // Animation complete.
            $(".invis").css("display", "none"), 500;
            $(".contactop").css("display", "block"), 500;
            $(".contactclose").css("display", "none"), 500;
        });
    });

//////////////////////////////// FEATURED: Scrollbox/////////////////////////////////

    $(function () {
        $('#demo').scrollbox({
          direction: 'h', // vertical or horizontal
          distance: 236, // the distance between items
          delay: 3   // Delay after each scroll event (in seconds)
        });
        $('#demo-backward').click(function () {
            $('#demo').trigger('backward');
        });
        $('#demo-forward').click(function () {
            $('#demo').trigger('forward');
        });
    });
});

//////////////////////////////// Menu Navigation/////////////////////////////////////

$(document).ready(function(){
    // PROBLEEM LIGT HIER!!
    $('a').click(function(){
        if(this.className.indexOf('topbtn') >= 0){
            $('html, body').animate({scrollTop:0}, 'slow');
        return false;
        }
        var temp = this.id;
        var link = temp.replace('link_', '').toUpperCase();
        var goal = document.getElementById(link);
        $('html, body').animate({scrollTop:goal.offsetTop}, 'slow');
        return false;
    });          
});

//////////////////////////////// Website Filter//////////////////////////////////////

$(document).ready(function() {
    $("#web_filter").click(function(){ 
      $(".webs").animate({opacity: 1.0}, 800 );
      $(".mobs").animate({opacity: 0.1}, 800 );
      // setTimeout(function() {$('.mobs').animate({opacity: 1.0}, 8000 );});
    });
    $("#mweb_filter").click(function(){ 
      $(".webs").animate({opacity: 0.1}, 800 );
      $(".mobs").animate({opacity: 1.0}, 800 );
      // setTimeout(function() {$('.webs').animate({opacity: 1.0}, 8000 );});
    });
    $("#All").click(function(){ 
      $(".webs").animate({opacity: 1.0}, 800 );
      $(".mobs").animate({opacity: 1.0}, 800 );
    });

    // Logo Filter
    $("#icon_filter").click(function(){ 
      $(".icons").animate({opacity: 1.0}, 800 );
      $(".typo").animate({opacity: 0.1}, 800 );
    });
    $("#typo_filter").click(function(){ 
      $(".icons").animate({opacity: 0.1}, 800 );
      $(".typo").animate({opacity: 1.0}, 800 );
    });
    $("#All1").click(function(){ 
      $(".icons").animate({opacity: 1.0}, 800 );
      $(".typo").animate({opacity: 1.0}, 800 );
    });

    // Grafisch Filter
    $("#poster_filter").click(function(){ 
      $(".poster").animate({opacity: 1.0}, 800 );
      $(".visite").animate({opacity: 0.1}, 800 );
    });
    $("#visite_filter").click(function(){ 
      $(".poster").animate({opacity: 0.1}, 800 );
      $(".visite").animate({opacity: 1.0}, 800 );
    });
    $("#All2").click(function(){ 
      $(".poster").animate({opacity: 1.0}, 800 );
      $(".visite").animate({opacity: 1.0}, 800 );
    });
});

//////////////////////////////// Content Slider /////////////////////////////////////


//Animatie contentslider
$(document).ready(function() {
    $(".buttonA1").click(function(){
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverA').animate({left: '-710px'}, 300);
        $( ".buttonA1" ).addClass( "active" )
        $( ".buttonA2" ).removeClass( "active" )
        $( ".buttonA3" ).removeClass( "active" )
        return false;
    });
    $(".buttonA2").click(function(){ 
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverA').animate({left: '0px'}, 300);
        $( ".buttonA1" ).removeClass( "active" )
        $( ".buttonA2" ).addClass( "active" )
        $( ".buttonA3" ).removeClass( "active" )
        return false;
    });
    $(".buttonA3").click(function(){ 
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverA').animate({left: '-1420px'}, 300);
        $( ".buttonA1" ).removeClass( "active" )
        $( ".buttonA2" ).removeClass( "active" )
        $( ".buttonA3" ).addClass( "active" )
        return false;
    });
});

//Logo contentslider
$(document).ready(function() {
    $(".buttonL1").click(function(){
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverL').animate({left: '-710px'}, 300);
        $( ".buttonL1" ).addClass( "active" )
        $( ".buttonL2" ).removeClass( "active" )
        return false;
    });
    $(".buttonL2").click(function(){ 
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverL').animate({left: '0px'}, 300);
        $( ".buttonL1" ).removeClass( "active" )
        $( ".buttonL2" ).addClass( "active" )
        return false;
    });
});

//Website contentslider
$(document).ready(function() {
    $(".buttonW1").click(function(){
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverW').animate({left: '-710px'}, 300);
        $( ".buttonW1" ).addClass( "active" )
        $( ".buttonW2" ).removeClass( "active" )
        return false;
    });
    $(".buttonW2").click(function(){ 
        var target = this.parentNode.parentNode.parentNode.id;
        $('#'+target+'>.two-third>#myslide>.coverW').animate({left: '0px'}, 300);
        $( ".buttonW1" ).removeClass( "active" )
        $( ".buttonW2" ).addClass( "active" )
        return false;
    });
});