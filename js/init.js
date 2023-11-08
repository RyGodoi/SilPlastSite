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

  //pedidos
  var arraymedidas = [];
  var arraywhatsapp = [];
  $("#adicionar").on("click", function (e) {
    e.preventDefault;

    var larg = $("#largura").val();
    var alt = $("#altura").val();
    var espess = $("#espessura").val();
    var quant = $("#quantidade").val();

    if (larg != "" && alt != "" && espess != "" && quant != "") {
      $("#div-lista").append("<li><p>Pedido " + arraymedidas.length + ": " + larg + "(cm) <b>X</b> " + alt + "(cm) <b>X</b> " + espess + "(mm) <b>=</b> " + quant + "(kg)</p></li>");
      var medidasString = "Pedido " + arraymedidas.length + ": " + larg.toString() + "(cm) X " + alt.toString() + "(cm) X " + espess.toString() + "(mm) = " + quant + "(kg)%0A";
      arraymedidas.push(medidasString);
      $('input[type="number"]').val('');

    } else {
      alert("Você deixou de preencher alguma informação!");


    }
    console.log(medidasString);
    console.log(arraymedidas);
    return false;
  })

  $("#apagar").on("click", function () {
    if (arraymedidas != "") {
      arraymedidas.pop();
      console.log(arraymedidas);
      $('#div-lista li:last-child').remove();

    } else {
      alert("Não há nenhuma medida na sua lista.")
    }
  })

  $("#gerar-link").on("click", function () {
    if (arraymedidas.length != 0) {

      for (let index = 0; index < arraymedidas.length; index++) {
        arraywhatsapp.push(arraymedidas[index].replace(/ /g, "%20"));
      }
      arraywhatsapp.replaceAll(',', '')
      console.log(arraywhatsapp);


      $(".links-gerados a").remove();
      $(".links-gerados").append(
        "<a href='https://api.whatsapp.com/send?phone=5511953760769&text=Ol%C3%A1%20Silplast%20esses%20s%C3%A3o%20os%20meus%20pedidos:%0A%0A" + arraymedidas + "%0A%0Amuito%20obrigado%20pela%20aten%C3%A7%C3%A3o%20estarei%20aguardando%20retorno.' target='_blank'>Click aqui para encaminhar o pedido</a>");


    }
  })

})(jQuery); // end of jQuery name space
