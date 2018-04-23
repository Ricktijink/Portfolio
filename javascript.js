

// Toggle filter menu
$( ".filter-menu-button" ).click(function() {
  $( ".filter-menu" ).slideToggle( "fast" );
});


$(".option").click(function (){
  var value = $(this).attr("data-filter");
  if (value == "all")
  {
     $(".filter").fadeOut("fast");
    $(".filter").delay("300").fadeIn("slow");
  }
  else
  {
     $(".filter").fadeOut("fast");
    // $(".filter").not("."+value).hide();
    $(".filter").filter("."+value).delay("300").fadeIn("slow");
  }
 });

 // add active class

  $(".filter-menu li a").click(function(){
     $(".filter-menu li a").removeClass('active');
     $(this).addClass('active');

 })﻿
