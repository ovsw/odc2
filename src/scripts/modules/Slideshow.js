function slideshow(slidesSel, fadeInDur = 1, fadeOutDur = 1, singleSlide = false) {
  // set properties
  var singleSlide = singleSlide;
  if (singleSlide == false) {
     var repeat = -1;
  }else{
    var repeat = 0;
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
      slideTl = animateSingleSlide( slideEl, slideTl, fadeInDur, fadeOutDur );
    }else{
      // animate the slide as part of the slideshow
      slideTl = animateSlide( slideEl, slideTl, fadeInDur );
    }

    // add it to the collection of timelines to be added to master timeline
    tlArray.push(slideTl);
  });

  // add all the individual timelines to the master one
  masterTl.add(tlArray , 0, "sequence"); // optionally add stagger as last parameter
}


function animateSlide( slideEl, slideTl, fadeInDur, fadeOutDur ) {
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
}

function animateSingleSlide( slideEl, slideTl, fadeInDur ) {
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

// slideshow
if ($('.text-slideshow__slide').length > 1) {
  var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1); 
}else{
  var hpSlideshow = new slideshow('.text-slideshow__slide', 3, 1, true);
}