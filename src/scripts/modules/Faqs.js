// toggle FAQs

$('.mx__faqs__answer').hide();
$('.mx__faqs__question').click(function() {
  var toggle = $(this).nextUntil('.mx__faqs__question');
  toggle.slideToggle();
  $('.mx__faqs__answer').not(toggle).slideUp();
});