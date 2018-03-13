<?php $videoSource = $page->parents('template=camp')->first(); ?>
<?php require($config->paths->templates."includes/modules/video-bg-events.inc"); ?>

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