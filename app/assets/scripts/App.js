//import {TimelineLite,TweenLite} from "gsap";
//import Person from './modules/Person';
import Iosfixes from './modules/Ios-fixes';
import Slideshow from  './modules/Slideshow';
import 'script-loader!./modules/Nav.js';
import 'script-loader!./modules/Hero.js';
import 'script-loader!./modules/Hero.js';
import 'script-loader!./modules/newsletter-pop.js';
import 'script-loader!./modules/Faqs.js';
import Cookies from 'js-cookie';


$(document).ready(function() {

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Person("Jane Smith", "green");
// jane.greet();

  $("a.scrollToTop").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});



// scroll to top


