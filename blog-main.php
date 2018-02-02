<?php require($config->paths->templates."includes/functions.inc"); ?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
  <?php require($config->paths->templates."includes/head.inc"); ?>
  </head>
  <body>
    <?php require($config->paths->templates."includes/header_hp.inc"); ?>

    <?php 
      $campHome = $page->parents("template=camp")->first();
      $camp_suffix = $campHome->camp_suffix;

      
      if ($page->template == 'camp-blog-home') {
        $blogTemplate = "blog-home.inc";
      }

      if (substr($page->template, 0, 10) == "blog-posts") {
        $blogTemplate = "blog-posts.inc";
      }
      
      if ( substr($page->template, 0, 9) == "blog-post"){  
        $blogTemplate = "blog-post.inc";
      }
      
      if (substr($page->template, 0, 13) == "blog-category") {
        $blogTemplate = "blog-category.inc"; 
      }
      
      if (substr($page->template, 0, 3) == "tag") {
        $blogTemplate = "blog-tag.inc";
      }
    ?>

    <?php require($config->paths->templates."partials/blog/".$blogTemplate); ?>


    <?php require($config->paths->templates."includes/foot.inc"); ?>
  </body>
</html>