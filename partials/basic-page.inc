<div class="basic-page__hero-wrapper">
  <div class="basic-page__hero large-hero large-hero--smaller">
   <?php require($config->paths->templates."includes/modules/video-bg-hp.inc") ?>
  </div>
  <!-- /.basic-page__hero -->
</div>
<!-- /.basic-page__hero-wrapper -->

<h1 class="basic-page__hero-title"><span>Oasis Day Camp</span> - <?= $page->title ?></h1>

<div class="basic-page__wrapper rte_wrapper">

  <?php if( $page->template == "contact") {
    $map = $modules->get('MarkupGoogleMap');
    echo $map->render($page, 'contact_map', array('height' => '500px', 'type' => 'ROADMAP', 'markerTitleField' => $page->contact_map->address));
  }?>
  <?= $page->body ?>

</div>
<!-- /.basic-page__wrapper -->