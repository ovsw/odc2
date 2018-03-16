// mobile menu toggle
$('.header__menu-icon').click(function(){
  $('.top-nav').toggleClass('top-nav__visible');
  $(this).toggleClass('header__menu-icon--close-x');
});

// mobile menu sub-items toggle
$('.top-nav__submenu-button').click(function(){
var menuItem = $(this).parent();

if (menuItem.hasClass('submenu-open')) {
  $('.top-nav__has-children').removeClass('submenu-open');
}else{
  $('.top-nav__has-children').removeClass('submenu-open');
  menuItem.addClass('submenu-open');
}
});