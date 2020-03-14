
$(document).ready(function () {
     $('.carousel-one').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: true,
          nextArrow: '<button type="button" class="slick-next"><img src="img/About/arrow_up.png"></button>',
          prevArrow: '<button type="button" class="slick-prev"><img src="img/About/arrow_down.png"></button>'
     });
});