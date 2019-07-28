// Drag and drop functionality
$(function() {
   $("#sortable2, #app-content").sortable({
      connectWith: ".connectedSortable"
   }).disableSelection();
});


// color picker header (remove this code later, this functionality has been removed)
$(document).ready(function() {
   $('#bgcolor').on('change', function(e) {
      var optionSelected = $("option:selected", this);
      var valueSelected = '#' + this.value;

      $(".personal-bg").css("background-color", valueSelected);
   });
   // color picker bottom menu
   $('#bgcolor1').on('change', function(e) {
      var optionSelected = $("option:selected", this);
      var valueSelected = '#' + this.value;

      $(".personal-bg1").css("background-color", valueSelected);
   });
   // color picker text
   $('#bgcolor2').on('change', function(e) {
      var optionSelected = $("option:selected", this);
      var valueSelected = '#' + this.value;

      $(".personal-bg2").css("color", valueSelected);
   });
});

// Accordion functionality
$(document).ready(function() {
   //Add Inactive Class To All Accordion Headers
   $('.accordion-header').toggleClass('inactive-header');

   //Set The Accordion Content Width
   var contentwidth = $('.accordion-header').width();
   $('.accordion-content').css({
      'width': contentwidth
   });

   //Open The First Accordion Section When Page Loads
   $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
   $('.accordion-content').first().slideDown().toggleClass('open-content');

   // The Accordion Effect
   $('.accordion-header').click(function() {
      if ($(this).is('.inactive-header')) {
         $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
         $(this).toggleClass('active-header').toggleClass('inactive-header');
         $(this).next().slideToggle().toggleClass('open-content');
      } else {
         $(this).toggleClass('active-header').toggleClass('inactive-header');
         $(this).next().slideToggle().toggleClass('open-content');
      }
   });

   return false;
});
