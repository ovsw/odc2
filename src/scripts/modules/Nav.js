var Nav = {

  init : function () {

    this.cacheDom();

    this.bindEvents();

  },

  cacheDom : function () {

    this.$menuButton = $('.header__menu-icon');

    this.$topNav = $('.top-nav');

    this.$submenuButton = $('.top-nav__submenu-button');

    this.$menuItemWithChildren = $('.top-nav__has-children');

  },

  bindEvents : function () {

    this.$menuButton.on('click', this.toggleMainMenu);

    this.$submenuButton.on('click', this.toggleSubItems);

  },

  toggleMainMenu : function () {
    Nav.$topNav.toggleClass('top-nav__visible');
    Nav.$menuButton.toggleClass('header__menu-icon--close-x');
  },

  toggleSubItems : function () {

    var menuItem = $(this).parent();

    if (menuItem.hasClass('submenu-open')) {
      Nav.$menuItemWithChildren.removeClass('submenu-open');
    }else{
      Nav.$menuItemWithChildren.removeClass('submenu-open');
      menuItem.addClass('submenu-open');
    }

  }

};