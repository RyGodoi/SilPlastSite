(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready

  //Slides-Header.
  $('.multiple-items').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $('.slick').slick({
    arrows: true,
    dots: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 758,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  //navbar
  // Smooth Scrolling
  $("nav a, .btn").on("click", function (event) {
    if (this.hash !== "" || this.hash > "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
  //navbar

})(jQuery); // end of jQuery name space