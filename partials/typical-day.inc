<?php

function listTdImages($imageSet) {
	echo '<ul class="slides">';
	if(count($imageSet)) {
		    foreach($imageSet as $image) {
				$imageUrl = $image->getCrop("typical_day_size") ? $image->getCrop("typical_day_size")->url : $image->size(932,402)->url;
				echo "<li><img class='photo' src='{$imageUrl}' data-description='{$image->description}' alt='{$image->description}' /></li>";					
			}// end foreach
	}
	if(!count($imageSet) || count($imageSet)<8){
		$missingImages = count($imageSet) ? 8-count($imageSet) : 8;
		echo str_repeat("<li><img class='photo' src='/site/templates/images/typicalDay/858x370.gif' data-description='Missing image! Please add one in the manager.' alt='placeholder' /></li>", $missingImages);
	}
	echo '</ul>';
}// end listTdImages
?>

<div class="td__wrapper">


  <div class="mainColumnRight typicalDayColumn">
          <h1>
            <?= $page->get("headline|title");?>
          </h1>
    
    <div class="tdSlideShowOuterWrap">
      <div class="tdTopWrapper">
        <ul class="genderSelector">
          <li><a href="#" id="b">Boy</a></li>
          <li><a href="#" id="g">Girl</a></li>
        </ul>
        <ul class="ageSelector">
          <li><a href="#" id="preKaK">PRE-K &amp; K</a></li>
          <li><a href="#" id="a13">1<sup>st</sup> to 3<sup>rd</sup> grades</a></li>
          <li><a href="#" id="a46">4<sup>th</sup> to 6<sup>th</sup> grades</a></li>
        </ul>
      </div>
      <!-- end tdTopWrapper -->
      <div class="tdSlideShowWrap">
        <div class="welcomeMessage"><img src="<?= $config->urls->templates?>app/assets/images/typicalDay/typicalDayStart.jpg" /></div>
        <div class="ageError"><img src="<?php echo $config->urls->templates?>app/assets/images/typicalDay/typicalDayAgeError.jpg" /></div>
        <div class="genderError"><img src="<?php echo $config->urls->templates?>app/assets/images/typicalDay/typicalDayGenderError.jpg" /></div>
        <!-- <div class="welcomeMessage"><img src="<?= $config->urls->templates?>app/assets/images/typicalDay/typicalDayStart.jpg" /></div>
        <div class="ageError"><img src="<?php echo $config->urls->templates?>app/assets/images/typicalDay/typicalDayAgeError.jpg" /></div>
        <div class="genderError"><img src="<?php echo $config->urls->templates?>app/assets/images/typicalDay/typicalDayGenderError.jpg" /></div> -->
        <div class="tdSlideShow flexslider" id="slideShow-b-preKaK">
          <?php
            listTdImages($page->td_b_age1);
          
          ?>
        </div>
        <div class="tdSlideShow flexslider" id="slideShow-b-a13">
          <?php
            listTdImages($page->td_b_age2);
          ?>
        </div>
        <div class="tdSlideShow flexslider" id="slideShow-b-a46">
          <?php
            listTdImages($page->td_b_age3);
          ?>
        </div>
        <div class="tdSlideShow flexslider" id="slideShow-g-preKaK">
          <?php
            listTdImages($page->td_g_age1);
          ?>
        </div>
        <div class="tdSlideShow flexslider" id="slideShow-g-a13">
          <?php
            listTdImages($page->td_g_age2);
          ?>
        </div>
        <div class="tdSlideShow flexslider" id="slideShow-g-a46">
          <?php
            listTdImages($page->td_g_age3);
          ?>
        </div>
        <a href="#" id="prev2">prev</a> <a href="#" id="next2">next</a>
      </div>
      <div class="slideshowNavWrap">
      <div class="slideshownavWrapper2">
        <div class="tdSlideshowNavCover"> </div>
        <ul id="tdSlideShowNav" class="tdInactiveButtons">
          <li><a href="#"><span >Arrival &amp;<br/>Rally</span></a></li>
          <li id="variableSlot"><a href="#"><span >Depends <br/>on age</span></a></li>
          <li><a href="#"><span>Sports &amp; <br/>Games</span></a></li>
          <li id="thirdButton"><a href="#"><span>Creative <br/> Arts</span></a></li>
          <li><a href="#"><span>Performing <br/> Arts</span></a></li>
          <li><a href="#"><span>Outdoor <br/>Adventure</span></a></li>
          <li><a href="#"><span class="oneLine">Swim</span></a></li>
          <li id="last"><a href="#"><span>Special <br />Events</span></a></li>
          <!-- class="oneLine" -->
        </ul>
        </div>
        <div class="slideDescription"> </div>
      <!-- end .slideDescription--> 
      </div>
      <!-- end slideshowNavWrap -->
      
      
      </div>
    <!-- end .tdSlideShowOuterWrap -->
    <div class="singleColumnContent">
      <div class="singleColumnContentInner" style="padding-top:40px;">
        <div class="schedule" id="initialSchedule"><?= $page->body; ?></div>

        <div class="schedule" id="schedule-preKaK">
          <?= $page->td_schedule_b_g_age1 ?>
        </div>
        
        <div class="schedule" id="schedule-a13">
          <?= $page->td_schedule_b_g_age2 ?>
        </div>
      
        <div class="schedule" id="schedule-a46">
          <?= $page->td_schedule_b_g_age3 ?>
        </div>
      

      </div>
      <!-- /.singleColumnContentInner -->
    </div>
    <!-- /.singleColumnContent -->
  </div>
  <!-- /.typicalDayColumn -->

</div>
<!-- /.td__wrapper -->