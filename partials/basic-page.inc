<div class="basic-page__hero">
  <picture>

    <source srcset="<?= $page->hero_image->getCrop('crop-large-screen')->url." ".$page->hero_image->getCrop('crop-large-screen')->width."w" ?>" media="(min-width: 1200px)">

    <source srcset="<?= $page->hero_image->getCrop('crop-medium-screen')->url." ".$page->hero_image->getCrop('crop-medium-screen')->width."w" ?>" media="(min-width: 640px)">

    <img src="<?= $page->hero_image->getCrop('crop-mobile-screen')->url ?>" alt="<?= $page->hero_image->description ?>">
  </picture>
  <!-- <div class="basic-page__hero-screen"></div> -->
  <h1 class="basic-page__hero-title"><span>Oasis Day Camp</span> - <?= $page->title ?></h1>
</div>
<!-- /.basic-page__hero -->

<div class="basic-page__wrapper rte_wrapper">

  <?= $page->body ?>

</div>
<!-- /.basic-page__wrapper -->