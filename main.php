<!doctype html>
<html class="no-js" lang="en">
  <head>
  <?php require($config->paths->templates."includes/head.inc"); ?>
  </head>
  <body>
    <?php require($config->paths->templates."includes/header_hp.inc"); ?>

    <?php require($config->paths->templates."partials/".$page->template.".inc"); ?>

  </body>
  <?php require($config->paths->templates."includes/foot.inc"); ?>
</html>