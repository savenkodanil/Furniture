function progressBar() {
    // Узнаем на сколько страница прокручена
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Узнаем высоту всей страницы
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Получаем в % на сколько прокручена страница
    let scrolled = scroll / height * 100;
  
    // Подставляем % прокрутки в ширину нашей линии
    document.getElementById('progressBar').style.width = scrolled + '%';
  }
  
  // Запускаем функцию, когда пользователя скролит
  window.addEventListener('scroll', progressBar);
  