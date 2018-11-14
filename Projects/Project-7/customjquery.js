// JavaScript Document
		
//===============================
//Fancybox (vergroten van foto's
//===============================
    $(document).ready(function() {

			//Gallery 1 - fancybox
			$("a[rel=example_group]").fancybox({
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
						
			//Single Picture - fancybox			
			$(".fancybox").fancybox({
				'titlePosition'	:	'over',
				'onComplete'	:	function() {
					$("#fancybox-wrap").hover(function() {
						$("#fancybox-title").show();
					}, function() {
						$("#fancybox-title").hide();
					});
			}
		});
	});



//===============================
//NIVO SLIDER
//===============================    
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
	
	

//==================================
//click add or remove class 6 opties
//==================================  
$(document).ready(function(){
	 		$('#Optie1').addClass('optionhighlight');
			$("#Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			
	$("#Optie1").click(function(){
			$("#Blok1").css({ 'display': 'inline' });
			$('#Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11').removeClass('optionhighlight');
			$('#Optie1').addClass('optionhighlight');
			$("#Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
	});
	
	$("#Optie2").click(function(){			
			$("#Blok1, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok2").css({ 'display': 'inline' });
			$("#Optie1, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie2').addClass('optionhighlight');			   
	});
	
	$("#Optie3").click(function(){
			$("#Blok1, #Blok2, #Blok4, #Blok5, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok3").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie4, #Optie5, #Optie6, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie3').addClass('optionhighlight');	      
	});
	
	$("#Optie4").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok5, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok4").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie5, #Optie6, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie4').addClass('optionhighlight');	      
	});
	
	$("#Optie5").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok6, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok5").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie6, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie5').addClass('optionhighlight');	      
	});
	
	$("#Optie6").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok7, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok6").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie7, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie6').addClass('optionhighlight');	      
	});
	
	$("#Optie7").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok8, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok7").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie8, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie7').addClass('optionhighlight');	      
	});
	$("#Optie8").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok9, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok8").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie9, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie8').addClass('optionhighlight');	      
	});	
	$("#Optie9").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok8, #Blok10, #Blok11").css({ 'display': 'none' });
			$("#Blok9").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie8, #Optie10, #Optie11").removeClass('optionhighlight');
			$('#Optie9').addClass('optionhighlight');	      
	});	
	$("#Optie10").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok9, #Blok8, #Blok11").css({ 'display': 'none' });
			$("#Blok10").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie9, #Optie8, #Optie11").removeClass('optionhighlight');
			$('#Optie10').addClass('optionhighlight');	      
	});	
	$("#Optie11").click(function(){
			$("#Blok1, #Blok2, #Blok3, #Blok4, #Blok5, #Blok6, #Blok7, #Blok9, #Blok10, #Blok8").css({ 'display': 'none' });
			$("#Blok11").css({ 'display': 'inline' });
			$("#Optie1, #Optie2, #Optie3, #Optie4, #Optie5, #Optie6, #Optie7, #Optie9, #Optie10, #Optie8").removeClass('optionhighlight');
			$('#Optie11').addClass('optionhighlight');	      
	});				
});


//===============================================
//click add or remove class 8 opties
//===============================================  
$(document).ready(function(){
	 		$('#Keuze1').addClass('optionhighlight');
			$("#Inhoud2, #Inhoud3, #Inhoud4, #Inhoud5, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			
	$("#Keuze1").click(function(){
			$("#Inhoud1").css({ 'display': 'inline' });
			$('#Keuze2, #Keuze3, #Keuze4, #Keuze5, #Keuze6, #Keuze7, #Keuze8').removeClass('optionhighlight');
			$('#Keuze1').addClass('optionhighlight');
			$("#Inhoud2, #Inhoud3, #Inhoud4, #Inhoud5, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
	});
	
	$("#Keuze2").click(function(){			
			$("#Inhoud1, #Inhoud3, #Inhoud4, #Inhoud5, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud2").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze3, #Keuze4, #Keuze5, #Keuze6, #Keuze7, #Keuze8").removeClass('optionhighlight');
			$('#Keuze2').addClass('optionhighlight');			   
	});
	
	$("#Keuze3").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud4, #Inhoud5, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud3").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze4, #Keuze5, #Keuze6, #Keuze7, #Keuze8").removeClass('optionhighlight');
			$('#Keuze3').addClass('optionhighlight');	      
	});
	
	$("#Keuze4").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud3, #Inhoud5, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud4").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze3, #Keuze5, #Keuze6, #Keuze7, #Keuze8").removeClass('optionhighlight');
			$('#Keuze4').addClass('optionhighlight');	      
	});
	
	$("#Keuze5").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud3, #Inhoud4, #Inhoud6, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud5").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze3, #Keuze4, #Keuze6, #Keuze7, #Keuze8").removeClass('optionhighlight');
			$('#Keuze5').addClass('optionhighlight');	      
	});
	
	$("#Keuze6").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud3, #Inhoud4, #Inhoud5, #Inhoud7, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud6").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze3, #Keuze4, #Keuze5, #Keuze7, #Keuze8").removeClass('optionhighlight');
			$('#Keuze6').addClass('optionhighlight');	      
	});
	
	$("#Keuze7").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud3, #Inhoud4, #Inhoud6, #Inhoud5, #Inhoud8").css({ 'display': 'none' });
			$("#Inhoud7").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze3, #Keuze4, #Keuze6, #Keuze5, #Keuze8").removeClass('optionhighlight');
			$('#Keuze7').addClass('optionhighlight');	      
	});
	
	$("#Keuze8").click(function(){
			$("#Inhoud1, #Inhoud2, #Inhoud3, #Inhoud4, #Inhoud5, #Inhoud7, #Inhoud6").css({ 'display': 'none' });
			$("#Inhoud8").css({ 'display': 'inline' });
			$("#Keuze1, #Keuze2, #Keuze3, #Keuze4, #Keuze5, #Keuze7, #Keuze6").removeClass('optionhighlight');
			$('#Keuze8').addClass('optionhighlight');	      
	});

});


$(document).ready(function (){
	$('#button a').click(function(){
		var integer = $(this).attr('rel');
		$('#myslide .cover').animate({left:-300*(parseInt(integer)-1)})  /*----- Width of div mystuff (here 300) ------ */
		$('#button a').each(function(){
		$(this).removeClass('active');
			if($(this).hasClass('button'+integer)){
				$(this).addClass('active')}
		});return false;
	});	
});

