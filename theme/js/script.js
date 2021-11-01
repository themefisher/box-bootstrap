/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

$(window).on('load', function () {
  'use strict';

  // preloader
  $('#preloader').fadeOut('slow');
  $('body').css({
    'overflow': 'visible'
  });
  
  // Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});
		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

  // back to top
  var offset = 300,
  offset_opacity = 500,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scroll_top_duration);
  });

  // input
  $('.input-contact input, .textarea-contact textarea').focus(function () {
    $(this).next('span').addClass('active');
  });
  $('.input-contact input, .textarea-contact textarea').blur(function () {
    if ($(this).val() === '') {
      $(this).next('span').removeClass('active');
    }
  });
});