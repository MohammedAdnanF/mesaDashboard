(function (window, undefined) {
  'use strict';

  $(window).on('click', function () {
    $('.slider-menu').fadeOut('fast');
  });

  $('.slider-menu-bar').on('click', function (event) {
    event.stopPropagation();
    $(this).children('.slider-menu').fadeIn('fast');
  });

  // $(".pickatime").pickatime();

  if ($('.number-tab-steps').length) {
    $(".number-tab-steps").steps({
      headerTag: "h6",
      bodyTag: "fieldset",
      transitionEffect: "fade",
      titleTemplate: '#index#',
      labels: {
        finish: 'Submit'
      },
      onFinished: function (event, currentIndex) {
        alert("Form submitted.");
      }
    });
  }

  if ($('.select2').length) {
    $(".select2").select2();
    $(".select2.no-search").select2({
      minimumResultsForSearch: -1
    });
  }

  if ($('.icheck').length) {
    $('.icheck').iCheck({
      checkboxClass: 'icheckbox',
    });
  }

  var currentMonth = moment().format('YYYY-MM');
	var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [{
		date: currentMonth + '-' + '10',
		title: 'Persian Kitten Auction',
		location: 'Center for Beautiful Cats'
	}, {
		date: currentMonth + '-' + '19',
		title: 'Cat Frisbee',
		location: 'Jefferson Park'
	}, {
		date: currentMonth + '-' + '23',
		title: 'Kitten Demonstration',
		location: 'Center for Beautiful Cats'
	}, {
		date: nextMonth + '-' + '07',
		title: 'Small Cat Photo Session',
		location: 'Center for Cat Photography'
	}];

  /********************************************
  *				Selected Date				*
  ********************************************/
	$('#clndr-selected-date').clndr({
		template: $('#clndr-template').html(),
		events: events,
		trackSelectedDate: true,
	});


  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

})(window);