<footer class="footer__wrapper">
<div class="footer">

  <div class="footer__logos">
    <a href="https://www.acacamps.org/">
      <img src="<?= $config->urls->templates ?>app/assets/images/accreditedlogo.png" alt="American Camp Association Logo">
    </a>
  </div>
  <!-- /.footer__logos -->

  <div class="footer__text">
      <div class="vcard footer__vcard">
        <h6 class="fn org footer__oasis-heading">Oasis Children's Services LLC</h6>
        <div class="row">

          <div class="column1">
          
            <div class="adr">
                <div class="street-address">575 5th Ave – 14th Floor</div>
                <div> <span class="locality">New York</span>, <span class="region" title="New York">NY</span> <span class="postal-code">10017</span></div>
                <div class="country-name">USA</div>
            </div>
          </div>
          <!-- /.column1 -->

          <div class="column2">        
            <div>Phone: <span class="tel">+1-800-317-1392</span></div>
            <div>Email: <a href="mailto:info@oasischildren.com" class="email">info@oasischildren.com</a></div>
            <div class="tel">
                <span class="type">Fax</span>:
                <span class="value">+1-718-855-2435</span>
            </div>
          </div>
          <!-- /.column2 -->
        </div>
        <!-- /.row -->
    </div>

      

  </div>
  <!-- /.footer__text -->

</div>
<!-- /.footer -->
<p class="footer__copyright">Copyright &copy;<?= date("Y") ?> Oasis Children's Services LLC | Website by <a href="http://ovswebsites.com/" target="_blank">OVS Websites</a></p>
</footer>
<!-- /.footer__wrapper -->

<div class="please-rotate">
  <p>Please rotate your device</p>
</div>
<!-- /.please-rotate -->


<script src="<?php echo AIOM::JS(array(
  'scripts/vendor/fa-solid.min.js',
  'scripts/vendor/fontawesome.min.js',
  'scripts/vendor/jquery-3.2.1.min.js',
  'scripts/vendor/jquery.fancybox.min.js',
  'scripts/vendor/js.cookie.js',
  'scripts/vendor/gsap/CSSPlugin.js',
  'scripts/vendor/gsap/EasePack.js',  
  'scripts/vendor/gsap/TweenLite.js',
  'scripts/vendor/gsap/TimelineLite.js',
  'scripts/App.js')); ?>"></script>

<!-- 
<script src="<?= $config->urls->templates ?>scripts/vendor/fa-solid.min.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/fontawesome.min.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/jquery-3.2.1.min.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/jquery.fancybox.min.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/js.cookie.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/gsap/CSSPlugin.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/gsap/EasePack.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/gsap/TweenLite.js"></script>
<script src="<?= $config->urls->templates ?>scripts/vendor/gsap/TimelineLite.js"></script> 
<script src="<?= $config->urls->templates ?>app/temp/scripts/App.js"></script> -->

<?php if ($page->template == 'typical-day') : ?>
<script src="<?= $config->urls->templates ?>app/temp/scripts/jquery-1.9.1.min.js"></script>
<script src="<?= $config->urls->templates ?>app/temp/scripts/jquery.flexslider-min.js"></script>
<script src="<?= $config->urls->templates ?>app/temp/scripts/typical-day.js"></script>
<?php endif; ?>