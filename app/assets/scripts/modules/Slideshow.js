import $ from 'jquery';
import {TweenMax, TimelineLite, TimelineMax} from "gsap";

class Slideshow {

  constructor (slidesSel, fadeInDur = 1, fadeOutDur = 1, singleSlide = false) {
    // set properties
    this.singleSlide = singleSlide;
    if (this.singleSlide == false) {
      this.repeat = -1;
    }else{
      this.repeat = 0;
    }
    this.slideEls = $(slidesSel);
    this.fadeInDur = fadeInDur;
    this.fadeOutDur = fadeOutDur;
    this.masterTl = new TimelineMax({repeat: this.repeat});
    this.tlArray = []; // array to store the timeline of each slide

    this.createSlideTls(); // create timelines, one for each slide

    // add all the individual timelines to the master one
    this.masterTl.add(this.tlArray , 0, "sequence"); // optionally add stagger as last parameter
  }

  createSlideTls() {
    var self = this;
    
    // create a timeline for each slide
    $(this.slideEls).each(function(i,slideEl){
      var slideTl = new TimelineLite();

      if (self.singleSlide) {
        // do single animation in
        slideTl = self.animateSingleSlide( slideEl, slideTl );
      }else{
        // animate the slide as part of the slideshow
        slideTl = self.animateSlide( slideEl, slideTl );
      }

      
      // add it to the collection of timelines to be added to master timeline
      self.tlArray.push(slideTl);
    });
  }

  animateSlide( slideEl, slideTl ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       this.fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    ).to(slideEl,
       this.fadeOutDur, // fade out dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0
      }, '+=2' // time to stay visible
    );
    return slideTl;
  }

  animateSingleSlide( slideEl, slideTl ) {
    // complete animation for one slide
    slideTl.to(slideEl,
       this.fadeInDur, // fade in dur.
      {
      // ease: Bounce.easeOut,
      autoAlpha: 0.8
      }
    );
    return slideTl;
  }

}

export default Slideshow;