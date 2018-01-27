<div class="long-format__hero">
    <h1><span>About Oasis in</span> <?= $page->parent->title ?></h1>
</div>
<!-- /.long-format__hero -->

<div class="long-format__wrapper">

  <?php foreach($page->repeater_matrix as $block) : ?>

  <?php if($block->type == 'section_heading') : ?>

      <div class="mx-section-heading">
      <h2><?= $block->title ?></h2>
      </div>
      <!-- /.mx-section-heading -->

    <?php elseif ($block->type == 'rich_text_with_image_5050') : ?>

      <div class="mx-rt-image">

      <div class="mx-rt-image__text-content">
        <h3 class="mx-rt-image__title"><?= $block->title ?></h3>
        <?= $block->rich_text ?>
      </div>
      <!-- /.mx-rt-image__text-content -->

      <div class="mx-rt-image__image-wrapper">
        <img src="<?= $block->matrix_single_image->getCrop("square_large")->url ?>" alt="$block->matrix_single_image->description">
      </div>
      <!-- /.mx-rt-image__image-wrapper -->
      
    </div>
    <!-- /.mx-rt-image -->

    <?php endif; ?>

  <?php endforeach; ?>

</div>
<!-- /.long-format__wrapper -->