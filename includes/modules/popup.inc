
  <?php 
    if ($page->template == "camp") {
      $eventsPage = $page->children("template=promo-events")->first();
    }else{
      $campHp = $page->parents("template=camp")->first()->id;
      $eventsPage = $pages->get($campHp)->children("template=promo-events")->first();
    }
    
  ?>

  <?php if (count($eventsPage->children()) > 0 ) :
    $latestEvent = $eventsPage->children()->first();
   ?>
    <a data-morphing id="morphing" data-src="#event-content" href="javascript:;" class="btn">Info Sessions</a>

    <div id="event-content" style="display:none">
      <h2><?= $latestEvent->title; ?></h2>
      <?= $latestEvent->short_description; ?>
      <a href="<?= $latestEvent->url ?>" class="button button__cta"> RSVP / Learn more</a>
    </div>

  <?php endif; ?>
  