      <div class="top-nav">
        <p class="top-nav__mobile-title">Menu</p>
        <?php 
          $topMenu = $modules->get("MarkupSimpleNavigation");
          $topMenuRootPage = $pages->get('1042');
          $topMenuOptions = array(
            'parent_class' => 'top-nav__active-parent',
            'current_class' => 'top-nav__current',
            'has_children_class' => 'top-nav__has-children',
            'levels' => true,
            'levels_prefix' => 'top-nav__item-level-',
            'max_levels' => 2,
            'firstlast' => true,
            'collapsed' => false,
            'show_root' => false,
            'selector' => '',
            'selector_field' => 'nav_selector',
            'outer_tpl' => '<ul class="top-nav__outer-list">||</ul>',
            'inner_tpl' => '<ul class="top-nav__inner-list">||</ul>',
            'list_tpl' => '<li%s>||</li>',
            'list_field_class' => 'p-{id}',
            'item_tpl' => '<a href="{link_url|url}">{title}<i class="far fa-angle-down top-nav__ico-down"></i></a><span class="top-nav__submenu-button"><i class="fas fa-plus top-nav__ico-plus"></i><i class="fas fa-minus top-nav__ico-minus"></i></span>',
            'item_current_tpl' => '<a href="{link_url|url}">{title}<i class="far fa-angle-down top-nav__ico-down"></i></a><span class="top-nav__submenu-button"><i class="fas fa-plus top-nav__ico-plus"></i><i class="fas fa-minus top-nav__ico-minus"></i></span>',
            'code_formatting' => true,
            'debug' => false
        );
          //<i class="fas fa-plus top-nav__ico-plus"></i><i class="fas fa-minus top-nav__ico-minus"></i>
          echo $topMenu->render($topMenuOptions, null, $topMenuRootPage); ?>
      </div>
      <!-- /.top-nav -->
      
      <div class="header__menu-icon"> 
        <div class="header__menu-icon__middle"></div>
      </div>
      <!-- /.header__menu-icon -->