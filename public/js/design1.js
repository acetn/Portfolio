// SCROLL ARROW
$(".js-scroller").click(function() {
    $('html,body').animate({
        scrollTop: $(".c-about").offset().top},
        1000);
});

//MAIL SLIDE
$(".js-slideout").click(function() {
    $(".c-contact-form").toggleClass("js-contact-form-active");
    $(".c-welcome__nav-wrap").toggleClass("js-nav-slideout");

});

//STORY SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("c-gallery__slides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
