import $ from 'jquery';
import {TweenMax} from "gsap";
//import Person from './modules/Person';
import Iosfixes from './modules/Ios-fixes';
import Slideshow from  './modules/Slideshow';



$(document).ready(function() {

  var ver = new Iosfixes();
 
console.log($( window ).width() + " " + $( window ).height());

$('.large-hero').height($( window ).height());

// mobile menu toggle
$('.header__menu-icon').click(function(){
    $('.top-nav').toggleClass('top-nav__visible');
    $(this).toggleClass('header__menu-icon--close-x');
});

// mobile menu sub-items toggle
$('.top-nav__submenu-button').click(function(){
  var menuItem = $(this).parent();

  if (menuItem.hasClass('`submenu`-open')) {
    $('.top-nav__has-children').removeClass('submenu-open');
  }else{
    $('.top-nav__has-children').removeClass('submenu-open');
    menuItem.addClass('submenu-open');
  }
});

// slideshow
  if ($('.text-slideshow__slide').length > 1) {
    var hpSlideshow = new Slideshow('.text-slideshow__slide', 3, 1); 
  }else{
    var hpSlideshow = new Slideshow('.text-slideshow__slide', 3, 1, true);
  }

// flip cards
$(".cards__card-wrapper").hover(
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