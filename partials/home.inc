    <div class="large-hero">

      <video class="large-hero__video-bg" playsinline autoplay muted loop>
        <source src="<?= $page->bg_video_url ?>" type="video/mp4" poster="<?= $page->bg_video_poster_url ?>">
      </video>
      <!-- /.large_hero__video-bg -->
      
      <div class="large-hero__content">
        
        <div class="large-hero__top-area" >
          <div class="text-slideshow">
            <h1 class="text-slideshow__slide">Amazing Summers, Lifelong Friends!</h1>
            <h1 class="text-slideshow__slide">Spirit</h1>
            <h1 class="text-slideshow__slide">Community</h1>
            <h1 class="text-slideshow__slide">Play, Learn, Grow</h1>
            <h1 class="text-slideshow__slide">Where Friends become Family</h1>
          </div>
          <!-- /.text-slideshow -->
        </div>
        <!-- /.large-hero__slideshow-wrapper -->
      
        <?php $camps = $pages->get('1015')->children(); $i = 0;?>

        <div class="large-hero__bottom-area">
          <div class="cards">
            <?php foreach ( $camps as $camp ) : ?>
              <?php $i++; $alternateClass = ($i % 2 == 0) ? " cards__card-wrapper--alternate" : "";  ?>
                
            	<div class="cards__card-wrapper with-lightbox<?= $alternateClass ?>">
                <div class="cards__card">
                  <div class="cards__cardface cards__cardface-front">
                    <h2 class="cards__title"><?= $camp->title ?></h2>
                    <a class="cards__subtitle" href="tel:<?= $camp->phone_no ?>"><?= $camp->phone_no ?></a>
                  </div>
                  <!-- /.cards__cardface -->
                  <div class="cards__cardface cards__cardface-back">
                    <h2 class="cards__title--back">Learn More</h2>
                  </div>
                  <!-- /.cards__cardface -->
                </div>
                <!-- /.cards__card -->
              </div>
              <!-- /.cards__card-wrapper -->
            <?php endforeach; ?>
          </div>
          <!-- /.cards -->
        </div>
        <!-- /.large-hero__bottom-area -->
      </div>
      <!-- /.large-hero__wrapper -->

    </div>
    <!-- /.large_hero -->
    
    <div class="overlay" style="">
      <div class="overlay__content">
      
      </div>
      <!-- /.overlay__content -->
    </div>
    <!-- /.overlay -->

    <div class="card-details__wrapper">
      <?php foreach ($camps as $camp) : ?>

        <div class="card-details">
        <div class="card-details__headings">
          <p class="card-details__heading-intro">Oasis at</p>
          <h2 class="card-details__heading"><?= $camp->title ?></h2>
        </div>
        <!-- /.headings -->

        <div class="card-details__video" data-videourl="<?= $camp->video_url ?>">
          <div class='embed-container'></div>
        </div>
        <!-- /.card-details__video -->

        <div class="card-details__content">
          <div class="tabs">

            <ul class="tabs__buttons">
              <li class="button tabs__button tabs__button--campdetails-tab active" data-tab="tab1">Programs</li>
              <li class="button tabs__button tabs__button--campdetails-tab" data-tab="tab2">About</li>
            </ul>
            <!-- /.tabs__buttons -->
            
            <div class="tabs__content"> 

              <div class="tabs__tab active tab1">
                <div class="card-details__programs">
                  <ul>
                    <?php foreach ($camp->camp_programs as $program) : ?>
                    <li><strong><?= $program->long_name != "" ? $program->long_name : $program->title ?></strong> (<?= $program->program_ages ?>)</li>
                    <?php endforeach; ?>
                  </ul>
                </div>
                <!-- /.card-details__programs -->
              </div>
              <!-- /.tabs__tab -->

              <div class="tabs__tab tab2">
                <div class="card-details__description">
                  <?= $camp->card_description ?>
                </div>
                <!-- /.card-details__programs -->
              </div>
              <!-- /.tabs__tab -->
            </div>
            <!-- /.tabs__content -->

          </div>
          <!-- /.tabs -->
            <div class="card-details__buttons">
              <a href="#" class="button button__cancel card-details__back-btn">back</button>
              <a href="<?= $camp->httpUrl ?>" class="button button__cta card-details__learn-more-btn">Learn More ></button>
              <a class="card-details__back-link" href="#">< or select another camp</a>
              <a class="card-details__close-link" href="#">close</a>
            </div>
            <!-- /.card-details__buttons -->
        </div>
        <!-- /.card-details__content -->
      </div>
      <!-- /.card-details -->
      <?php endforeach; ?>

    </div>
    <!-- /.card-details-container -->