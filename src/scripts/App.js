import 'script-loader!./modules/Ios-fixes';
import 'script-loader!./modules/Slideshow';
import 'script-loader!./modules/Nav.js';
import 'script-loader!./modules/Hero.js';
import 'script-loader!./modules/Cards.js';
import 'script-loader!./modules/newsletter-pop.js';
import 'script-loader!./modules/Faqs.js';


$(document).ready(function() {

  Slideshows.init();
  Nav.init();

  // scroll to top
  $("a.scrollToTop").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});


