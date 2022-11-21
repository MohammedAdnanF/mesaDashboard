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

  $(".number-tab-steps").steps({
    headerTag: "h6",
    bodyTag: "fieldset",
    transitionEffect: "fade",
    titleTemplate: '#index# #title#',
    labels: {
      finish: 'Submit'
    },
    onFinished: function (event, currentIndex) {
      alert("Form submitted.");
    }
  });

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

})(window);