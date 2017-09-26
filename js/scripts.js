(function($){

  "use strict";

  $(window).on('load', function() {

    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
    initOwlCarousel();
    initCounters();

    $(window).trigger("resize");
    initScrollReveal();

  });


  // Init
  initMasonry();
  initFullpage()


  $(window).resize(function(){
    containerFullHeight();
    stickyNavRemove();

    if (minWidth(992)) {
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});     
    } else {
      $('.local-scroll.desktop-offset-0').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
      $('.local-scroll.mobile-offset-0').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});      
    }

  });


  /* Detect Browser Size
  -------------------------------------------------------*/
  var minWidth;
  if (Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    minWidth = function (width) {
      return Modernizr.mq('(min-width: ' + width + 'px)');
    };
  }
  else {
    // Fallback for browsers that does not support media queries
    minWidth = function (width) {
      return $(window).width() >= width;
    };
  }

  /* Mobile Detect
  -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("html").addClass("mobile");
  }
  else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }



  /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){

    scrollToTop();
    var $stickyNav = $('#sticky-nav');


    if ($(window).scrollTop() > 190 & minWidth(992)) {
      $stickyNav.addClass('sticky');
    } else {
      $stickyNav.removeClass('sticky');
    }

    if ($(window).scrollTop() > 200 & minWidth(992)) {
      $stickyNav.addClass('offset');
    } else {
      $stickyNav.removeClass('offset');
    }

    if ($(window).scrollTop() > 500 & minWidth(992)) {
      $stickyNav.addClass('scrolling');
    } else {
      $stickyNav.removeClass('scrolling');
    }
    
  });


  function stickyNavRemove() {
    if (!minWidth(992)) {
      $('#sticky-nav').removeClass('sticky offset scrolling');
    }
  }
  

  /* Onepage Nav
  -------------------------------------------------------*/
  $('#onepage-nav').on('click', 'li > a', function() {
    $("#navbar-collapse").collapse('hide');
  });


  // Smooth Scroll Navigation
  $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
  $('.local-scroll-no-offset').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});


  /* Mobile Navigation
  -------------------------------------------------------*/
  var $dropdownTrigger = $('.nav__dropdown-trigger');
  $dropdownTrigger.on('click', function() {

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }

    else {
      $(this).addClass("active");
    }
  });

  $('.nav__dropdown').on('click', '> a', function(e) {
    e.preventDefault();
  });

  if ( $('html').hasClass('mobile') ) {
    $('body').on('click',function() {
      $('.nav__dropdown-menu').addClass('hide-dropdown');
    });

    $('.nav__dropdown').on('click',function(e) {
      e.stopPropagation();
      $('.nav__dropdown-menu').removeClass('hide-dropdown');
    });
  }


  /* Fullscreen Navigation
  -------------------------------------------------------*/
  $('.nav__icon__trigger').on("click", function(e){
    e.preventDefault();
    $('#nav__overlay').toggleClass('open');
    $('body').toggleClass('nav--overlay-open');

    $(function(){   
      var delay = 0;
      $('.nav__overlay__menu > ul > li').each(function(){
        $(this).css({animationDelay: delay+'s'})
        delay += 0.1
      }) 
    })
  });


  /* Full Page
  -------------------------------------------------------*/
  function initFullpage(){

    $('#fullpage').fullpage({
      lockAnchors: false,
      navigation: true,
      navigationPosition: 'right',
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom'
    });
  }






  /* Tabs
  -------------------------------------------------------*/
  $('.tabs__link-trigger').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');
    $('.tabs__content-trigger ' + currentAttrValue).stop().fadeIn(1000).siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });


  /* Counters
  -------------------------------------------------------*/
  function initCounters() {
    $('.counter').appear(function() {
      $('.counter__timer').countTo({
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        }
      });      
    });
  }
 

  /* Owl Carousel
  -------------------------------------------------------*/

  function initOwlCarousel(){
    (function($){
      "use strict";

      /* Testimonials
      -------------------------------------------------------*/

      $("#owl-testimonials").owlCarousel({      
        navigation: true,
        navigationText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"],
        autoHeight: true,
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true      
      })


      /* Works Slider
      -------------------------------------------------------*/

      $("#owl-works-slider").owlCarousel({ 
        // autoPlay: 3000,   
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [500, 2],
          [1200, 3]
        ],
      })


      /* Services Slider
      -------------------------------------------------------*/

      $("#owl-services-slider").owlCarousel({ 
        autoPlay: 3000,   
        navigation: false,
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [500, 2],
          [1200, 3]
        ],
      })


      /* Works Single Slider
      -------------------------------------------------------*/

      $("#owl-work-single").owlCarousel({ 
        // autoPlay: 3000,   
        navigation: true,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        singleItem: true,
        video: true
      })
   

      /* Single Image
      -------------------------------------------------------*/

      $("#owl-single").owlCarousel({     
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='pe-7s-angle-left'></i>", "<i class='pe-7s-angle-right'></i>"]
      })

    })(jQuery);
  };


  /* Youtube Background Video
  -------------------------------------------------------*/
  $("#video-container").YTPlayer();


  /* Lightbox popup
  -------------------------------------------------------*/
  $('.lightbox-img, .lightbox-video').magnificPopup({
    callbacks: {
      elementParse: function(item) {
      if(item.el.context.className == 'lightbox-video') {
          item.type = 'iframe';
        } else {
          item.type = 'image';
        }
      }
    },
    type: 'image',
    closeBtnInside:false,
    gallery: {
      enabled:true
    },
    image: {
      titleSrc: 'title',
      verticalFit: true
    }
  });

  // Single video lightbox
  $('.single-video-lightbox').magnificPopup({
    type: 'iframe',
    closeBtnInside:false,
    tLoading: 'Loading image #%curr%...'
  });



  /* Full Height Container
  -------------------------------------------------------*/
  function containerFullHeight() {

    var fullHeight = $(".container-full-height");

    if(fullHeight.hasClass('container-full-height--deduct-mobile-nav') & !minWidth(992)) {
      $(fullHeight).height($(window).height() - 60);
    } else {
      $(fullHeight).height($(window).height());
    }    
  }



  /* Progress Bars
  -------------------------------------------------------*/
  $('#animated-bars').appear(function() {

    function loadDaBars() {
      $('.progress__base').each(function(index) {
        var $this = $(this),
        bar = $this.find('.progress__bar'),
        barWidth = bar.attr('aria-valuenow');
        setTimeout(function() {              
          bar.css({"width": barWidth + '%'});
        }, index * 200);
      });
    };
    loadDaBars();
    
  });


  
  /* Accordion
  -------------------------------------------------------*/
  function toggleChevron(e) {
    $(e.target)
    .prev('.accordion-panel__heading')
    .find("a")
    .toggleClass('plus minus');
  }
  $('#accordion').on('hide.bs.collapse', toggleChevron);
  $('#accordion').on('show.bs.collapse', toggleChevron);


  /* Toggle
  -------------------------------------------------------*/
  var allToggles = $(".toggle-panel-body").hide();
  
  $(".toggle-panel").on('click', '> a', function(){

    if ($(this).hasClass("active")) {
      $(this).parent().next().slideUp("easeOutExpo");
      $(this).removeClass("active");
    }

    else {
      $(this).parent().next(".toggle-panel-body");
      $(this).addClass("active");
      $(this).parent().next().slideDown("easeOutExpo");
    }
    
    return false;       
  });



  /* Portfolio Isotope
  -------------------------------------------------------*/
  var $portfolio = $('#portfolio-grid');
  $portfolio.imagesLoaded( function() {     
    $portfolio.isotope({
      isOriginLeft: true,
      stagger: 30
    });
    $portfolio.isotope();
  });


  /* Masonry
  -------------------------------------------------------*/
  function initMasonry(){

    var $masonry = $('#masonry-grid');
    $masonry.imagesLoaded( function() {
      $masonry.isotope({
        itemSelector: '.work-item',
        layoutMode: 'masonry',
        percentPosition: true,
        resizable: false,
        isResizeBound: false,
        masonry: { columnWidth: '.work-item.isotope-small' }
      });
    });

    $masonry.isotope();
  }

  // Isotope filter
  var $portfolioFilter = $('#portfolio-grid, #masonry-grid');
  $('.portfolio-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $portfolioFilter.isotope({ filter: filterValue });
    $('.portfolio-filter a').removeClass('active');
    $(this).closest('a').addClass('active');
  });


  /* Scroll reveal
  -------------------------------------------------------*/

  function initScrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal('.animate', {
      reset: false,
      duration: 1000,
      distance: '20px',
      easing: 'ease',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'bottom',
      viewOffset: { top: 200, right: 0, bottom: 0, left: 0 }
    });

    sr.reveal('.animate-right', {
      reset: false,
      duration: 1000,
      distance: '20px',
      easing: 'ease',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'right',
      viewOffset: { top: 200, right: 0, bottom: 0, left: 0 }
    });

    sr.reveal('.animate-left', {
      reset: false,
      duration: 1000,
      distance: '20px',
      easing: 'ease',
      mobile: false,
      delay: 200,
      scale: 1,
      origin: 'left',
      viewOffset: { top: 200, right: 0, bottom: 0, left: 0 }
    });
  }  


  /* FitVIds
  -------------------------------------------------------*/
  $(".video-wrap").fitVids();


  /* Contact Form
  -------------------------------------------------------*/

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    
    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function(data) {

        if(data.info !== 'error'){
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });


  /* Scroll to Top
  -------------------------------------------------------*/
  function scrollToTop() {
    var scroll = $(window).scrollTop();
    var $backToTop = $("#back-to-top");
    if (scroll >= 50) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  }

  $('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
    return false;
  });


})(jQuery);
