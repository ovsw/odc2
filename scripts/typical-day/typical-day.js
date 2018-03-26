///////////////////////////////////////////
// vertical align
// to use this to align something vertially with its parent, you type: $("#idOrClassOfElementIWantToVerticalAlignWithItsParent").vAlign(); in the custom.js file

(function ($) {
  // VERTICALLY ALIGN FUNCTION
  $.fn.vAlign = function() {
    return this.each(function(i){
    var ah = $(this).height();
    var ph = $(this).parent().height();
    //alert ('this height: ' + ah +  ' parent height: ' + ph);
    var mh = Math.ceil((ph-ah) / 2);
    $(this).css('margin-top', mh);
    });
  };
  })(jQuery);
  
  
  
  /*!
  *  JqueryAsynchImageLoader (JAIL) : plugin for jQuery
  *
  * Developed by
  * Sebastiano Armeli-Battana (@sebarmeli) - http://www.sebastianoarmelibattana.com
  * Dual licensed under the MIT or GPL Version 3 licenses.
  * @version 0.9.5
  */
  ;(function(a){var b=a(window);a.fn.asynchImageLoader=a.fn.jail=function(d){d=a.extend({timeout:10,effect:false,speed:400,selector:null,offset:0,event:"load+scroll",callback:jQuery.noop,callbackAfterEachImage:jQuery.noop,placeholder:false,container:window},d);var c=this;a.jail.initialStack=this;this.data("triggerEl",(d.selector)?a(d.selector):b);if(d.placeholder!==false){c.each(function(){a(this).attr("src",d.placeholder);});}if(/^load/.test(d.event)){a.asynchImageLoader.later.call(this,d);}else{a.asynchImageLoader.onEvent.call(this,d,c);}return this;};a.asynchImageLoader=a.jail={_purgeStack:function(c){var d=0;while(true){if(d===c.length){break;}else{if(c[d].getAttribute("data-href")){d++;}else{c.splice(d,1);}}}},_loadOnEvent:function(g){var f=a(this),d=g.data.options,c=g.data.images;a.asynchImageLoader._loadImage(d,f);f.unbind(d.event,a.asynchImageLoader._loadOnEvent);a.asynchImageLoader._purgeStack(c);if(!!d.callback){a.asynchImageLoader._purgeStack(a.jail.initialStack);a.asynchImageLoader._launchCallback(a.jail.initialStack,d);}},_bufferedEventListener:function(g){var c=g.data.images,d=g.data.options,f=c.data("triggerEl");clearTimeout(c.data("poller"));c.data("poller",setTimeout(function(){c.each(function e(){a.asynchImageLoader._loadImageIfVisible(d,this,f);});a.asynchImageLoader._purgeStack(c);if(!!d.callback){a.asynchImageLoader._purgeStack(a.jail.initialStack);a.asynchImageLoader._launchCallback(a.jail.initialStack,d);}},d.timeout));},onEvent:function(d,c){c=c||this;if(d.event==="scroll"||d.selector){var e=c.data("triggerEl");if(c.length>0){e.bind(d.event,{images:c,options:d},a.asynchImageLoader._bufferedEventListener);if(d.event==="scroll"||!d.selector){b.resize({images:c,options:d},a.asynchImageLoader._bufferedEventListener);}return;}else{if(!!e){e.unbind(d.event,a.asynchImageLoader._bufferedEventListener);}}}else{c.bind(d.event,{options:d,images:c},a.asynchImageLoader._loadOnEvent);}},later:function(d){var c=this;if(d.event==="load"){c.each(function(){a.asynchImageLoader._loadImageIfVisible(d,this,c.data("triggerEl"));});}a.asynchImageLoader._purgeStack(c);a.asynchImageLoader._launchCallback(c,d);setTimeout(function(){if(d.event==="load"){c.each(function(){a.asynchImageLoader._loadImage(d,a(this));});}else{c.each(function(){a.asynchImageLoader._loadImageIfVisible(d,this,c.data("triggerEl"));});}a.asynchImageLoader._purgeStack(c);a.asynchImageLoader._launchCallback(c,d);if(d.event==="load+scroll"){d.event="scroll";a.asynchImageLoader.onEvent(d,c);}},d.timeout);},_launchCallback:function(c,d){if(c.length===0&&!a.jail.isCallback){d.callback.call(this,d);a.jail.isCallback=true;}},_loadImageIfVisible:function(d,g,f){var e=a(g),c=(/scroll/i.test(d.event))?f:b;if(a.asynchImageLoader._isInTheScreen(c,e,d.offset)){a.asynchImageLoader._loadImage(d,e);}},_isInTheScreen:function(j,c,h){var f=j[0]===window,n=(f?{top:0,left:0}:j.offset()),g=n.top+(f?j.scrollTop():0),i=n.left+(f?j.scrollLeft():0),e=i+j.width(),k=g+j.height(),m=c.offset(),l=c.width(),d=c.height();return(g-h)<=(m.top+d)&&(k+h)>=m.top&&(i-h)<=(m.left+l)&&(e+h)>=m.left;},_loadImage:function(c,d){d.hide();d.attr("src",d.attr("data-href"));d.removeAttr("data-href");if(c.effect){if(c.speed){d[c.effect](c.speed);}else{d[c.effect]();}}else{d.show();}c.callbackAfterEachImage.call(this,c);}};}(jQuery));
  
  
  
  /*
   * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
   * Copyright (c) 2008 George McGinley Smith and (c) 2001 Robert Penner
   * Open source under the BSD License. (http://www.opensource.org/licenses/bsd-license.php)
  */
  jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
  
  /*
   *
   * TERMS OF USE - EASING EQUATIONS
   *
   * Open source under the BSD License.
   *
   * Copyright ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 2001 Robert Penner
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without modification,
   * are permitted provided that the following conditions are met:
   *
   * Redistributions of source code must retain the above copyright notice, this list of
   * conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above copyright notice, this list
   * of conditions and the following disclaimer in the documentation and/or other materials
   * provided with the distribution.
   *
   * Neither the name of the author nor the names of contributors may be used to endorse
   * or promote products derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
   * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
   *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
   *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
   * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
   * OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   */
  
  
  // *****************************
  // typical day slideshow
  //******************************
  
  $('.tdSlideShow img').jail({event:'click'});
  
  $('div.schedule').hide();
  $('div#initialSchedule').show();
  
  // here we set the data placeholders to their defaults
  $('body').data('selGender', 'notSet');
  $('body').data('selAge', 'notSet');
  
  
  // this function handles updating the main display area based on what buttons the users push
  // it either displays the proper error message or one of the slideshows
  // it takes it's parameters from the 2 data properties selGender and selAge
  function updateSlideshow(selectedGender,selectedAge) {
    //alert('gender is: ' + selectedGender + ' and  age is: ' + selectedAge);
    if (selectedGender == 'notSet') {
      $('div.genderError').show().siblings().hide();
    }else if (selectedAge == 'notSet') {
      $('div.ageError').show().siblings().hide();
    }else{
      //alert('gender is: ' + selectedGender + ' and  age is: ' + selectedAge);
  
      // next we show the correct slideshow and reset it then hide all others
      $('div#slideShow-' + selectedGender + '-' + selectedAge).siblings().hide();
      $('div#slideShow-' + selectedGender + '-' + selectedAge).show().flexslider(0);
  
      // also show the correct schedule below the TD slideshow
      $('div.schedule').hide();
      $('div#schedule-' + selectedAge).show();
  
      // also change the name of the second item depending on the age+gender selection
      //Enrichment <br/>Centers
  
      if (selectedAge == "preKaK") {
        $('ul#tdSlideShowNav li#variableSlot a span').html("Enrichment <br/>Centers");
      }else{
        $('ul#tdSlideShowNav li#variableSlot a span').html("Choice <br/>Time");
      };
  
      // load the first slide's description in the HTML
      var slideDescription = $('.tdSlideShow:visible img:visible').attr('data-description');
      if (slideDescription== "") {
        slideDescription = "Missing description! Please add one in the manager.";
      }
       $('.slideDescription').html( '<p>' + slideDescription + '</p>');
  
      $('#tdSlideShowNav').removeClass();// this makes the "Inactive" styling go away
      $('div.tdSlideshowNavCover').css("display", "none"); // and moves the blinder div up so we can now click on the nav buttons
      // we show the slide description and vertically align the text within
      $('div.slideDescription').show().children('p').vAlign();
      // also make the previous and next buttons visible now
      $('a#prev2, a#next2').show();
  
      // we trigger the preloading of the images inside of the slideshow
      $('#slideShow-' + selectedGender + '-' + selectedAge + ' img').click();
      // and we make the first nav button active.
      $('#tdSlideShowNav li:first').addClass('activeSlide').siblings().removeClass();
    };
  
  }
  // below are the two click handlers, one for age one fore gender
  $('ul.genderSelector li a').click(function(){
    $('ul.genderSelector li a').removeClass();
    $(this).addClass('tdButtonSelected');
    $('body').data('selGender', $(this).attr('id'));
    updateSlideshow($('body').data('selGender'),$('body').data('selAge'));
    return false;
  });
  $('ul.ageSelector li a').click(function(){
    $('ul.ageSelector li a').removeClass();
    $(this).addClass('tdButtonSelected').siblings().removeClass();
    $('body').data('selAge', $(this).attr('id'));
    updateSlideshow($('body').data('selGender'),$('body').data('selAge'));
    return false;
  });
  
  // this part initializes all the 6 slideshows
  $('.tdSlideShow').flexslider({
    directionNav: false, 
    slideshow: false,
    before: function() {// this part assures user won't click any more buttons while animation is playing
      $('div.tdSlideshowNavCover').css("display", "block");
    },
    after: function(slider) {
      $('div.tdSlideshowNavCover').css("display", "none");
      var slideDescription = $('.tdSlideShow:visible img:visible').attr('data-description');
      if (slideDescription== "") {
        slideDescription = "Missing description! Please add one in the manager.";
      }
      $('.slideDescription').html( '<p>' + slideDescription + '</p>');
      $('.slideDescription p').vAlign();// we center the description vertically
    }
  });
  
  // below are the click handlers for the previous & next buttons
  $('#prev2').click(function(){
    //alert ($('#tdSlideShowNav li').index($('.activeSlide')));
    var currentSlideIndex = $('#tdSlideShowNav li').index($('.activeSlide'));
    if (currentSlideIndex>0) {
      $('#tdSlideShowNav li').removeClass();
      $('.tdSlideShow:visible').flexslider('prev');
      $('#tdSlideShowNav li:nth-child(' + currentSlideIndex +')').addClass('activeSlide');
      return false;
    };
    return false;
  });
  $('#next2').click(function(){
    var currentSlideIndex = $('#tdSlideShowNav li').index($('.activeSlide'));
    if (currentSlideIndex<7) {
      var nextSlideIndex = currentSlideIndex + 2;
      $('#tdSlideShowNav li').removeClass();
      $('.tdSlideShow:visible').flexslider('next');
      $('#tdSlideShowNav li:nth-child(' + nextSlideIndex +')').addClass('activeSlide');
      return false;
    };
    return false;
  });
  
  // and this part  is for the slideshow navigation
  $('#tdSlideShowNav li a').each(function(index){
    $(this).click(function(){
      
      $(this).parent().addClass('activeSlide').siblings().removeClass();
      $('.tdSlideShow:visible').flexslider(index);
      return false;
    });
  });
  // end typical day page code