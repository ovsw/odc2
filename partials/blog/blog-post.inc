<div class="basic-page__hero-wrapper">
  <div class="basic-page__hero large-hero large-hero--smaller">
    <?php $videoSource = $page->parents("template=camp")->first(); ?>
    <video class="large-hero__video-bg" autoplay muted loop>
      <source src="<?= $videoSource->bg_video_url ?>" type="video/mp4" poster="<?= $videoSource->bg_video_poster_url ?>">
    </video>
        <!-- /.large_hero__video-bg -->
  </div>
  <!-- /.basic-page__hero -->
</div>
<!-- /.basic-page__hero-wrapper -->

<h1 class="basic-page__hero-title"><span>Oasis Day Camp</span> - <?= $page->title ?></h1>

<div class="basic-page__wrapper rte_wrapper">
<a href="<?= $page->parents("template=camp-blog-home")->first()->url ?>" class="back-to-blog">< back to blog home</a>
  <?= $page->body ?>

</div>
<!-- /.basic-page__wrapper -->
