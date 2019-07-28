// Toggle filter menu
$("#filter-menu-button").click(function() {
   $(".filter-menu").slideToggle("fast");
});

$(".close-filter-button").click(function() {
   $(".filter-menu").slideToggle("fast");
});

// Filter options (filtering portfolio items)
$(".option").click(function() {
   var value = $(this).attr("data-filter");
   if (value == "all") {
      $(".filter").fadeOut("fast");
      $(".filter").delay("300").fadeIn("slow");
   } else {
      $(".filter").fadeOut("fast");
      $(".filter").filter("." + value).delay("300").fadeIn("slow");
   }
});

// Add or Remove active class for filter link
$(".filter-menu li a").click(function() {
   $(".filter-menu li a").removeClass('active-filter');
   $(this).addClass('active-filter');
});

// When the user scrolls down 20px from the top of the document, show Go to top button
window.onscroll = function() {
   scrollFunction()
};

// Hide or show gotoTop btn based on scroll position
function scrollFunction() {
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("myBtn").style.display = "block";
   } else {
      document.getElementById("myBtn").style.display = "none";
   }
}

// When the user clicks on the button, scroll to the top of the document
$('#myBtn').each(function(){
    $(this).click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

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
function modalOpen() {
   modal.style.display = 'block';
}

// Function to close modal
function modalClose() {
   modal.style.display = 'none';
}

// Function to close modal with outside click
function outsideModalClose(e) {
   if (e.target == modal) {
      modal.style.display = 'none';
   }
}


// Fades in the portfolio items
$(document).ready(function() {

   var duration = 400;

   $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#10').each(function(i) {
      $(this).delay( i*(duration/2) ).animate({opacity:1}, duration);
   });
});


// Open and Close overlay
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu');
});

document.getElementById('open-menu-mobile').addEventListener('click', function(){
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu');
});
