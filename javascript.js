

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

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         document.getElementById("myBtn").style.display = "block";
     } else {
         document.getElementById("myBtn").style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
