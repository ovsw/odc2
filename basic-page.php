<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?= $page->title ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>
      WebFont.load({
        google: {
          families: ['PT Sans', 'Open Sans', 'Josefin Sans']
        }
      });
    </script>

    <script src="<?= $config->urls->templates ?>vendor/fontawesome-all.min.js"></script>

    <link rel="stylesheet" href="<?= $config->urls->templates ?>app/temp/styles/styles.css" />
  </head>
  <body>
    <!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->

    <header class="header">
      <a href="/" class="header__logo"><img src="<?= $config->urls->templates ?>app/assets/images/oasis-children_logo.svg" alt="Oasis Children Logo" class="header__logo-img" ></a>

      <div class="top-nav">
        <?php 
          $topMenu = $modules->get("MarkupSimpleNavigation");
          $topMenuRootPage = $pages->get('1042');
          $topMenuOptions = array(
            'parent_class' => 'top-nav__parent',
            'current_class' => 'top-nav__current',
            'has_children_class' => 'top-nav__has-children',
            'levels' => true,
            'levels_prefix' => 'top-nav__item-level-',
            'max_levels' => 2,
            'firstlast' => true,
            'collapsed' => false,
            'show_root' => false,
            'selector' => '',
            'selector_field' => 'nav_selector',
            'outer_tpl' => '<ul class="top-nav__outer-list">||</ul>',
            'inner_tpl' => '<ul class="top-nav__inner-list">||</ul>',
            'list_tpl' => '<li%s>||</li>',
            'list_field_class' => '{template}',
            'item_tpl' => '<a href="{link_url|url}">{title}<i class="fas fa-angle-down"></i></a>',
            'item_current_tpl' => '<a href="{link_url|url}">{title}</a>',
            'code_formatting' => true,
            'debug' => false
        );
          echo $topMenu->render($topMenuOptions, null, $topMenuRootPage); ?>
      </div>
      <!-- /.top-nav -->
    </header>
    <!-- /.header -->

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

    <div class="camp-details__wrapper">
      <?php foreach ($camps as $camp) : ?>

        <div class="camp-details">
        <div class="camp-details__headings">
          <p class="camp-details__heading-intro">Oasis at</p>
          <h2 class="camp-details__heading"><?= $camp->title ?></h2>
        </div>
        <!-- /.headings -->

        <div class="camp-details__video">
          <div class='embed-container'><iframe src='https://player.vimeo.com/video/113165477?autoplay=0&title=0&byline=0&portrait=0' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
        </div>
        <!-- /.camp-details__video -->

        <div class="camp-details__content">
          <div class="tabs">

            <ul class="tabs__buttons">
              <li class="button tabs__button tabs__button--campdetails-tab active" data-tab="tab1">Programs</li>
              <li class="button tabs__button tabs__button--campdetails-tab" data-tab="tab2">About</li>
            </ul>
            <!-- /.tabs__buttons -->
            
            <div class="tabs__content"> 

              <div class="tabs__tab active tab1">
                <div class="camp-details__programs">
                  <?= $camp->card_programs ?>
                </div>
                <!-- /.camp-details__programs -->
              </div>
              <!-- /.tabs__tab -->

              <div class="tabs__tab tab2">
                <div class="camp-details__description">
                  <?= $camp->card_description ?>
                </div>
                <!-- /.camp-details__programs -->
              </div>
              <!-- /.tabs__tab -->
            </div>
            <!-- /.tabs__content -->

          </div>
          <!-- /.tabs -->
            <div class="camp-details__buttons">
              <a href="#" class="button button__cancel camp-details__back-btn">back</button>
              <a href="<?= $camp->httpUrl ?>" class="button button__cta camp-details__learn-more-btn">Learn More ></button>
              <a class="camp-details__back-link" href="#">< or select another camp</a>
              <a class="camp-details__close-link" href="#">close</a>
            </div>
            <!-- /.camp-details__buttons -->
        </div>
        <!-- /.camp-details__content -->
      </div>
      <!-- /.camp-details -->
      <?php endforeach;?>

    </div>
    <!-- /.card-details-container -->

  </body>
  <script src="<?= $config->urls->templates ?>app/temp/scripts/App.js"></script>
</html>