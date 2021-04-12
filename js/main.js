var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(function () {
	$('.burger-btn').click(function () {
		$(this).toggleClass('burger-btn_active')
	})
});
$(function () {
	$('.burger-btn').click(function () {
		$('.menu').toggleClass('menu_show')
	})
});
$(function () {
	$('.header-main').click(function () {
		$('.menu_show').removeClass('menu_show')
		$('.burger-btn_active').removeClass('burger-btn_active')
	})
});

$(document).ready(function() {
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
