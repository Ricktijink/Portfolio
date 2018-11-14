

if($(window).width() >= 441){

// #1 - Home Overlay Animatie
    $(document).ready(function (){
        $( "#home-button" ).click(function() {
            $( "#home-overlay" ).animate({
                top: '-95vh'},300);
            $( "#testtt" ).css({
                display: 'block'},100);
        });
    });


$(document).ready(function (){
        $( "#menu" ).click(function() {
            $( "#home-overlay" ).animate({
                top: '0vh'},300);



        $( "#slide-1" ).delay( 400 ).animate({
            left: '0vw'},100);
        $( "#slide-2" ).delay( 400 ).animate({
            left: '0vw'},100);
        $( "#slide-3" ).delay( 400 ).animate({
            right: '0vw'},100);
        $( "#slide-4" ).delay( 400 ).animate({
            right: '0vw'},100);

        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '1'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '0'},200);

        });
    });


// Home Showcase Product
$(document).ready(function (){
    $( "#web1" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb1" ).show();
    });
    $( "#web2" ).click(function() {        
        $( ".big" ).hide();
        $( "#bweb2" ).show();
    });
    $( "#web3" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb3" ).show();
    });
    $( "#web4" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb4" ).show();
    });
    $( "#web5" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb5" ).show();
    });
    $( "#web6" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb6" ).show();
    });
    $( "#web7" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb7" ).show();
    });
    $( "#web8" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb8" ).show();
    });
});

// Home Showcase Product
$(document).ready(function (){
    $( "#logo1" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo1" ).show();
    });
    $( "#logo2" ).click(function() {        
        $( ".big" ).hide();
        $( "#blogo2" ).show();
    });
    $( "#logo3" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo3" ).show();
    });
    $( "#logo4" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo4" ).show();
    });
    $( "#logo5" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo5" ).show();
    });
    $( "#logo6" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo6" ).show();
    });
    $( "#logo7" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo7" ).show();
    });
    $( "#logo8" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo8" ).show();
    });
});

// Home Showcase Product
$(document).ready(function (){
    $( "#ill1" ).click(function() {
        $( ".big" ).hide();
        $( "#bill1" ).show();
    });
    $( "#ill2" ).click(function() {        
        $( ".big" ).hide();
        $( "#bill2" ).show();
    });
    $( "#ill3" ).click(function() {
        $( ".big" ).hide();
        $( "#bill3" ).show();
    });
    $( "#ill4" ).click(function() {
        $( ".big" ).hide();
        $( "#bill4" ).show();
    });
    $( "#ill5" ).click(function() {
        $( ".big" ).hide();
        $( "#bill5" ).show();
    });
    $( "#ill6" ).click(function() {
        $( ".big" ).hide();
        $( "#bill6" ).show();
    });
    $( "#ill7" ).click(function() {
        $( ".big" ).hide();
        $( "#bill7" ).show();
    });
    $( "#ill8" ).click(function() {
        $( ".big" ).hide();
        $( "#bill8" ).show();
    });
});

// Home Showcase Product
$(document).ready(function (){
    $( ".tile" ).click(function() {
        $("#showcase-product").show();
        $( "#showcase-product" ).animate({
            bottom: '-0vh'},300);
    });
    $( "#close-showcase" ).click(function() {
        $( "#showcase-product" ).animate({
            bottom: '-95vh'},200).hide(200);
    });
    $( ".close-showcase-btn" ).click(function() {
        $( "#showcase-product" ).animate({
            bottom: '-95vh'},200).hide(200);
    });
});

