import $ from 'jquery';
import {TweenMax} from "gsap";
import Person from './modules/Person';
import Slideshow from  './modules/Slideshow';


var hpSlideshow = new Slideshow('.text-slideshow__slide', 3, 1);

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

$('.cards__card-wrapper').click(function(){
	//console.log($(this).index());
	$('.overlay').show();
	$('.camp-details__wrapper .camp-details:eq('+ $(this).index() +')').clone(true, true).appendTo( '.overlay__content' );// 
});

$('.camp-details__back-btn').click(function(e){
	e.preventDefault();
	$('.overlay__content .camp-details').remove();
	$('.overlay').hide();
});

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Person("Jane Smith", "green");
// jane.greet();