var currentHeight = 0;

$(document).ready(function() {
	$('a[href^="#"]').on('click',function (event) {
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

			var distanceFromTop = $target.offset().top - 70;

			var difference = Math.abs(distanceFromTop - currentHeight);
			var time = difference / 1.2;

			if (difference < 600) {
				time = 600;
			}
			if (difference < 300) {
				time = 400;
			}

			$('html, body').stop().animate( {
		      'scrollTop': distanceFromTop
		  }, time, 'swing');

			currentHeight = distanceFromTop;
	});
});
