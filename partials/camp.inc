    <div class="large-hero">

      <video class="large-hero__video-bg" autoplay muted loop>
        <source src="<?= $config->urls->templates ?>app/assets/video/oasis-children-all-camps-intro.mp4" type="video/mp4">
      </video>
      <!-- /.large_hero__video-bg -->
      
      <div class="large-hero__content">
        
        <div class="large-hero__top-area">
          <div class="text-slideshow">
            <h1 class="text-slideshow__slide">Welcome to Oasis</h1>
          </div>
          <!-- /.text-slideshow -->
        </div>
        <!-- /.large-hero__slideshow-wrapper -->
      
        <?php 
          $blocks = $page->children("template=long-format")->first()->repeater_matrix;
          $nof_programs = 0;
          foreach ( $blocks as $block ) {
            if ($block->type == "program") {$nof_programs++;}
          }
        ?>

        <div class="large-hero__bottom-area">
          <div class="cards">
            <?php foreach ( $blocks as $block ) : ?>

              <?php if ($block->type == 'program') : ?>
                
                <div class="cards__card-wrapper of-<?= $nof_programs ?>">
                  <div class="cards__card">
                    <div class="cards__cardface cards__cardface-front">
                      <h2 class="cards__title cards__title--program"><?= $block->menu_title ?></h2>
                      <a href="tel:{{ camp.tel }}" class="cards__subtitle"><?= $block->program_ages ?></a>
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

              <?php endif; ?>

            <?php endforeach; ?>
          </div>
          <!-- /.cards -->

          <div class="cards">

            <div class="cards__card-wrapper of-6">
              <div class="cards__card">
                <div class="cards__cardface cards__cardface-front cards__cardface-front--secondary">
                  <h2 class="cards__title">Director's Corner</h2>
                  <span class="cards__subtitle cards__subtitle--smaller">Blog</span>
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

            <?php foreach ( $blocks as $block ) : ?>

              <?php if ($block->type == 'section_heading' || $block->type == 'rich_text_with_image_5050' || $block->type = 'rich_text_no_image') : ?>

                <?php if ($block->featured) : ?>
                
                  <div class="cards__card-wrapper of-6">
                    <div class="cards__card">
                      <div class="cards__cardface cards__cardface-front cards__cardface-front--secondary">
                        <h2 class="cards__title"><?= $block->title ?></h2>
                        <span class="cards__subtitle cards__subtitle--smaller"><?= $block->tagline ?></span>
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
                
                <?php endif; ?>

              <?php endif; ?>

            <?php endforeach; ?>

            <div class="cards__card-wrapper of-6">
              <div class="cards__card">
                <div class="cards__cardface cards__cardface-front cards__cardface-front--secondary">
                  <h2 class="cards__title">See a Typical Day</h2>
                  <span class="cards__subtitle cards__subtitle--smaller">at Oasis</span>
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

          </div>
          <!-- /.cards -->
          
        </div>
        <!-- /.large-hero__bottom-area -->
      </div>
      <!-- /.large-hero__wrapper -->

    </div>
    <!-- /.large_hero -->
    
    <div class="overlay">
      <div class="overlay__content">
      
      </div>
      <!-- /.overlay__content -->
    </div>
    <!-- /.overlay -->

    <div class="card-details__wrapper">
      <?php foreach ($blocks as $camp) : ?>

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