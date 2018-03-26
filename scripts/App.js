/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_modules_Ios_fixes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_loader_modules_Ios_fixes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_script_loader_modules_Ios_fixes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_modules_Slideshow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_modules_Slideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_modules_Slideshow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_script_loader_modules_Nav_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_script_loader_modules_Nav_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_script_loader_modules_Nav_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_script_loader_modules_Hero_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_script_loader_modules_Hero_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_script_loader_modules_Hero_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_script_loader_modules_Cards_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_script_loader_modules_Cards_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_script_loader_modules_Cards_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_script_loader_modules_newsletter_pop_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_script_loader_modules_newsletter_pop_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_script_loader_modules_newsletter_pop_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_script_loader_modules_Faqs_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_script_loader_modules_Faqs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_script_loader_modules_Faqs_js__);









$(document).ready(function() {

  Slideshows.init();
  Nav.init();

  // scroll to top
  $("a.scrollToTop").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(3))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "//////////////////////\r\n// fixes for iOS\r\n//////////////////////\r\n\r\nfunction iOSversion() {\r\n    \r\n  if(navigator.userAgent.match(/Windows Phone/i)){\r\n    // There is some iOS in Windows Phone...\r\n    // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx\r\n    return false;\r\n  }\r\n\r\n  if (/iP(hone|od|ad)/.test(navigator.platform)) {\r\n    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>\r\n    var v = (navigator.appVersion).match(/OS (\\d+)_(\\d+)_?(\\d+)?/);\r\n    var ver = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];\r\n    return ver;\r\n  }\r\n}\r\n\r\n  var version = iOSversion();\r\n  var videoBgEl = document.querySelector('.large-hero__video-bg');\r\n  var largeHeroEl = document.querySelector('.large-hero');\r\n\r\n  if (videoBgEl !== undefined && videoBgEl !== null) {\r\n    \r\n      //alert(version);\r\n      \r\n      if (version !== undefined && version !== null) {\r\n        if (version[0] >= 10) {\r\n          //alert(version + ' - This is running iOS 10 or later.');\r\n          videoBgEl.style.display = 'block';\r\n          largeHeroEl.style.background = \"none\";\r\n        }else{\r\n          //alert('not running later than 10 ' + version[0]);\r\n          videoBgEl.parentNode.removeChild(videoBgEl);\r\n        }\r\n      }else{\r\n        // alert('not iOS!');\r\n        videoBgEl.setAttribute(\"style\",\"display: block;\");\r\n        //largeHeroEl.style.background = \"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAF0lEQVQIW2NkYGD4z8DAwMgAI0AMDA4AI3EBBCKrOnQAAAAASUVORK5CYII=')\";   \r\n        largeHeroEl.style.background = \"none\";   \r\n      }\r\n\r\n  }"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(5))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "var Slideshows = {\r\n  \r\n  init: function () {\r\n\r\n    if ($('.text-slideshow__slide').length > 1) {\r\n      this.hpSlideshow = this.makeSlideshow('.text-slideshow__slide', 3, 1); \r\n    }else{\r\n      this.hpSlideshow = this.makeSlideshow('.text-slideshow__slide', 3, 1, true);\r\n    }\r\n\r\n  },\r\n\r\n\r\n  makeSlideshow : function (slidesSel, fadeInDur = 1, fadeOutDur = 1, singleSlide = false) {\r\n    // set properties\r\n\r\n    var repeat = 0;\r\n    var singleSlideSetting = singleSlide;\r\n\r\n    if (singleSlideSetting == false) {\r\n      repeat = -1;\r\n    }\r\n\r\n    var slideEls = $(slidesSel);\r\n    //var fadeInDur = fadeInDur;\r\n    //var fadeOutDur = fadeOutDur;\r\n    var masterTl = new TimelineLite({repeat: repeat});\r\n    var tlArray = []; // array to store the timeline of each slide\r\n  \r\n    // create a timeline for each slide\r\n    $(slideEls).each(function(i,slideEl){\r\n      var slideTl = new TimelineLite();\r\n  \r\n      if (singleSlide) {\r\n        // do single animation in\r\n        slideTl = Slideshows.animateSingleSlide( slideEl, slideTl, fadeInDur, fadeOutDur );\r\n      }else{\r\n        // animate the slide as part of the slideshow\r\n        slideTl = Slideshows.animateSlide( slideEl, slideTl, fadeInDur );\r\n      }\r\n  \r\n      // add it to the collection of timelines to be added to master timeline\r\n      tlArray.push(slideTl);\r\n    });\r\n  \r\n    // add all the individual timelines to the master one\r\n    masterTl.add(tlArray , 0, \"sequence\"); // optionally add stagger as last parameter\r\n  },\r\n\r\n  animateSlide : function ( slideEl, slideTl, fadeInDur, fadeOutDur ) {\r\n    // complete animation for one slide\r\n    slideTl.to(slideEl,\r\n       fadeInDur, // fade in dur.\r\n      {\r\n      // ease: Bounce.easeOut,\r\n      autoAlpha: 0.8\r\n      }\r\n    ).to(slideEl,\r\n       fadeOutDur, // fade out dur.\r\n      {\r\n      // ease: Bounce.easeOut,\r\n      autoAlpha: 0\r\n      }, '+=2' // time to stay visible\r\n    );\r\n    return slideTl;\r\n  },\r\n\r\n  animateSingleSlide : function ( slideEl, slideTl, fadeInDur ) {\r\n    // complete animation for one slide\r\n    slideTl.to(slideEl,\r\n       fadeInDur, // fade in dur.\r\n      {\r\n      // ease: Bounce.easeOut,\r\n      autoAlpha: 0.8\r\n      }\r\n    );\r\n    return slideTl;\r\n  }\r\n\r\n};\r\n"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(7))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "var Nav = {\r\n\r\n  init : function () {\r\n\r\n    this.cacheDom();\r\n\r\n    this.bindEvents();\r\n\r\n  },\r\n\r\n  cacheDom : function () {\r\n\r\n    this.$menuButton = $('.header__menu-icon');\r\n\r\n    this.$topNav = $('.top-nav');\r\n\r\n    this.$submenuButton = $('.top-nav__submenu-button');\r\n\r\n    this.$menuItemWithChildren = $('.top-nav__has-children');\r\n\r\n  },\r\n\r\n  bindEvents : function () {\r\n\r\n    this.$menuButton.on('click', this.toggleMainMenu);\r\n\r\n    this.$submenuButton.on('click', this.toggleSubItems);\r\n\r\n  },\r\n\r\n  toggleMainMenu : function () {\r\n    Nav.$topNav.toggleClass('top-nav__visible');\r\n    Nav.$menuButton.toggleClass('header__menu-icon--close-x');\r\n  },\r\n\r\n  toggleSubItems : function () {\r\n\r\n    var menuItem = $(this).parent();\r\n\r\n    if (menuItem.hasClass('submenu-open')) {\r\n      Nav.$menuItemWithChildren.removeClass('submenu-open');\r\n    }else{\r\n      Nav.$menuItemWithChildren.removeClass('submenu-open');\r\n      menuItem.addClass('submenu-open');\r\n    }\r\n\r\n  }\r\n\r\n};"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(9))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "//sets hero height to viewport height\r\n$('.large-hero--full-height').height($( window ).height());"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(11))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "// flip cards\r\n$(\".cards__card-wrapper\").not('.noflip').hover(\r\n  function() {TweenLite.to($(this).find(\".cards__card\"), 1.2, {rotationY:180, ease:Back.easeOut});},\r\n  function() {TweenLite.to($(this).find(\".cards__card\"), 1.2, {rotationY:0, ease:Back.easeOut});}\r\n);\r\n\r\n$('.tabs__button').click( function(){\r\n  var tab_id = $(this).attr('data-tab');\r\n  $(this).siblings().removeClass('active');\r\n  $(this).addClass('active');\r\n  $(this).parent().next('.tabs__content').children('.tabs__tab').removeClass('active');\r\n  $('.' + tab_id).addClass('active');\r\n\r\n});\r\n\r\n// show card details\r\n$('.with-lightbox').click(function(){\r\n  console.log($(this).index());\r\n  showOverlay();\r\n\r\n  $('.card-details__wrapper .card-details:eq('+ $(this).index() +')').clone(true, true).appendTo( '.overlay__content' );\r\n\r\n  var video_url = $('.overlay__content .card-details__video').data(\"videourl\");\r\n\r\n  var vimeoId = getVimeoId(video_url);\r\n\r\n  if (vimeoId != false) {\r\n    $('.overlay__content .embed-container').html('<iframe src=\"https://player.vimeo.com/video/'+ vimeoId +'?autoplay=0&title=0&byline=0&portrait=0\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');\r\n  }\r\n});\r\n\r\nfunction showOverlay() {\r\n  $('.overlay').show();\r\n  $('.footer__wrapper,.large-hero').addClass('hideonMobile');\r\n}\r\n\r\nfunction hideOverlay(){\r\n  $('.overlay').hide();\r\n  $('.footer__wrapper,.large-hero').removeClass('hideonMobile');  \r\n}\r\n\r\nfunction getVimeoId( url ) {\r\n\r\n  // Look for a string with 'vimeo', then whatever, then a\r\n  // forward slash and a group of digits.\r\n  var match = /vimeo.*\\/(\\d+)/i.exec( url );\r\n\r\n  // If the match isn't null (i.e. it matched)\r\n  if ( match ) {\r\n    // The grouped/matched digits from the regex\r\n    return match[1];\r\n  }else{\r\n    return false;\r\n  }\r\n}\r\n\r\n// close card details\r\n$('.card-details__back-btn').click(function(e){\r\n  e.preventDefault();\r\n  $('.overlay__content .card-details').remove();\r\n  hideOverlay();\r\n});\r\n"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(13))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "// This handles the events pop-up on a camp's pages.\r\n// uses cookie to only auto-trigger the events pop-up once per day\r\n\r\n// Create jQuery plugin\r\n// ============================\r\n\r\n$.fn.fancyMorph = function( opts ) {\r\n\r\n  var Morphing = function( $btn, opts ) {\r\n    var self = this;\r\n\r\n    self.opts = $.extend({\r\n      animationEffect : false,\r\n      infobar    : false,\r\n      buttons    : ['close'],\r\n      smallBtn   : false,\r\n      touch      : false,\r\n      baseClass  : 'fancybox-morphing',\r\n      afterClose : function() {\r\n        self.close();\r\n      }\r\n    }, opts);\r\n\r\n    self.init( $btn );\r\n  };\r\n\r\n  Morphing.prototype.init = function( $btn ) {\r\n    var self = this;\r\n\r\n    self.$btn = $btn.addClass('morphing-btn');\r\n\r\n    self.$clone = $('<div class=\"morphing-btn-clone\" />')\r\n      .hide()\r\n      .insertAfter( $btn );\r\n\r\n    // Add wrapping element and set initial width used for positioning\r\n    $btn.wrap( '<span class=\"morphing-btn-wrap\"></span>' ).on('click', function(e) {\r\n      e.preventDefault();\r\n\r\n      self.start();\r\n    });\r\n\r\n    \r\n    // Check for cookie, if not present, trigger pop-up and set it\r\n    if (Cookies.get('odcpop') == undefined){\r\n      Cookies.set('odcpop', '1', { expires: 1});\r\n      $btn.trigger('click');\r\n     }\r\n  };\r\n\r\n  Morphing.prototype.start = function() {\r\n    var self = this;\r\n\r\n    if ( self.$btn.hasClass('morphing-btn_circle') ) {\r\n      return;\r\n    }\r\n\r\n    // Set initial width, because it is not possible to start CSS transition from \"auto\"\r\n    self.$btn.width( self.$btn.width() ).parent().width( self.$btn.outerWidth() );\r\n\r\n    self.$btn.off('.fm').on(\"transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm\", function(e) {\r\n\r\n      if ( e.originalEvent.propertyName === 'width' ) {\r\n        self.$btn.off('.fm');\r\n\r\n        self.animateBg();\r\n      }\r\n\r\n    }).addClass('morphing-btn_circle');\r\n\r\n  };\r\n\r\n  Morphing.prototype.animateBg = function() {\r\n    var self = this;\r\n\r\n    self.scaleBg();\r\n\r\n    self.$clone.show();\r\n\r\n    // Trigger repaint\r\n    self.$clone[0].offsetHeight;\r\n\r\n    self.$clone.off('.fm').on(\"transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm\", function(e) {\r\n      self.$clone.off('.fm');\r\n\r\n      self.complete();\r\n\r\n    }).addClass('morphing-btn-clone_visible');\r\n  };\r\n\r\n  Morphing.prototype.scaleBg = function() {\r\n    var self = this;\r\n\r\n    var $clone = self.$clone;\r\n    var scale  = self.getScale();\r\n    var $btn   = self.$btn;\r\n    var pos    = $btn.offset();\r\n\r\n    $clone.css({\r\n      top       : pos.top  + $btn.outerHeight() * 0.5 - ( $btn.outerHeight() * scale * 0.5 ) - $(window).scrollTop(),\r\n      left      : pos.left + $btn.outerWidth()  * 0.5 - ( $btn.outerWidth()  * scale * 0.5 ) - $(window).scrollLeft(),\r\n      width     : $btn.outerWidth()  * scale,\r\n      height    : $btn.outerHeight() * scale,\r\n      transform : 'scale(' + ( 1 / scale ) + ')'\r\n    });\r\n  };\r\n\r\n  Morphing.prototype.getScale = function() {\r\n    var $btn    = this.$btn,\r\n        radius  = $btn.outerWidth() * 0.5,\r\n        left    = $btn.offset().left + radius - $(window).scrollLeft(),\r\n        top     = $btn.offset().top  + radius - $(window).scrollTop(),\r\n        windowW = $(window).width(),\r\n        windowH = $(window).height();\r\n\r\n    var maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left ),\r\n        maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );\r\n\r\n    return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );\r\n  };\r\n\r\n  Morphing.prototype.complete = function() {\r\n    var self = this;\r\n    var $btn = self.$btn;\r\n\r\n    $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, self.opts);\r\n\r\n    $(window).on('resize.fm', function() {\r\n      //self.scaleBg();\r\n    });\r\n  };\r\n\r\n  Morphing.prototype.close = function() {\r\n    var self   = this;\r\n    var $clone = self.$clone;\r\n\r\n    self.scaleBg();\r\n\r\n    $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {\r\n      $clone.hide();\r\n\r\n      self.$btn.removeClass('morphing-btn_circle');\r\n    });\r\n\r\n    $clone.removeClass('morphing-btn-clone_visible');\r\n\r\n    $(window).off('resize.fm');\r\n  };\r\n\r\n  // Init\r\n  this.each(function() {\r\n    var $this = $(this);\r\n\r\n    if ( !$this.data(\"morphing\") ) {\r\n      $this.data( \"morphing\", new Morphing( $this, opts ) );\r\n    }\r\n\r\n  });\r\n\r\n  return this;\r\n};\r\n\r\n$(\"[data-morphing]\").fancyMorph({\r\n  // hash : 'morphing'\r\n});"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(15))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "// toggle FAQs\r\n\r\n$('.mx__faqs__answer').hide();\r\n$('.mx__faqs__question').click(function() {\r\n  var toggle = $(this).nextUntil('.mx__faqs__question');\r\n  toggle.slideToggle();\r\n  $('.mx__faqs__answer').not(toggle).slideUp();\r\n});"

/***/ })
/******/ ]);
//# sourceMappingURL=App.js.map