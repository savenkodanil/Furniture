
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