$(document).ready(function() {
  /* ******************************************************
  /* Header and Navigation
  /* ******************************************************
  /* mobile navigation toggle slide */
  $('.js--mobile-nav').slideToggle();

  $('.mobile-nav li a').click(function() {
    $('.js--mobile-nav').slideToggle();    
  });

   $('.js--nav-icon').click(function() {
     var nav = $('.js--mobile-nav');
     nav.slideToggle(200);
   });

  /* sticky navigation and highlight navigation item based on location on the page
  /* highlight nav menu item based on the location on the page
  */
  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    $('.js--link-about').addClass('active');
    $('.js--link-education').removeClass('active');
    $('.js--link-work-experience').removeClass('active');
    $('.js--link-projects').removeClass('active');
    $('.js--link-contact').removeClass('active');

    /* code to animate the Skill Bars load */ 
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },4000);
    });
  }, {
      offset: '60px'
  });

  /*
  /* Scrolling down the page - modify the nav bar menu active item 
  */
  $('.js--section-education').waypoint(function(direction) {
    $('.js--link-about').removeClass('active');
    $('.js--link-education').addClass('active');
    $('.js--link-work-experience').removeClass('active');
    $('.js--link-projects').removeClass('active');
    $('.js--link-contact').removeClass('active');
  }, {
      offset: '10%'
  });

  $('.js--section-work-experience').waypoint(function(direction) {
    $('.js--link-about').removeClass('active');
    $('.js--link-education').removeClass('active');
    $('.js--link-work-experience').addClass('active');
    $('.js--link-projects').removeClass('active');
    $('.js--link-contact').removeClass('active');
  }, {
      offset: '10%'
  });

  $('.js--section-projects').waypoint(function(direction) {
    $('.js--link-about').removeClass('active');
    $('.js--link-education').removeClass('active');
    $('.js--link-work-experience').removeClass('active');
    $('.js--link-projects').addClass('active');
    $('.js--link-contact').removeClass('active');
  }, {
      offset: '10%'
  });

  $('.js--section-contact').waypoint(function(direction) {
    if (direction == "down") {
      $('.js--link-about').removeClass('active');
      $('.js--link-education').removeClass('active');
      $('.js--link-work-experience').removeClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-contact').addClass('active');
    }
  }, {
      offset: '60%'
  });


  /*
  /* Scrolling up the page - modify the nav bar menu active item 
  */
  $('.js--section-contact').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-about').removeClass('active');
      $('.js--link-education').removeClass('active');
      $('.js--link-work-experience').removeClass('active');
      $('.js--link-projects').addClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '50%'
  });

  $('.js--section-projects').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-about').removeClass('active');
      $('.js--link-education').removeClass('active');
      $('.js--link-work-experience').addClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '20%'
  });

  $('.js--work-experience').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-about').removeClass('active');
      $('.js--link-education').addClass('active');
      $('.js--link-work-experience').removeClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '50%'
  });

    $('.js--section-education').waypoint(function(direction) {
    if (direction == "up") {
      $('.js--link-about').addClass('active');
      $('.js--link-education').removeClass('active');
      $('.js--link-work-experience').removeClass('active');
      $('.js--link-projects').removeClass('active');
      $('.js--link-contact').removeClass('active');
    }
  }, {
      offset: '50%'
  });
});