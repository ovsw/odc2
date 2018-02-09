    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?= $page->title ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#0166af">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#0166af">

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>
      WebFont.load({
        google: {
          families: ['PT Sans', 'Open Sans:300,400,800', 'Josefin Sans:300,400,700']
        }
      });
    </script>

    <?= $page->template == "contact" ? "<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?sensor=false&key=AIzaSyBKpywPkXQEbH2WZMmMRetURTMmWDjmO7Q'></script>" : ''; ?>

    
    <link rel="stylesheet" href="<?php echo AIOM::CSS(array('app/assets/styles/vendor/jquery.fancybox.min.css', 'app/temp/styles/styles.css')); ?>">
    
    <!-- 
      <link rel="stylesheet" href="<?= $config->urls->templates ?>app/assets/styles/vendor/jquery.fancybox.min.css" />   <link rel="stylesheet" href="<?= $config->urls->templates ?>app/temp/styles/styles.css" /> 
    -->