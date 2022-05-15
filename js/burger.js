/******************************
*************БУРГЕР************
******************************/
$(document).ready(function() {
    $('.header__burger--bg').click(function(event) {
        $('.header__burger, .header__menu, .header__burger--bg, body , .nav__menu, .menu__content , .menu__content__nav , .contacts, .header__menu, .logo , .logo__header , .header , .contacts , .section__contacts__title , .menu__content__nav__all__photos , .nav__menu__all__photos , .progress__bar , .menu__content , .section__contacts__item , .section__contacts__content').toggleClass('active');
    });
});

$(document).ready(function() {
  $('.nav__menu__all__photos').click(function(event) {
      $('.header__burger, .header__menu, .header__burger--bg, .header , body , .nav__menu, .menu__content__nav , .img__logo, .header__text, .contacts , .progress__bar , .menu__content').removeClass('active');
  });
});

$(document).ready(function() {
  $('.nav__menu').click(function(event) {
      $('.header__burger, .header__menu, .header , .header__burger--bg, body , .nav__menu, .menu__content__nav , .img__logo, .header__text, .contacts , .progress__bar , .menu__content , .section__contacts__item , .section__contacts__content').removeClass('active');
  });
});

$(document).ready(function() {
  $('.nav__menu__all__photos').click(function(event) {
      $('body , .menu__content__nav__all__photos , .nav__menu__all__photos').removeClass('active');
  });
});