// Open Up Animatie - SLIDE 1
$(document).ready(function (){
    $( "#slide-1" ).click(function() {
        $( "#slide-1" ).delay( 500 ).animate({
            left: '-25vw'},500);
        $( "#slide-2" ).animate({
            left: '-50vw'},500);
        $( "#slide-3" ).animate({
            right: '-50vw'},500);
        $( "#slide-4" ).delay( 500 ).animate({
            right: '-25vw'},500);
        
        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '0'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '1'},200);
        
        $("#web-wrapper").css("display", "block");
        $("#logo-wrapper").css("display", "none");
        $("#illus-wrapper").css("display", "none");
        $("#ani-wrapper").css("display", "none");
    });
    $( "#slide-2" ).click(function() {
        $( "#slide-1" ).delay( 500 ).animate({
            left: '-25vw'},500);
        $( "#slide-2" ).animate({
            left: '-50vw'},500);
        $( "#slide-3" ).animate({
            right: '-50vw'},500);
        $( "#slide-4" ).delay( 500 ).animate({
            right: '-25vw'},500);
        
        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '0'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '1'},200);
        
        $("#web-wrapper").css("display", "none");
        $("#logo-wrapper").css("display", "block");
        $("#illus-wrapper").css("display", "none");
        $("#ani-wrapper").css("display", "none");
    });
    $( "#slide-3" ).click(function() {
        $( "#slide-1" ).delay( 500 ).animate({
            left: '-25vw'},500);
        $( "#slide-2" ).animate({
            left: '-50vw'},500);
        $( "#slide-3" ).animate({
            right: '-50vw'},500);
        $( "#slide-4" ).delay( 500 ).animate({
            right: '-25vw'},500);

        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '0'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '1'},200);

        $("#web-wrapper").css("display", "none");
        $("#logo-wrapper").css("display", "none");
        $("#illus-wrapper").css("display", "block");
        $("#ani-wrapper").css("display", "none");
    });
    $( "#slide-4" ).click(function() {
        $( "#slide-1" ).delay( 500 ).animate({
            left: '-25vw'},500);
        $( "#slide-2" ).animate({
            left: '-50vw'},500);
        $( "#slide-3" ).animate({
            right: '-50vw'},500);
        $( "#slide-4" ).delay( 500 ).animate({
            right: '-25vw'},500);

        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '0'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '1'},200);

        $("#web-wrapper").css("display", "none");
        $("#logo-wrapper").css("display", "none");
        $("#illus-wrapper").css("display", "none");
        $("#ani-wrapper").css("display", "block");
    });
    $( ".close-btn" ).click(function() {
        $( "#slide-1" ).animate({
            left: '0vw'},200);
        $( "#slide-2" ).delay( 100 ).animate({
            left: '0vw'},300);
        $( "#slide-3" ).delay( 100 ).animate({
            right: '0vw'},300);
        $( "#slide-4" ).animate({
            right: '0vw'},200);

        $( ".logo-white" ).delay( 300 ).animate({
            opacity: '1'},200);
        $( ".logo-dark" ).delay( 300 ).animate({
            opacity: '0'},200);

        $("#web-wrapper").css("display", "none");
        $("#logo-wrapper").css("display", "none");
        $("#illus-wrapper").css("display", "none");
        $("#ani-wrapper").css("display", "none");
        });
    });
}

//  TEST TEST TEST TEST

