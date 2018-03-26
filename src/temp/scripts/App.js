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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _IosFixes = __webpack_require__(2);

var _IosFixes2 = _interopRequireDefault(_IosFixes);

var _Slideshow = __webpack_require__(3);

var _Slideshow2 = _interopRequireDefault(_Slideshow);

__webpack_require__(4);

__webpack_require__(6);

__webpack_require__(8);

__webpack_require__(10);

__webpack_require__(12);

var _jsCookie = __webpack_require__(14);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {TimelineLite,TweenLite} from "gsap";
//import Person from './modules/Person';
$(document).ready(function () {

  // var john = new Person("John Doe", "blue");
  // john.greet();

  // var jane = new Person("Jane Smith", "green");
  // jane.greet();

  $("a.scrollToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

// scroll to top

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function iOSversion() {

  if (navigator.userAgent.match(/Windows Phone/i)) {
    // There is some iOS in Windows Phone...
    // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
    return false;
  }

  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
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
      videoBgEl.style.display = 'block';
      largeHeroEl.style.background = "none";
    } else {
      //alert('not running later than 10 ' + version[0]);
      videoBgEl.parentNode.removeChild(videoBgEl);
    }
  } else {
    // alert('not iOS!');
    videoBgEl.setAttribute("style", "display: block;");
    //largeHeroEl.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAF0lEQVQIW2NkYGD4z8DAwMgAI0AMDA4AI3EBBCKrOnQAAAAASUVORK5CYII=')";   
    largeHeroEl.style.background = "none";
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function slideshow(slidesSel) {
  var fadeInDur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var fadeOutDur = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var singleSlide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // set properties
  var singleSlide = singleSlide;
  if (singleSlide == false) {
    var repeat = -1;
  } else {
    var repeat = 0;
  }
  var slideEls = $(slidesSel);
  //var fadeInDur = fadeInDur;
  //var fadeOutDur = fadeOutDur;
  var masterTl = new TimelineLite({ repeat: repeat });
  var tlArray = []; // array to store the timeline of each slide

  // create a timeline for each slide
  $(slideEls).each(function (i, slideEl) {
    var slideTl = new TimelineLite();

    if (singleSlide) {
      // do single animation in
      slideTl = animateSingleSlide(slideEl, slideTl, fadeInDur, fadeOutDur);
    } else {
      // animate the slide as part of the slideshow
      slideTl = animateSlide(slideEl, slideTl, fadeInDur);
    }

    // add it to the collection of timelines to be added to master timeline
    tlArray.push(slideTl);
  });

  // add all the individual timelines to the master one
  masterTl.add(tlArray, 0, "sequence"); // optionally add stagger as last parameter
}

function animateSlide(slideEl, slideTl, fadeInDur, fadeOutDur) {
  // complete animation for one slide
  slideTl.to(slideEl, fadeInDur, // fade in dur.
  {
    // ease: Bounce.easeOut,
    autoAlpha: 0.8
  }).to(slideEl, fadeOutDur, // fade out dur.
  {
    // ease: Bounce.easeOut,
    autoAlpha: 0
  }, '+=2' // time to stay visible
  );
  return slideTl;
}

function animateSingleSlide(slideEl, slideTl, fadeInDur) {
  // complete animation for one slide
  slideTl.to(slideEl, fadeInDur, // fade in dur.
  {
    // ease: Bounce.easeOut,
    autoAlpha: 0.8
  });
  return slideTl;
}

// slideshow
if ($('.text-slideshow__slide').length > 1) {
  var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1);
} else {
  var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1, true);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(5))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "'use strict';\n\n// mobile menu toggle\n$('.header__menu-icon').click(function () {\n  $('.top-nav').toggleClass('top-nav__visible');\n  $(this).toggleClass('header__menu-icon--close-x');\n});\n\n// mobile menu sub-items toggle\n$('.top-nav__submenu-button').click(function () {\n  var menuItem = $(this).parent();\n\n  if (menuItem.hasClass('submenu-open')) {\n    $('.top-nav__has-children').removeClass('submenu-open');\n  } else {\n    $('.top-nav__has-children').removeClass('submenu-open');\n    menuItem.addClass('submenu-open');\n  }\n});"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(7))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "\"use strict\";\n\nconsole.log($(window).width() + \" \" + $(window).height());\n\n$('.large-hero--full-height').height($(window).height());"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(9))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "\"use strict\";\n\n// flip cards\n$(\".cards__card-wrapper\").not('.noflip').hover(function () {\n  TweenLite.to($(this).find(\".cards__card\"), 1.2, { rotationY: 180, ease: Back.easeOut });\n}, function () {\n  TweenLite.to($(this).find(\".cards__card\"), 1.2, { rotationY: 0, ease: Back.easeOut });\n});\n\n$('.tabs__button').click(function () {\n  var tab_id = $(this).attr('data-tab');\n  $(this).siblings().removeClass('active');\n  $(this).addClass('active');\n  $(this).parent().next('.tabs__content').children('.tabs__tab').removeClass('active');\n  $('.' + tab_id).addClass('active');\n});\n\n// show card details\n$('.with-lightbox').click(function () {\n  console.log($(this).index());\n  showOverlay();\n\n  $('.card-details__wrapper .card-details:eq(' + $(this).index() + ')').clone(true, true).appendTo('.overlay__content');\n\n  var video_url = $('.overlay__content .card-details__video').data(\"videourl\");\n\n  var vimeoId = getVimeoId(video_url);\n\n  if (vimeoId != false) {\n    $('.overlay__content .embed-container').html('<iframe src=\"https://player.vimeo.com/video/' + vimeoId + '?autoplay=0&title=0&byline=0&portrait=0\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');\n  }\n});\n\nfunction showOverlay() {\n  $('.overlay').show();\n  $('.footer__wrapper,.large-hero').addClass('hideonMobile');\n}\nfunction hideOverlay() {\n  $('.overlay').hide();\n  $('.footer__wrapper,.large-hero').removeClass('hideonMobile');\n}\n\nfunction getVimeoId(url) {\n\n  // Look for a string with 'vimeo', then whatever, then a\n  // forward slash and a group of digits.\n  var match = /vimeo.*\\/(\\d+)/i.exec(url);\n\n  // If the match isn't null (i.e. it matched)\n  if (match) {\n    // The grouped/matched digits from the regex\n    return match[1];\n  } else {\n    return false;\n  }\n}\n\n// close card details\n$('.card-details__back-btn').click(function (e) {\n  e.preventDefault();\n  $('.overlay__content .card-details').remove();\n  hideOverlay();\n});"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(11))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "'use strict';\n\n// Step 1: Create jQuery plugin\n// ============================\n\n$.fn.fancyMorph = function (opts) {\n\n  var Morphing = function Morphing($btn, opts) {\n    var self = this;\n\n    self.opts = $.extend({\n      animationEffect: false,\n      infobar: false,\n      buttons: ['close'],\n      smallBtn: false,\n      touch: false,\n      baseClass: 'fancybox-morphing',\n      afterClose: function afterClose() {\n        self.close();\n      }\n    }, opts);\n\n    self.init($btn);\n  };\n\n  Morphing.prototype.init = function ($btn) {\n    var self = this;\n\n    self.$btn = $btn.addClass('morphing-btn');\n\n    self.$clone = $('<div class=\"morphing-btn-clone\" />').hide().insertAfter($btn);\n\n    // Add wrapping element and set initial width used for positioning\n    $btn.wrap('<span class=\"morphing-btn-wrap\"></span>').on('click', function (e) {\n      e.preventDefault();\n\n      self.start();\n    });\n\n    // alert(Cookies.get('odcpop'));\n\n    // if (Cookies.get('odcpop') == undefined){\n    //   Cookies.set('odcpop', '1', { expires: 1});\n    //   $btn.trigger('click');\n    //   console.log('no cookie, setting it.');\n    //  }else{\n    //    console.log('cookie found');\n    //  }\n  };\n\n  Morphing.prototype.start = function () {\n    var self = this;\n\n    if (self.$btn.hasClass('morphing-btn_circle')) {\n      return;\n    }\n\n    // Set initial width, because it is not possible to start CSS transition from \"auto\"\n    self.$btn.width(self.$btn.width()).parent().width(self.$btn.outerWidth());\n\n    self.$btn.off('.fm').on(\"transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm\", function (e) {\n\n      if (e.originalEvent.propertyName === 'width') {\n        self.$btn.off('.fm');\n\n        self.animateBg();\n      }\n    }).addClass('morphing-btn_circle');\n  };\n\n  Morphing.prototype.animateBg = function () {\n    var self = this;\n\n    self.scaleBg();\n\n    self.$clone.show();\n\n    // Trigger repaint\n    self.$clone[0].offsetHeight;\n\n    self.$clone.off('.fm').on(\"transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm\", function (e) {\n      self.$clone.off('.fm');\n\n      self.complete();\n    }).addClass('morphing-btn-clone_visible');\n  };\n\n  Morphing.prototype.scaleBg = function () {\n    var self = this;\n\n    var $clone = self.$clone;\n    var scale = self.getScale();\n    var $btn = self.$btn;\n    var pos = $btn.offset();\n\n    $clone.css({\n      top: pos.top + $btn.outerHeight() * 0.5 - $btn.outerHeight() * scale * 0.5 - $(window).scrollTop(),\n      left: pos.left + $btn.outerWidth() * 0.5 - $btn.outerWidth() * scale * 0.5 - $(window).scrollLeft(),\n      width: $btn.outerWidth() * scale,\n      height: $btn.outerHeight() * scale,\n      transform: 'scale(' + 1 / scale + ')'\n    });\n  };\n\n  Morphing.prototype.getScale = function () {\n    var $btn = this.$btn,\n        radius = $btn.outerWidth() * 0.5,\n        left = $btn.offset().left + radius - $(window).scrollLeft(),\n        top = $btn.offset().top + radius - $(window).scrollTop(),\n        windowW = $(window).width(),\n        windowH = $(window).height();\n\n    var maxDistHor = left > windowW / 2 ? left : windowW - left,\n        maxDistVert = top > windowH / 2 ? top : windowH - top;\n\n    return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radius);\n  };\n\n  Morphing.prototype.complete = function () {\n    var self = this;\n    var $btn = self.$btn;\n\n    $.fancybox.open({ src: $btn.data('src') || $btn.attr('href') }, self.opts);\n\n    $(window).on('resize.fm', function () {\n      //self.scaleBg();\n    });\n  };\n\n  Morphing.prototype.close = function () {\n    var self = this;\n    var $clone = self.$clone;\n\n    self.scaleBg();\n\n    $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {\n      $clone.hide();\n\n      self.$btn.removeClass('morphing-btn_circle');\n    });\n\n    $clone.removeClass('morphing-btn-clone_visible');\n\n    $(window).off('resize.fm');\n  };\n\n  // Init\n  this.each(function () {\n    var $this = $(this);\n\n    if (!$this.data(\"morphing\")) {\n      $this.data(\"morphing\", new Morphing($this, opts));\n    }\n  });\n\n  return this;\n};\n\n$(\"[data-morphing]\").fancyMorph({\n  // hash : 'morphing'\n});"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)(__webpack_require__(13))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "'use strict';\n\n// toggle FAQs\n\n$('.mx__faqs__answer').hide();\n$('.mx__faqs__question').click(function () {\n  var toggle = $(this).nextUntil('.mx__faqs__question');\n  toggle.slideToggle();\n  $('.mx__faqs__answer').not(toggle).slideUp();\n});"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (( false ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
})(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return document.cookie = key + '=' + value + stringifiedAttributes;
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
});

/***/ })
/******/ ]);
//# sourceMappingURL=App.js.map