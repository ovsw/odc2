var Slideshows = {
  
  init: function () {

    if ($('.text-slideshow__slide').length > 1) {
      this.hpSlideshow = this.makeSlideshow('.text-slideshow__slide', 3, 1); 
    }else{
      this.hpSlideshow = this.makeSlideshow('.text-slideshow__slide', 3, 1, true);
    }

  },


  makeSlideshow : function (slidesSel, fadeInDur = 1, fadeOutDur = 1, singleSlide = false) {
    // set properties

    var repeat = 0;
    var singleSlideSetting = singleSlide;

    if (singleSlideSetting == false) {
      repeat = -1;
    }

    var slideEls = $(slidesSel);
    //var fadeInDur = fadeInDur;
    //var fadeOutDur = fadeOutDur;
    var masterTl = new TimelineLite({repeat: repeat});
    var tlArray = []; // array to store the timeline of each slide
  
    // create a timeline for each slide
    $(slideEls).each(function(i,slideEl){
      var slideTl = new TimelineLite();
  
      if (singleSlide) {
        // do single animation in
        slideTl = Slideshows.animateSingleSlide( slideEl, slideTl, fadeInDur, fadeOutDur );
      }else{
        // animate the slide as part of the slideshow
        slideTl = Slideshows.animateSlide( slideEl, slideTl, fadeInDur );
      }
  
      // add it to the collection of timelines to be added to master timeline
      tlArray.push(slideTl);
    });
  
    // add all the individual timelines to the master one
    masterTl.add(tlArray , 0, "sequence"); // optionally add stagger as last parameter
  },

  animateSlide : function ( slideEl, slideTl, fadeInDur, fadeOutDur ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    ).to(slideEl,
       fadeOutDur, // fade out dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0
      }, '+=2' // time to stay visible
    );
    return slideTl;
  },

  animateSingleSlide : function ( slideEl, slideTl, fadeInDur ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    );
    return slideTl;
  }

};
