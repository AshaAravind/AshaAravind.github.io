$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	$('#navigation ul li:first-child').addClass('first');
	$('.footer-nav ul li:first-child').addClass('first');

	mobile();

	$(window).on('resize', function() {
		mobile();
	});
	
	$('#navigation a.nav-btn').click(function(){
		$(this).closest('#navigation').find('ul').slideToggle()
		$(this).find('span').toggleClass('active');
		return false;
	});
});

$(window).load(function() {
 
	$('.flexslider').flexslider({
		animation: "slide",
		controlsContainer: ".slider-holder",
		slideshowSpeed: 5000,
		directionNav: false,
		controlNav: true,
		animationDuration: 2000,
		before:function( slider ){
			$('.img-holder').animate({'bottom' : '-30px'},300)
		},

		after:function( slider ){
			$('.img-holder').animate({'bottom' : '0px'},300)
		}
	});
});

function mobile() {
	var winW = $(window).width();
	if (winW > 750) {
		$('#navigation ul').show()	
	}else{
		$('#navigation ul').hide()
		$('#navigation a.nav-btn span.arr').removeClass('active');
		var activeBtn = $('#navigation ul .active').text();
		if(activeBtn == 'HOME'){
			$('#navigation a.nav-btn').text('HOME');
		} else if(activeBtn == 'PRODUCTS'){
			$('#navigation a.nav-btn').text('PRODUCTS');
		} else if(activeBtn == 'PROJECTS'){
			$('#navigation a.nav-btn').text('PROJECTS');
		} else{
			$('#navigation a.nav-btn').text('CONTACT US');
		}
		
	}
}
 