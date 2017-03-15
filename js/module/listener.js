var clipboard = require('clipboard-js');

var listener = function() {
	var hasNext = false;
	var hasPrev = false;
	var isOpen = false;

	$(document).on('click', '.div-frame', function() { //mouse events open div
		resizer($(this));
	});

	$(document).on('keyup', function(e) { //keyboard events
		var currentDiv = $('.div-frame.active');

		if(currentDiv.next().hasClass('div-frame')) {
			hasNext = true;
		} else {
			hasNext = false;
		}

		if(currentDiv.prev().hasClass('div-frame')) {
			hasPrev = true;
		} else {
			hasPrev = false;
		}

		if(currentDiv.hasClass('div-frame active')) {
			isOpen = true;
		} else {
			isOpen = false;
		}

		switch(e.keyCode) {
			case 70: //"F" next image
				if(hasNext) {
					resizer(currentDiv);
					resizer(currentDiv.next());
				}
				break;
			case 68: //"D" prev image
				if(hasPrev) {
					resizer(currentDiv);
					resizer(currentDiv.prev());
				}
				break;
			case 69: //"E" close image
				if(isOpen) {
					resizer(currentDiv);
				}
				break;
			case 82: //"R" refresh view
				if(isOpen) {
					resizer(currentDiv);
				}
				$('.div-frame').remove();
				initView();
				break;
			case 83: //"S" open first div
				if(!isOpen) {
					resizer($(".div-frame").first());
				}
				break;
			case 67: //"C" copy to clipboard
				if(isOpen) {
					clipboard.copy(currentDiv[0].id);
				}
				break;
			}
	});


	$(document).mousemove(function(e){
		$('img.zoom').css('left', (e.clientX - ($('img.zoom').width() / 2)));
		$('img.zoom').css('top', (e.clientY - ($('img.zoom').height() / 2)));
		$('img.zoom').css('bottom', 'auto');
		$('img.zoom').css('right', 'auto');
  });


	$(window).on('resize', function() {	//on window resize change image size
		var currentDiv = $('.div-frame.active');
		if(currentDiv.attr('class') == 'div-frame active') {
			updater(currentDiv);
		}
	});

	$(document).on('click', '.settings', function() { //visibility of service buttons
		//$('[class^=settings-]').fadeToggle("slow"); //obsolete
		settings.sSettings();
	});

	$(document).on('click', '.twitter-button', function() { //obsolete
		settings.sTwitter();
	});

	$(document).on('click', '.tumblr-button', function() { //obsolete
		settings.sTumblr();
	});

};
