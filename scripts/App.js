$(document).ready(function() {

  
  function iOSversion() {
    
    if(navigator.userAgent.match(/Windows Phone/i)){
      // There is some iOS in Windows Phone...
      // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
     return false;
    }

    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      var ver = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      return ver;
    }
  }

    var version = iOSversion();
    var videoBgEl = document.querySelector('.large-hero__video-bg');
    var largeHeroEl = document.querySelector('.large-hero');

    if (videoBgEl !== undefined && videoBgEl !== null) {
      
        //alert(version);
        
        if (version !== undefined && version !== null) {
          if (version[0] >= 10) {
            //alert(version + ' - This is running iOS 10 or later.');
            videoBgEl.style.display = 'block'
          }else{
            //alert('not running later than 10 ' + version[0]);
            videoBgEl.parentNode.removeChild(videoBgEl);
          }
        }else{
        // alert('not iOS!');
          videoBgEl.setAttribute("style","display: block;");
          //largeHeroEl.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAF0lEQVQIW2NkYGD4z8DAwMgAI0AMDA4AI3EBBCKrOnQAAAAASUVORK5CYII=')";   
          largeHeroEl.style.background = "none";   
        }

    }

  

  // ////////////////////////////////////////

  
  function slideshow(slidesSel, fadeInDur = 1, fadeOutDur = 1, singleSlide = false) {
    // set properties
    var singleSlide = singleSlide;
    if (singleSlide == false) {
       var repeat = -1;
    }else{
      var repeat = 0;
    }
    var slideEls = $(slidesSel);
    //var fadeInDur = fadeInDur;
    //var fadeOutDur = fadeOutDur;
    var masterTl = new TimelineLite({repeat: repeat});
    var tlArray = []; // array to store the timeline of each slide

    // create a timeline for each slide
    $(slideEls).each(function(i,slideEl){
      var slideTl = new TimelineLite();

      if (singleSlide) {
        // do single animation in
        slideTl = animateSingleSlide( slideEl, slideTl, fadeInDur, fadeOutDur );
      }else{
        // animate the slide as part of the slideshow
        slideTl = animateSlide( slideEl, slideTl, fadeInDur );
      }

      // add it to the collection of timelines to be added to master timeline
      tlArray.push(slideTl);
    });

    // add all the individual timelines to the master one
    masterTl.add(tlArray , 0, "sequence"); // optionally add stagger as last parameter
  }


  function animateSlide( slideEl, slideTl, fadeInDur, fadeOutDur ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    ).to(slideEl,
       fadeOutDur, // fade out dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0
      }, '+=2' // time to stay visible
    );
    return slideTl;
  }

  function animateSingleSlide( slideEl, slideTl, fadeInDur ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    );
    return slideTl;
  }


// /////////////////////////////////////////////////////

 
console.log($( window ).width() + " " + $( window ).height());

$('.large-hero--full-height').height($( window ).height());

// mobile menu toggle
$('.header__menu-icon').click(function(){
    $('.top-nav').toggleClass('top-nav__visible');
    $(this).toggleClass('header__menu-icon--close-x');
});

// mobile menu sub-items toggle
$('.top-nav__submenu-button').click(function(){
  var menuItem = $(this).parent();

  if (menuItem.hasClass('submenu-open')) {
    $('.top-nav__has-children').removeClass('submenu-open');
  }else{
    $('.top-nav__has-children').removeClass('submenu-open');
    menuItem.addClass('submenu-open');
  }
});

// slideshow
  if ($('.text-slideshow__slide').length > 1) {
    var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1); 
  }else{
    var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1, true);
  }

// flip cards
$(".cards__card-wrapper").not('.noflip').hover(
  function() {TweenLite.to($(this).find(".cards__card"), 1.2, {rotationY:180, ease:Back.easeOut});},
  function() {TweenLite.to($(this).find(".cards__card"), 1.2, {rotationY:0, ease:Back.easeOut});}
);

$('.tabs__button').click( function(){
  var tab_id = $(this).attr('data-tab');
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().next('.tabs__content').children('.tabs__tab').removeClass('active');
  $('.' + tab_id).addClass('active');

});

