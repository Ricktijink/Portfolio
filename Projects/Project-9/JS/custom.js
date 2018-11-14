
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

// $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 30) {
//             $("#navigation-bar").css('height', '50');
//             $("#navigation-bar").css('padding-top', '10px');
//         } else {
//             $("#navigation-bar").css('height', '70');
//             $("#navigation-bar").css('padding-top', '20px');
//         }
//     });
// });


 $(document).ready(function(){
            $('#web').addClass('active');
            $("#Grafisch, #UI-UX, #Animatie, #Logo").css({ 'display': 'none' });
            
    $("#web").click(function(){
            $("#Website").css({ 'display': 'block' });
            $('#graf').removeClass('active');
            $('#ix').removeClass('active');
            $('#ani').removeClass('active');
            $('#log').removeClass('active');
            $('#web').addClass('active');
            $("#Grafisch, #UI-UX, #Animatie, #Logo").css({ 'display': 'none' });
    });
    
    $("#graf").click(function(){
            $("#Grafisch").css({ 'display': 'block' });
            $('#web').removeClass('active');
            $('#log').removeClass('active');
            $('#ix').removeClass('active');
            $('#ani').removeClass('active');
            $('#graf').addClass('active');
            $("#Website, #UI-UX, #Animatie, #Logo").css({ 'display': 'none' });
    });

    $("#ix").click(function(){
            $("#UI-UX").css({ 'display': 'block' });
            $('#web').removeClass('active');
            $('#graf').removeClass('active');
            $('#log').removeClass('active');
            $('#ani').removeClass('active');
            $('#ix').addClass('active');
            $("#Website, #Grafisch, #Animatie, #Logo").css({ 'display': 'none' });
    });
    
    $("#ani").click(function(){
            $("#Animatie").css({ 'display': 'block' });
            $('#web').removeClass('active');
            $('#log').removeClass('active');
            $('#graf').removeClass('active');
            $('#ix').removeClass('active');
            $('#ani').addClass('active');
            $("#Website, #Grafisch, #UI-UX, #Logo").css({ 'display': 'none' });
    });
    $("#log").click(function(){
            $("#Logo").css({ 'display': 'block' });
            $('#web').removeClass('active');
            $('#ani').removeClass('active');
            $('#graf').removeClass('active');
            $('#ix').removeClass('active');
            $('#log').addClass('active');
            $("#Website, #Grafisch, #UI-UX, #Animatie").css({ 'display': 'none' });
    });
});

$(document).ready(function (){
    $( "#about-btn" ).click(function() {
        $( "#about-box" ).animate({
            right: '0px'},300);
    });
    $('#close-btn').click(function(){
        $('#about-box').animate({
            right: '-300px'},100);
    });
});



