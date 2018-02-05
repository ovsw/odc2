<div class="basic-page__hero-wrapper">
  <div class="basic-page__hero large-hero large-hero--smaller">
    <?php $videoSource = $pages->get("1"); ?>
    <video class="large-hero__video-bg" autoplay muted loop>
      <source src="<?= $videoSource->bg_video_url ?>" type="video/mp4" poster="<?= $videoSource->bg_video_poster_url ?>">
    </video>
        <!-- /.large_hero__video-bg -->
  </div>
  <!-- /.basic-page__hero -->
</div>
<!-- /.basic-page__hero-wrapper -->

<h1 class="basic-page__hero-title"><span>Upcoming Events</span> - <?= $page->parents("template=camp")->first()->title ?></h1>

<div class="basic-page__wrapper rte_wrapper">

  <?php 
    $rt_block_counter = 0;
    $alternateClass = '';
  ?>


  <?php foreach ($page->children() as $event) : ?>
      
      <div class="posts-list__text">
        <h2 class="posts-list__title"><a href="<?= $event->url ?>"><?= $event->title ?></a></h2>
        <h3 class="posts-list__date"><a href="<?= $event->url ?>"><?= $event->date ?></a></h3>
        
          <?= $event->short_description; ?>

          <a href="<?= $event->url ?>" class="button button__cta"> RSVP / Learn more</a>
        
      </div>
    </div>  
  </div>

  <?php endforeach; ?>

</div>
<!-- /.basic-page__wrapper -->