// show card details
$('.with-lightbox').click(function(){
  console.log($(this).index());
  showOverlay();

  $('.card-details__wrapper .card-details:eq('+ $(this).index() +')').clone(true, true).appendTo( '.overlay__content' );

  var video_url = $('.overlay__content .card-details__video').data("videourl");

  var vimeoId = getVimeoId(video_url);

  if (vimeoId != false) {
    $('.overlay__content .embed-container').html('<iframe src="https://player.vimeo.com/video/'+ vimeoId +'?autoplay=0&title=0&byline=0&portrait=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
  }
});

function showOverlay() {
  $('.overlay').show();
  $('.footer__wrapper,.large-hero').addClass('hideonMobile');
}
function hideOverlay(){
  $('.overlay').hide();
  $('.footer__wrapper,.large-hero').removeClass('hideonMobile');  
}

function getVimeoId( url ) {

  // Look for a string with 'vimeo', then whatever, then a
  // forward slash and a group of digits.
  var match = /vimeo.*\/(\d+)/i.exec( url );

  // If the match isn't null (i.e. it matched)
  if ( match ) {
    // The grouped/matched digits from the regex
    return match[1];
  }else{
    return false;
  }
}

// close card details
$('.card-details__back-btn').click(function(e){
  e.preventDefault();
  $('.overlay__content .card-details').remove();
  hideOverlay();
});


// toggle FAQs

$('.mx__faqs__answer').hide();
$('.mx__faqs__question').click(function() {
  var toggle = $(this).nextUntil('.mx__faqs__question');
  toggle.slideToggle();
  $('.mx__faqs__answer').not(toggle).slideUp();
});

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Person("Jane Smith", "green");
// jane.greet();

});

// Step 1: Create jQuery plugin
// ============================

$.fn.fancyMorph = function( opts ) {

  var Morphing = function( $btn, opts ) {
    var self = this;

    self.opts = $.extend({
      animationEffect : false,
      infobar    : false,
      buttons    : ['close'],
      smallBtn   : false,
      touch      : false,
      baseClass  : 'fancybox-morphing',
      afterClose : function() {
        self.close();
      }
    }, opts);

    self.init( $btn );
  };

  Morphing.prototype.init = function( $btn ) {
    var self = this;

    self.$btn = $btn.addClass('morphing-btn');

    self.$clone = $('<div class="morphing-btn-clone" />')
      .hide()
      .insertAfter( $btn );

    // Add wrapping element and set initial width used for positioning
    $btn.wrap( '<span class="morphing-btn-wrap"></span>' ).on('click', function(e) {
      e.preventDefault();

      self.start();
    });

    // alert(Cookies.get('odcpop'));

    // if (Cookies.get('odcpop') == undefined){
    //   Cookies.set('odcpop', '1', { expires: 1});
    //   $btn.trigger('click');
    //   console.log('no cookie, setting it.');
    //  }else{
    //    console.log('cookie found');
    //  }
  };

  Morphing.prototype.start = function() {
    var self = this;

    if ( self.$btn.hasClass('morphing-btn_circle') ) {
      return;
    }

    // Set initial width, because it is not possible to start CSS transition from "auto"
    self.$btn.width( self.$btn.width() ).parent().width( self.$btn.outerWidth() );

    self.$btn.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {

      if ( e.originalEvent.propertyName === 'width' ) {
        self.$btn.off('.fm');

        self.animateBg();
      }

    }).addClass('morphing-btn_circle');

  };

  Morphing.prototype.animateBg = function() {
    var self = this;

    self.scaleBg();

    self.$clone.show();

    // Trigger repaint
    self.$clone[0].offsetHeight;

    self.$clone.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
      self.$clone.off('.fm');

      self.complete();

    }).addClass('morphing-btn-clone_visible');
  };

  Morphing.prototype.scaleBg = function() {
    var self = this;

    var $clone = self.$clone;
    var scale  = self.getScale();
    var $btn   = self.$btn;
    var pos    = $btn.offset();

    $clone.css({
      top       : pos.top  + $btn.outerHeight() * 0.5 - ( $btn.outerHeight() * scale * 0.5 ) - $(window).scrollTop(),
      left      : pos.left + $btn.outerWidth()  * 0.5 - ( $btn.outerWidth()  * scale * 0.5 ) - $(window).scrollLeft(),
      width     : $btn.outerWidth()  * scale,
      height    : $btn.outerHeight() * scale,
      transform : 'scale(' + ( 1 / scale ) + ')'
    });
  };

  Morphing.prototype.getScale = function() {
    var $btn    = this.$btn,
        radius  = $btn.outerWidth() * 0.5,
        left    = $btn.offset().left + radius - $(window).scrollLeft(),
        top     = $btn.offset().top  + radius - $(window).scrollTop(),
        windowW = $(window).width(),
        windowH = $(window).height();

    var maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left ),
        maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );

    return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );
  };

  Morphing.prototype.complete = function() {
    var self = this;
    var $btn = self.$btn;

    $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, self.opts);

    $(window).on('resize.fm', function() {
      //self.scaleBg();
    });
  };

  Morphing.prototype.close = function() {
    var self   = this;
    var $clone = self.$clone;

    self.scaleBg();

    $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
      $clone.hide();

      self.$btn.removeClass('morphing-btn_circle');
    });

    $clone.removeClass('morphing-btn-clone_visible');

    $(window).off('resize.fm');
  };

  // Init
  this.each(function() {
    var $this = $(this);

    if ( !$this.data("morphing") ) {
      $this.data( "morphing", new Morphing( $this, opts ) );
    }

  });

  return this;
};

$("[data-morphing]").fancyMorph({
  // hash : 'morphing'
});

// scroll to top

$("a.scrollToTop").click(function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
