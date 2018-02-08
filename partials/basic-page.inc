<div class="basic-page__hero-wrapper">
  <div class="basic-page__hero large-hero large-hero--smaller">
    <?php $videoSource = $pages->get("1"); ?>
    <video class="large-hero__video-bg" playsinline autoplay muted loop poster="http://odcv-ac97.kxcdn.com/<?= $videoSource->video_name ?>-video-cover.jpg">
      <source src="http://odcv-ac97.kxcdn.com/<?= $videoSource->video_name ?>.mp4" type="video/mp4">
      <source src="http://odcv-ac97.kxcdn.com/<?= $videoSource->video_name ?>.ogv" type="video/ogg">
      <source src="http://odcv-ac97.kxcdn.com/<?= $videoSource->video_name ?>.webm" type="video/webm">
    </video> 
    <!-- /.large_hero__video-bg -->
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