$(document).ready(function() {
    $('.single-product__gallery_slider').slick({
      infinite: false, // бесконечная прокрутка слайдов
      slidesToShow: 2, // показывать по 2 слайда
      slidesToScroll: 1, // прокручивать по 1 слайду за раз
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
