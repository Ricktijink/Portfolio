
// Toggle filter menu
$( ".filter-menu-button" ).click(function() {
  $( ".filter-menu" ).slideToggle( "fast" );
});

$( ".close-filter-button" ).click(function() {
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
     $(".filter").filter("."+value).delay("300").fadeIn("slow");
  }
 });

  $(".filter-menu li a").click(function(){
     $(".filter-menu li a").removeClass('active-filter');
     $(this).addClass('active-filter');
 })﻿

 // When the user scrolls down 20px from the top of the document, show Go to top button
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

// Get modal element
var modal = document.getElementById('businesscard-modal');
// Get modal open button
var openModal = document.getElementById('open-modal');
// Get modal close button
var closeModal = document.getElementById('close-modal');

// EventListeners for clicks
openModal.addEventListener('click', modalOpen);
closeModal.addEventListener('click', modalClose);
window.addEventListener('click', outsideModalClose);

// Function to open modal
function modalOpen(){
   modal.style.display = 'block';
}

// Function to close modal
function modalClose(){
   modal.style.display = 'none';
}

// Function to close modal with outside click
function outsideModalClose(e){
   if (e.target == modal) {
      modal.style.display = 'none';
   }
}

$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({
      items : 6, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay: 4000
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

});


// See what post is clicked for preview

// $(function(){
//    $(".post").click(function(){
//       var clickedPost = $(this).attr('id');
//       document.getElementById("testtest").innerHTML = clickedPost;
//    });
// });
//
// // Create preview modal screen
//
// // Get post preview modal element
// var postPreview = document.getElementById('post-preview-modal');
// // Get post preview open button
// var openPostPreview = document.getElementsByClassName('post')[0];
// // Get post preview close button
// var closePostPreview = document.getElementsByClassName('close-post-preview')[0];
//
// // EventListeners for clicks
// openPostPreview.addEventListener('click', postPreviewOpen);
// closePostPreview.addEventListener('click', postPreviewClose);
// window.addEventListener('click', outsidePreviewClose);
//
// // Function to open modal
// function postPreviewOpen(){
//    postPreview.style.display = 'block';
// }
//
// // Function to close modal
// function postPreviewClose(){
//    postPreview.style.display = 'none';
// }
//
// // Function to close modal with outside click
// function outsidePreviewClose(e){
//    if (e.target == postPreview) {
//       postPreview.style.display = 'none';
//    }
// }
