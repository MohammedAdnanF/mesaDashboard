$(document).ready(function () {
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
        finish: 'Publish'
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

  if ($('.repeater').length) {
    $('.repeater').repeater();
  }

  // File Upload (--Dropzones--)
  if ($('dropzone').length) {
    Dropzone.autoDiscover = false;
    $('.dropzone.single-file').each(function () {
      $(this).dropzone({
        maxFiles: 1,
        url: "#"
      });
    });
  }


  $('#calendar').evoCalendar({
    'sidebarDisplayDefault': false,
    'eventDisplayDefault': true,
    'eventListToggler': false
  });

  $('#calendar').evoCalendar('addCalendarEvent', [
    {
      id: 'kNybja6',
      name: 'Mom\'s Birthday',
      description: 'Lorem ipsum dolor sit amet..',
      date: 'Dec 16, 2022',
      type: 'birthday',
      everyYear: true // optional
    },
    {
      id: 'kNybja6',
      name: 'My Birthday',
      date: 'Dec 16, 2022',
      type: 'birthday',
      everyYear: true // optional
    },
    {
      id: 'kNybja6',
      name: 'Graduation Day!',
      date: 'Dec 9, 2022',
      type: 'birthday',
      everyYear: true // optional
    },
    {
      id: 'kNybja6',
      name: 'Father Day',
      date: 'Dec 20, 2022',
      type: 'birthday',
      everyYear: true // optional
    },
    {
      id: 'asDf87L',
      name: 'Graduation Day!',
      date: 'Jan 1, 2023',
      type: 'event'
    }
  ]);

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

});