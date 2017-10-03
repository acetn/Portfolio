$(".js-scroller").click(function() {
    $('html,body').animate({
        scrollTop: $(".c-about").offset().top},
        1000);
});
