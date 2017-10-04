$(".js-scroller").click(function() {
    $('html,body').animate({
        scrollTop: $(".c-about").offset().top},
        1000);
});
$(document).ready(function(){
  setTimeout(function(){
    $('.js-flash').slideUp(500);
  }, 5000);
 })