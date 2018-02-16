
  <?php 
    if ($page->template == "camp") {
      $eventsPage = $page->children("template=promo-events")->first();
    }else{
      $campHp = $page->parents("template=camp")->first()->id;
      $eventsPage = $pages->get($campHp)->children("template=promo-events")->first();
    }
    
  ?>

  <?php if (count($eventsPage->children()) > 0 ) :
    $latestEvents = $eventsPage->children();
   ?>
    <a data-morphing id="morphing" data-src="#event-content" href="javascript:;" class="btn">Info Sessions</a>

    <div id="event-content" style="display:none">
    <?php foreach($latestEvents as $event) :?>
      <div class="popup-event">
      <h2><?= $event->title; ?></h2>
      <?= $event->short_description; ?>
      
      <a href="<?= $event->url ?>" class="button button__cta"> RSVP / Learn more</a>
      </div>
      <!-- /.popup-event -->
    <?php endforeach; ?>
    </div>

  <?php endif; ?>
  