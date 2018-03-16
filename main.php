<?php require($config->paths->templates."includes/functions.inc"); ?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
  <?php require($config->paths->templates."includes/head.inc"); ?>
  </head>
  <body>
    <?= $page->body_start_scripts != '' ?  $page->body_start_scripts : '' ; ?>
    
    <?php require($config->paths->templates."includes/header_hp.inc"); ?>

    <?php require($config->paths->templates."partials/".$page->template.".inc"); ?>
    <?php require($config->paths->templates."includes/foot.inc"); ?>
  </body>
</html>