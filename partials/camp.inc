    <?php require($config->paths->templates.'includes/modules/popup.inc'); ?>

    <div class="large-hero large-hero--full-height" style="background: url('http://odcv-ac97.kxcdn.com/<?= $page->video_name ?>-video-cover.jpg') no-repeat center center;background-size:cover;">

      <video class="large-hero__video-bg" playsinline autoplay muted loop poster="http://odcv-ac97.kxcdn.com/<?= $page->video_name ?>-video-cover.jpg">
        <source src="http://odcv-ac97.kxcdn.com/<?= $page->video_name ?>.mp4" type="video/mp4">
        <source src="http://odcv-ac97.kxcdn.com/<?= $page->video_name ?>.ogv" type="video/ogg">
        <source src="http://odcv-ac97.kxcdn.com/<?= $page->video_name ?>.webm" type="video/webm">
      </video> 
      <!-- /.large_hero__video-bg -->
      
      <div class="large-hero__content">
        
        <div class="large-hero__top-area">
          <div class="text-slideshow">
            <h1 class="text-slideshow__slide"><span>Welcome to</span> Oasis in <?= $page->title ?></h1>
          </div>
          <!-- /.text-slideshow -->
        </div>
        <!-- /.large-hero__slideshow-wrapper -->
      
        <?php
          $aboutPage = $page->children("template=long-format")->first();
          $blocks = $aboutPage->repeater_matrix;
          $nof_programs = 0;
          foreach ( $blocks as $block ) {
            if ($block->type == "program") {$nof_programs++;}
          }
        ?>

        <div class="large-hero__bottom-area">
          <div class="cards">
            <?php foreach ( $blocks as $block ) : ?>

              <?php if ($block->type == 'program') : ?>
                
                <div class="cards__card-wrapper with-lightbox of-<?= $nof_programs ?>">
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

            <a class="cards__card-wrapper noflip of-6" href="<?= $page->children("template=camp-blog-home")->first()->url ?>">
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
            </a>
            <!-- /.cards__card-wrapper -->

            <?php foreach ( $blocks as $block ) : ?>

              <?php if ($block->type == 'section_heading' || $block->type == 'rich_text_with_image_5050' || $block->type = 'rich_text_no_image') : ?>

                <?php if ($block->featured) : ?>
                
                  <a class="cards__card-wrapper noflip of-6" href="<?= $aboutPage->httpUrl."#".createSlug($block->title) ?>">
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
                  </a>
                  <!-- /.cards__card-wrapper -->
                
                <?php endif; ?>

              <?php endif; ?>

            <?php endforeach; ?>

            <a class="cards__card-wrapper noflip of-6" href="<?= $page->children("template=basic-page")->first()->url ?>">
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
            </a>
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
      <?php foreach ($blocks as $block) : ?>
        
        <?php if ($block->type == 'program') : ?>

          <div class="card-details">
            <div class="card-details__headings">
              <p class="card-details__heading-intro">Program:</p>
              <h2 class="card-details__heading"><?= $block->menu_title ?></h2>
            </div>
            <!-- /.headings -->

            <?php if ($block->video_url != "") : ?>
            <div class="card-details__video"  data-videourl="<?= $block->video_url ?>">
            <div class='embed-container'></div>
            </div>
            <!-- /.card-details__video -->
            <?php else : ?>
            <div class="card-details__video card-details__video--novideo">
              <div class='embed-container'><img src="<?= $block->video_placeholder_img->getCrop('video-sized-crop')->url  ?>" alt="<?= $block->video_placeholder_img->description ?>"></div> 
              
            </div>
            <!-- /.card-details__video -->
            <?php endif; ?>

            <div class="card-details__content">

            <div class="card-details__solo-description">

              <p><?= $block->card_description ?></p>

            </div>
            <!-- /.card-details__solo-description -->

                <div class="card-details__buttons">
                  <a href="#" class="button button__cancel card-details__back-btn">back</button>
                  <a href="<?= $aboutPage->httpUrl."#".createSlug($block->title) ?>" class="button button__cta card-details__learn-more-btn">Learn More ></button>
                  <a class="card-details__back-link" href="#">< or select another camp</a>
                  <a class="card-details__close-link" href="#">close</a>
                </div>
                <!-- /.card-details__buttons -->
            </div>
            <!-- /.card-details__content -->
          </div>
          <!-- /.card-details -->

        <?php endif ?>

      <?php endforeach; ?>

    </div>
    <!-- /.card-details__wrapper -->