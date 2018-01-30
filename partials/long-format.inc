<div class="basic-page__hero">
  <picture>

    <source srcset="<?= $page->hero_image->getCrop('crop-large-screen')->url." ".$page->hero_image->getCrop('crop-large-screen')->width."w" ?>" media="(min-width: 1200px)">

    <source srcset="<?= $page->hero_image->getCrop('crop-medium-screen')->url." ".$page->hero_image->getCrop('crop-medium-screen')->width."w" ?>" media="(min-width: 640px)">

    <img src="<?= $page->hero_image->getCrop('crop-mobile-screen')->url ?>" alt="<?= $page->hero_image->description ?>">
  </picture>
  <!-- <div class="basic-page__hero-screen"></div> -->
  <h1 class="basic-page__hero-title"><span>About Oasis in</span> <?= $page->parent->title ?></h1>
</div>
<!-- /.basic-page__hero -->

<div class="basic-page__wrapper">

  <?php 
    $rt_block_counter = 0;
    $alternateClass = '';
    $section_header_counter = 0;
   ?>

  <?php foreach($page->repeater_matrix as $block) : ?>

  <?php if($block->type == 'section_heading') : ?>

    <?php $section_header_counter++; 
      $subsection_header_counter = 0;
    ?>

    <div class="mx__section-heading">

      <h2 class="mx__section-heading__title"><?= $section_header_counter.". ".$block->title." <span class='mx__section-heading__title-tagline'>".$block->tagline."</span>" ?></h2>
    </div>
    <!-- /.mx__section-heading -->

    <?php elseif (($block->type == 'rich_text_with_image_5050') || ($block->type == 'program')) : ?>

      <?php 
        $rt_block_counter++;
        $subsection_header_counter++;
        $alternateClass = $rt_block_counter % 2 == 0 ? " mx__rt-image-even" : ""; 
      ?>

      <div class="mx__rt-image<?= $alternateClass ?>" id="<?= createSlug($block->title) ?>">

        <div class="mx__rt-image__block-row">
          
          <div class="mx__rt-image__image-wrapper">
            <picture>
              <source srcset="<?= $block->matrix_single_image->getCrop("tall_large")->url ?>" media="(min-width: 600px)">
              <img class="mx__rt-image__image" src="<?= $block->matrix_single_image->getCrop("square_small")->url ?>" alt="<?= $block->matrix_single_image->description ?>">
            </picture>
          </div>
          <!-- /.mx__rt-image__image-wrapper -->
          
          <div class="mx__rt-image__text-content">
            <h3 class="mx__rt-image__title"><?= $section_header_counter.".".$subsection_header_counter." ".$block->title ?></h3> 
            <div class="mx__rt-image__rich-text">
              <?= $block->rich_text ?>
            </div>
            <!-- /.mx__rt-image__rich-text -->
          </div>
          <!-- /.mx__rt-image__text-content -->

        
        </div>
        <!-- /.mx__rt-image__block-row -->
      
      </div>
      <!-- /.mx__rt-image -->

    <?php elseif ($block->type == 'rich_text_no_image') : ?>

      <?php 
        $rt_block_counter++;
        $subsection_header_counter++;
        $alternateClass = $rt_block_counter % 2 == 0 ? " mx__rt-noimage-even" : ""; 
      ?>

      <div class="mx__rt-noimage<?= $alternateClass ?>" id="<?= createSlug($block->title) ?>">

        <div class="mx__rt-noimage__block-row">
          
          <div class="mx__rt-noimage__text-content">
            <h3 class="mx__rt-noimage__title"><?= $section_header_counter.".".$subsection_header_counter." ".$block->title ?></h3> 
            <div class="mx__rt-noimage__rich-text">
              <?= $block->rich_text ?>
            </div>
            <!-- /.mx__rt-noimage__rich-text -->
          </div>
          <!-- /.mx__rt-noimage__text-content -->


        </div>
        <!-- /.mx__rt-noimage__block-row -->

      </div>
      <!-- /.mx__rt-noimage -->

      <?php elseif ($block->type == 'faqs') : ?>

        <?php 
          $rt_block_counter++;
          $subsection_header_counter++;
          $alternateClass = $rt_block_counter % 2 == 0 ? " mx__rt-noimage-even" : ""; 
        ?>

        <div class="mx__faqs<?= $alternateClass ?>" id="<?= createSlug($block->title) ?>">

          <div class="mx__faqs__block-row">
            
            <div class="mx__faqs__text-content">
              <h3 class="mx__rt-noimage__title"><?= $section_header_counter.".".$subsection_header_counter." ".$block->title ?></h3> 
              
              <div class="mx__faqs__rich-text">
                <?php foreach ($block->faqs_repeater as $faq) : ?>
                  <div class="mx__faqs__faq-wrapper">
                    <div class="mx__faqs__question">
                      <h4 class="mx__faqs__question-text"><?= $faq->title ?></h4>
                    </div>
                    
                    <div class="mx__faqs__answer">
                      <?= $faq->rich_text ?>
                    </div>
                  </div>
                  <!-- /.mx__faqs__faq-wrapper -->
                <?php endforeach; ?>
              </div>
              <!-- /.mx__faqs__rich-text -->
            </div>
            <!-- /.mx__faqs__text-content -->


          </div>
          <!-- /.mx__faqs__block-row -->

        </div>
        <!-- /.mx__faqs -->

    <?php endif; ?>

  <?php endforeach; ?>

</div>
<!-- /.basic-page__wrapper -->