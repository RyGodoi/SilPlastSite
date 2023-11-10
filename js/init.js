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


  //collapsible

  document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
      accordion: false
    });
  });

  // Or with jQuery

  $(document).ready(function () {
    $('.collapsible').collapsible();
  });

  //fim collapsible

  //pedidos


  var arraymedidas = [];
  var arraywhatsapp = [];

  //Sacos plasticos

  $("#sacosAdicionar").on('click', function (e) {
    e.preventDefault();

    var sLarg = $("#sacosLargura").val();
    var sAlt = $("#sacosAltura").val();
    var sEspess = $("#sacosEspessura").val();
    var sQuant = $("#sacosQuantidade").val();
    var sObs = $("#obsSacos").val();
    var sChecked = '';





    if (sLarg != '' && sAlt != '' && sEspess != '' && sQuant != '') {
      if ($("#quiloSelect").prop("checked")) {
        sChecked = '(kg)';
      } else if ($("#milheiroSelect").prop("checked")) {
        sChecked = '(Milheiro)';
      }
      if (sObs == '') {
        sObs = 'Nenhuma informação adicional'
      }
      $("#div-lista").append(" <li><p>Pedido " + arraymedidas.length + ": <b>SACOS</b> " + sLarg + "(cm) <b>X</b> " + sAlt + "(cm) <b>X</b> " + sEspess + "(mm) <b>=</b> " + sQuant + " <b>" + sChecked + "</b> obs: <b>" + sObs + "</b></p></li>");
      var medidasString = "%0APedido " + arraymedidas.length + ": *SACOS* " + sLarg.toString() + "(cm) *X* " + sAlt.toString() + "(cm) *X* " + sEspess.toString() + "(mm) *=* " + sQuant + " *" + sChecked + "* obs: *" + sObs + "*";
      arraymedidas.push(medidasString);


    }
    else {
      alert("informações incompletas")
    }


    $('input[type="number"]').val('');
    $("#obsSacos").val('');
  })

  //Fim Sacos plasticos


  //Bobinas plasticos


  $("#bobinasAdicionar").on('click', function (e) {
    e.preventDefault();


    var bLarg = $("#bobinasLargura").val();
    var bAlt = $("#bobinasAltura").val();
    var bEspess = $("#bobinasEspessura").val();
    var bQuant = $("#bobinasQuantidade").val();
    var bObs = $("#obsBobinas").val();
    var bChecked = '';

    if (bLarg != '' && bAlt != '' && bEspess != '' && bQuant != '') {
      if ($("#bobinasTubular").prop("checked")) {
        bChecked = 'Tubular';
      } else if ($("#bobinasMonofolha").prop("checked")) {
        bChecked = 'Monofolha';
      }
      if (bObs == '') {
        bObs = 'Nenhuma informação adicional'
      }
      $("#div-lista").append(" <li><p>Pedido " + arraymedidas.length + ": <b>BOBINA</b> " + bLarg + "(cm) <b>X</b> " + bEspess + "(cm) <b>=</b> " + bQuant + " <b>" + bChecked + "</b> obs: <b>" + bObs + "</b></p></li>");
      var medidasString = "%0APedido " + arraymedidas.length + ": *BOBINA* " + bLarg.toString() + "(cm) *X* " + bEspess.toString() + "(mm) *=* " + bQuant + "*(kg)* *" + bChecked + "* obs: *" + bObs + "*";
      arraymedidas.push(medidasString);


    }
    else {
      alert("informações incompletas")
    }


    $('input[type="number"]').val('');
    $('#obsBobinas').val('');
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
    var nomeCliente = $("#nome").val();
    if (nomeCliente != "") {
      if (arraymedidas.length != 0) {

        for (let index = 0; index < arraymedidas.length; index++) {
          arraywhatsapp.push(arraymedidas[index].replace(/ /g, "%20"));
        }

        nomeCliente.replace(/ /g, "%20");

        $(".links-gerados a").remove();
        $(".links-gerados").append(
          "<a href='https://api.whatsapp.com/send?phone=5511953760769&text=Ol%C3%A1%20Silplast%20sou%20" + nomeCliente + "%20e%20esses%20s%C3%A3o%20os%20meus%20pedidos:%0A%0A" + arraywhatsapp + "%0A%0AMuito%20obrigado%20pela%20aten%C3%A7%C3%A3o%20estarei%20aguardando%20retorno.' target='_blank'>Click aqui para encaminhar o pedido</a>");
      }
    } else {
      alert('informe um nome/empresa');
    }
    $('#nome').val('');
  })

  //Fim Bobinas plasticos


  //fim pedidos

  //pedidos
  /*
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
      console.log(arraywhatsapp);


      $(".links-gerados a").remove();
      $(".links-gerados").append(
        "<a href='https://api.whatsapp.com/send?phone=5511953760769&text=Ol%C3%A1%20Silplast%20esses%20s%C3%A3o%20os%20meus%20pedidos:%0A%0A" + arraywhatsapp + "%0A%0Amuito%20obrigado%20pela%20aten%C3%A7%C3%A3o%20estarei%20aguardando%20retorno.' target='_blank'>Click aqui para encaminhar o pedido</a>");
    }
  })
*/

})(jQuery); // end of jQuery name space
