$(document).ready(function(){
   $(".option").click(function(){
      var value = $(this).attr("data-filter");
      if (value == "all") {
         $(".filter").fadeOut("fast");
         $(".filter").delay("300").fadeIn("slow");
      }
      else {
         $(".filter").fadeOut("fast");
         // $(".filter").not("."+value).hide();
         $(".filter").filter("."+value).delay("300").fadeIn("slow");
      }
      // $(".option a").click(function(){
      //       $(this).addClass("active").siblings().removeClass("active");
      // })
   })
});

// Toggle filter menu
$( ".filter-menu-button" ).click(function() {
  $( ".filter-menu" ).slideToggle( "fast" );
});
