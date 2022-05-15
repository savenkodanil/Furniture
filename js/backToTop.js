/********************************************
*********************************************/
function backToTop() {
    let button = $('.button__back__to__top');
  
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