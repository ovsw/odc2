    <div class="large-hero">

      <video class="large-hero__video-bg" autoplay muted loop>
        <source src="<?= $config->urls->templates ?>app/assets/video/oasis-children-all-camps-intro.mp4" type="video/mp4">
      </video>
      <!-- /.large_hero__video-bg -->
      
      <div class="large-hero__content">
        
        <div class="large-hero__top-area" >
          <div class="text-slideshow">
            <h1 class="text-slideshow__slide">Play, Learn, Grow</h1>
            <h1 class="text-slideshow__slide">Second Slide</h1>
            <h1 class="text-slideshow__slide">Third Slide</h1>
            <h1 class="text-slideshow__slide">Fourth Slide</h1>
            <h1 class="text-slideshow__slide">Fifth Slide</h1>
          </div>
          <!-- /.text-slideshow -->
        </div>
        <!-- /.large-hero__slideshow-wrapper -->
      
        <?php $camps = $pages->get('1015')->children(); ?>

        <div class="large-hero__bottom-area">
          <div class="cards">
            <?php foreach ( $camps as $camp ) : ?>
            	<div class="cards__card-wrapper">
                <div class="cards__card">
                  <div class="cards__cardface cards__cardface-front">
                    <h2 class="cards__title"><?= $camp->title ?></h2>
                    <a href="tel:{{ camp.tel }}" class="cards__subtitle"><?= $camp->phone_no ?></a>
                  </div>
                  <!-- /.cards__cardface -->
                  <div class="cards__cardface cards__cardface-back">
                    <h2 class="cards__title">back of card</h2>
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
                  <?= $camp->card_programs ?>
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