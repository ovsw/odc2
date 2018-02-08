<div class="basic-page__hero-wrapper">
  <div class="basic-page__hero large-hero large-hero--smaller">
    <?php $videoSource = $page->parents("template=camp")->first(); ?>
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


  
  <?php 
    $postsTemplate = "blog-posts-".$camp_suffix;
    $posts = $pages->get("template=".$postsTemplate)->children();

    $rt_block_counter = 0;
    $alternateClass = '';
  ?>

  <?php foreach ($posts as $post) : 

  $rt_block_counter++;
  $alternateClass = $rt_block_counter % 2 == 0 ? " posts-list__item-even" : ""; ?>


  <div class="posts-list__item<?= $alternateClass ?>">
    <div class="posts-list__wrapper">
      <a href="<?= $post->url ?>" class="posts-list__image-wrapper">
        <picture>
          <source srcset="<?= $post->blog_featured_image->getCrop("cover")->url ?>" media="(min-width: 800px)">
          <img class="blog__rt-image__image" src="<?= $post->blog_featured_image->getCrop("square_small")->url ?>" alt="<?= $post->blog_featured_image->description ?>">
        </picture>
      </a>
      <!-- /.blog__rt-image__image-wrapper -->
      
      <div class="posts-list__text">
        <h2 class="posts-list__title"><a href="<?= $post->url ?>"><?= $post->title ?></a></h2>
        <h3 class="posts-list__date"><a href="<?= $post->url ?>"><?= $post->date ?></a></h3>
        <p class="posts-list__summary">
          <a href="<?= $post->url ?>"><?= $post->summary ?></a>
        </p>
      </div>
    </div>  
  </div>
      
  
    <?php endforeach; ?>
