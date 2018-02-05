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

<?php $campName = $page->parents("template=camp")->first()->title ?>

<h1 class="basic-page__hero-title"><span><?= $page->title ?></span> - <?= $campName ?></h1>

<div class="basic-page__wrapper rte_wrapper">
      
      <div class="posts-list__text">
        <h2 class="posts-list__title"><?= $page->title ?></h2>
        <h3 class="posts-list__date"><?= $page->event_date ?></h3>
        
          <?= $page->short_description; ?>

          <h3>Event RSVP Form</h3>

          <div class="cognito">
          <script src="https://services.cognitoforms.com/s/xPoircp7HEGoNo_tpFEirg"></script>
          <script>Cognito.load("forms", { id: "115", entry: { "CampName": "<?= $campName ?>", "EventName": "<?= $page->title ?>", "EventDate": "<?= $page->event_date ?>"}});</script>
          </div>
        
      </div>
    </div>  
  </div>

</div>
<!-- /.basic-page__wrapper -->