if($(window).width() <= 440){

    // #1 - Home Overlay Animatie
    $(document).ready(function (){
        $( "#home-button" ).click(function() {
            $( "#home-overlay" ).animate({
                top: '-95vh'},300);
            $( "#testtt" ).css({
                display: 'block'},100);
        });
    });

   // Slide Web Up/Down Animatie / Opacity Web tiles
    $(document).ready(function (){
        $( "#slide-1" ).click(function() {
            $( "#slide-1" ).animate({
                left: '-100vw'},300);
            $( "#slide-2" ).animate({
                left: '-100vw'},500);
            $( "#slide-3" ).animate({
                left: '-100vw'},700);
            $( "#slide-4" ).animate({
                left: '-100vw'},900);
            
            $("#web-wrapper").css("display", "block");
            $("#logo-wrapper").css("display", "none");
            $("#illus-wrapper").css("display", "none");
            $("#ani-wrapper").css("display", "none");
        });
       $( ".close-btn" ).click(function() {
            $( "#slide-4" ).animate({
                left: '0vw'},900);
            $( "#slide-2" ).animate({
                left: '0vw'},500);
            $( "#slide-3" ).animate({
                left: '0vw'},700);
            $( "#slide-1" ).animate({
                left: '0vw'},300);
        });
    });

    // Slide Logo Up/Down Animatie / Opacity logo tiles
    $(document).ready(function (){
        $( "#slide-2" ).click(function() {
            $( "#slide-2" ).animate({
                left: '-100vw'},500);
            $( "#slide-1" ).animate({
                left: '-100vw'},300);
            $( "#slide-3" ).animate({
                left: '-100vw'},700);
            $( "#slide-4" ).animate({
                left: '-100vw'},900);

            $("#web-wrapper").css("display", "none");
            $("#logo-wrapper").css("display", "block");
            $("#illus-wrapper").css("display", "none");
            $("#ani-wrapper").css("display", "none");
        });
    });

    // Slide Illustratie Up/Down Animatie / Opacity ill tiles
    $(document).ready(function (){
        $( "#slide-3" ).click(function() {
            $( "#slide-3" ).animate({
                left: '-100vw'},700);
            $( "#slide-2" ).animate({
                left: '-100vw'},500);
            $( "#slide-1" ).animate({
                left: '-100vw'},300);
            $( "#slide-4" ).animate({
                left: '-100vw'},900);

            $("#web-wrapper").css("display", "none");
            $("#logo-wrapper").css("display", "none");
            $("#illus-wrapper").css("display", "block");
            $("#ani-wrapper").css("display", "none");
        });
    });

    // Slide Animatie Up/Down Animatie / Opacity ani tiles
    $(document).ready(function (){
        $( "#slide-4" ).click(function() {
            $( "#slide-4" ).animate({
                left: '-100vw'},900);
            $( "#slide-2" ).animate({
                left: '-100vw'},500);
            $( "#slide-3" ).animate({
                left: '-100vw'},700);
            $( "#slide-1" ).animate({
                left: '-100vw'},300);

            $("#web-wrapper").css("display", "none");
            $("#logo-wrapper").css("display", "none");
            $("#illus-wrapper").css("display", "none");
            $("#ani-wrapper").css("display", "block");
        });
    });

    // Home Showcase Product
    $(document).ready(function (){
        $( ".tiles-holder .tile" ).click(function() {
            $("#showcase-product").show();
            $( "#showcase-product" ).animate({
                bottom: '-0vh'},300);
        });
        $( "#close-showcase" ).click(function() {
            $( "#showcase-product" ).animate({
                bottom: '-95vh'},200).hide(200);
        });
    });

    // Home Showcase Product
$(document).ready(function (){
    $( "#web1" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb1" ).show();
    });
    $( "#web2" ).click(function() {        
        $( ".big" ).hide();
        $( "#bweb2" ).show();
    });
    $( "#web3" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb3" ).show();
    });
    $( "#web4" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb4" ).show();
    });
    $( "#web5" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb5" ).show();
    });
    $( "#web6" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb6" ).show();
    });
    $( "#web7" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb7" ).show();
    });
    $( "#web8" ).click(function() {
        $( ".big" ).hide();
        $( "#bweb8" ).show();
    });
});

// Home Showcase Product
$(document).ready(function (){
    $( "#logo1" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo1" ).show();
    });
    $( "#logo2" ).click(function() {        
        $( ".big" ).hide();
        $( "#blogo2" ).show();
    });
    $( "#logo3" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo3" ).show();
    });
    $( "#logo4" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo4" ).show();
    });
    $( "#logo5" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo5" ).show();
    });
    $( "#logo6" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo6" ).show();
    });
    $( "#logo7" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo7" ).show();
    });
    $( "#logo8" ).click(function() {
        $( ".big" ).hide();
        $( "#blogo8" ).show();
    });
});

// Home Showcase Product
$(document).ready(function (){
    $( "#ill1" ).click(function() {
        $( ".big" ).hide();
        $( "#bill1" ).show();
    });
    $( "#ill2" ).click(function() {        
        $( ".big" ).hide();
        $( "#bill2" ).show();
    });
    $( "#ill3" ).click(function() {
        $( ".big" ).hide();
        $( "#bill3" ).show();
    });
    $( "#ill4" ).click(function() {
        $( ".big" ).hide();
        $( "#bill4" ).show();
    });
    $( "#ill5" ).click(function() {
        $( ".big" ).hide();
        $( "#bill5" ).show();
    });
    $( "#ill6" ).click(function() {
        $( ".big" ).hide();
        $( "#bill6" ).show();
    });
    $( "#ill7" ).click(function() {
        $( ".big" ).hide();
        $( "#bill7" ).show();
    });
    $( "#ill8" ).click(function() {
        $( ".big" ).hide();
        $( "#bill8" ).show();
    });
});
}