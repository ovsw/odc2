<?php $videoSource = $page->parents('template=camp')->first(); ?>
<?php require($config->paths->templates."includes/modules/video-bg-events.inc"); ?>

<h1 class="basic-page__hero-title"><span>Upcoming Events</span> - <?= $page->parents("template=camp")->first()->title ?></h1>

<div class="basic-page__wrapper rte_wrapper">

  <?php 
    $rt_block_counter = 0;
    $alternateClass = '';
    $events = $page->children();
  ?>

  <?php if (count($events) > 0) : ?>

  <?php foreach ($events as $event) : ?>
      
      <div class="posts-list__text">
        <h2 class="posts-list__title"><a href="<?= $event->url ?>"><?= $event->title ?></a></h2>
        <h3 class="posts-list__date"><a href="<?= $event->url ?>"><?= $event->date ?></a></h3>
        
          <?= $event->short_description; ?>
          <br>
          <a href="<?= $event->url ?>" class="button button__cta"> RSVP / Learn more</a>
        
      </div>
 

  <?php endforeach; ?>
</div> 

  <?php else : ?>

  <h2>Sorry, there are no events at this time.</h2>

  <p>Please try again later.</p>

  <br />
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <?php endif; ?>

</div>
<!-- /.basic-page__wrapper -->