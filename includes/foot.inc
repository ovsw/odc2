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
        <div class="adr">
            <div class="street-address">561 7th Ave – 3rd Floor</div>
            <div> <span class="locality">New York</span>, <span class="region" title="New York">NY</span> <span class="postal-code">10018</span></div>
            <div class="country-name">USA</div>
        </div>
        <div>Phone: <span class="tel">+1-800-317-1392</span></div>
        <div>Email: <a href="mailto:info@oasischildren.com" class="email">info@oasischildren.com</a></div>
        <div class="tel">
            <span class="type">Fax</span>:
            <span class="value">+1-718-855-2435</span>
        </div>
    </div>

      

  </div>
  <!-- /.footer -->

  <p class="footer__copyright">Copyright &copy;<?= date("Y") ?> Oasis Children's Services LLC | Website by <a href="http://ovswebsites.com/" target="_blank">OVS Websites</a></p>

</div>
<!-- /.footer -->

<script src="<?= $config->urls->templates ?>app/temp/scripts/App.js"></script>
<?php if ($page->template == 'typical-day') : ?>
<script src="<?= $config->urls->templates ?>app/temp/scripts/jquery-1.9.1.min.js"></script>
<script src="<?= $config->urls->templates ?>app/temp/scripts/jquery.flexslider-min.js"></script>
<script src="<?= $config->urls->templates ?>app/temp/scripts/typical-day.js"></script>
<?php endif; ?>