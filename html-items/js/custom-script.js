// JavaScript Document

/* =======================================================================================
Short code list ------------------------------------------------------------------------------
	Plugin 1. Multi Lavel Dropdown menu main script
	Plugin 2.
	Plugin 3. Slick js
	Plugin 4. Stellar.js
	Plugin 5. 
	Plugin 6. Stiky header section
==========================================================================================*/


/*==========================================================================================
 Plugin 1. multilavel header menu short script start 
=============================================================================================*/
$(document).ready(function(){
$(".cssmenu").menumaker({ title: "Menu", format: "multitoggle" });
});
/*==========================================================================================
 multilavel header menu short script end here 
=============================================================================================*/


/*==========================================================================================
 Plugin 3. Slick js short script start 
=============================================================================================*/
$(document).ready(function() {
	
	$('.home-slider').slick({
		fade: true,
        dots: true,
        infinite: true,
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
	
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
      });
	  
	  
	  
	  
	  
});
/*==========================================================================================
 Slick js short script end here 
=============================================================================================*/



/*==========================================================================================
 Plugin 6. sticky header section short script start 
=============================================================================================*/
$( document ).ready( function( $ ) {
      $('.sticky-section').stickable();
});
/*==========================================================================================
sticky header section short script end here 
=============================================================================================*/

$( document ).ready( function( $ ) {
	$(".collapsButton").click(function(){
	    $(this).closest(".hdrCnnctList").toggleClass("collaped");
	});
});



