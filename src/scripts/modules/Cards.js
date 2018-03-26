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
