$(document).ready(function(){
	'use strict';
	
	$('#status').fadeOut();
	$('#preloader').delay(450).fadeOut('slow');
	$('body').delay(450).css({
		'overflow': 'visible'
	});
	
	/*======================
	Navbar Change Background On Scrolling
	======================*/
	
	var wind = $(window);
	
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar")
        if (bodyScroll > 200) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
	
	/*======================
	Javascript for barfiller 
	=======================*/
	
	$('#bar1').barfiller({
		barColor: '#5ac24e',
	});
	$('#bar2').barfiller({
		barColor: '#5ac24e'
	});
	$('#bar3').barfiller({
		barColor: '#5ac24e'
	});
	$('#bar4').barfiller({
		barColor: '#5ac24e'
	});
	
	/*======================
	typed js 
	=======================*/
    var element = $(".text-affect");  
	element.typed({
	   strings: ["Programmer.", "Developer.", "Freelancer."],
	   loop: true,
	   typeSpeed: 90
	});
	
	
	/*======================
	scroll it js
	=======================*/
	$.scrollIt({
		upKey: 38, // key code to navigate to the next section
		downKey: 40, // key code to navigate to the previous section
		easing: 'swing', // the easing function for animation
		scrollTime: 600, // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null, // function(pageIndex) that is called when page is changed
		topOffset: -60 // offste (in px) for fixed top navigation
	});
	
	/*======================
	Magnific Popup
	=======================*/
     $('.portfolio .portfolio-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	/*======================= 
	owl carousel testimonial
	=======================*/
	
	var owl = $('#owl-items');
	
	owl.owlCarousel({
		items:1,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2500,
		autoplayHoverPause:true,
		responsive:{
        0:{
          items:1
        },
        767:{
          items:1
        },
        1000:{
          items:1
        }
      }
	});
	
	
	
	
});

/*======================
window load function
======================*/

$(window).on("load", function() {

	/*========Portfolio Isotope Setup========*/
	
	if ($(".portfolio-section").length) {
		var $elements = $(".portfolio-section");
		$elements.isotope();
		$(".port-filter ul li").on("click", function() {
			$(".port-filter ul li").removeClass("filter-item");
			$(this).addClass("filter-item");
			var selector = $(this).attr("data-filter");
			$(".portfolio-section").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false
				}
			});
		});
	}

});
