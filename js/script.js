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

/*****************************
*******КНОПКА БОЛЬШЕ ФОТО*****
* ****************************/
$(document).ready(function() {
    $('.button__photo-1').click(function(event) {
        $('.section__photo__merchandise , .button__photo-1 , .button__photo-2 , .photo__merchandise').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.button__photo-2').click(function(event) {
        $('.section__photo__merchandise , .button__photo-1 , .button__photo-2').removeClass('active');
    });
  });

/******************************
**********МОДАЛЬНОЕ ОКНО*******
******************************/
$(document).ready(function() {
  $('.button__all__photos').click(function(event) {
      $('html , body , .popup-bg , .modal__window , .close__modal__window , .overlay , .popup-bg , header , .progress__bar__all__photos').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.close__modal__window').click(function(event) {
      $('html , body , .modal__window , .popup-bg , .close__modal__window , .overlay , header , .progress__bar__all__photos').removeClass('active');
  });
});

$(document).ready(function() {
  $('.overlay').click(function(event) {
      $('html , body , .modal__window , .popup-bg , .close__modal__window , .overlay , header , .progress__bar__all__photos').removeClass('active');
  });
});
/******************************
**********PROGRESS-BAR*********
******************************/
const progress = document.querySelector('.progress__bar');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.body.scrollHeight || document.documentElement.scrollTop;
  let per = windowScroll / windowHeight * 117;

  progress.style.width = per + '%';
}
/********************************************
**********PROGRESS-BAR-ABOUT COMPANY*********
*********************************************/
const progressBarAboutCompany = document.querySelector('.progress__bar__about__company');

window.addEventListener('scroll', progressBarAboutCompanyy);

function progressBarAboutCompanyy(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.body.scrollHeight || document.documentElement.scrollTop;
  let per = windowScroll / windowHeight * 280;

  progressBarAboutCompany.style.width = per + '%';
}

  $(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {
  
      // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
      if (this.hash !== "") {
        // Запретить поведение щелчка якоря по умолчанию
        event.preventDefault();
  
        // Хранить хэш
        var hash = this.hash;
  
        // Использование метода animate() jQuery для добавления плавной прокрутки страницы
        // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        });
      } // Конец, если
    });
  });
/********************************************
*********************************************/
function backToTop() {
  let button = $('.button__back-to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
      } else {
        button.fadeOut();
      }
    });

    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({scrollTop: 0}, 1000)
    })
  }

  backToTop();

/************************************************
*******ПЛАВНОЕ ПОЯВЛЕНИЕ ОБЬЕКТОВ ПРИ СКРОЛЕ*****
************************************************/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemPoint > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + screenLeft }
  }

  setTimeout(() => {
    animOnScroll();
    }, 100);
    
}


