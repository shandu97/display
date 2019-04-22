$('.slider-paragraph').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  slickNext: '.nextimg',
  arrows: false,
  fade: true,
  asNavFor: '.slider-img',

});
$('.slider-img').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-paragraph',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  variableWidth: true,
});