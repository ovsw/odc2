import $ from 'jquery';
import {TweenMax} from "gsap";
import Person from './modules/Person';
import Slideshow from  './modules/Slideshow';


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
var hpSlideshow = new Slideshow('.text-slideshow__slide', 3, 1);

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
$('.cards__card-wrapper').click(function(){
  //console.log($(this).index());
  $('.overlay').show();
  $('.card-details__wrapper .card-details:eq('+ $(this).index() +')').clone(true, true).appendTo( '.overlay__content' );

  var video_url = $('.overlay__content .card-details__video').data("videourl");

  //console.log(video_url);
  $('.overlay__content .embed-container')
  .html('<iframe src="https://player.vimeo.com/video/'+ getVimeoId(video_url) +'?autoplay=0&title=0&byline=0&portrait=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
});

function getVimeoId( url ) {

  // Look for a string with 'vimeo', then whatever, then a
  // forward slash and a group of digits.
  var match = /vimeo.*\/(\d+)/i.exec( url );

  // If the match isn't null (i.e. it matched)
  if ( match ) {
    // The grouped/matched digits from the regex
    return match[1];
  }
}

// close card details
$('.card-details__back-btn').click(function(e){
  e.preventDefault();
  $('.overlay__content .card-details').remove();
  $('.overlay').hide();
});


// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Person("Jane Smith", "green");
// jane.greet();