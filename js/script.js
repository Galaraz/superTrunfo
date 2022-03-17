var carta1 = {
    nome: "Bulbasauro",
    imagem:"",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem:"",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Shiryu de dragão",
    imagem:"",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * 7);
      cartaMaquina = cartas[numeroCartaMaquina];
  
      var numeroCartaJogador = parseInt(Math.random() * 7);
      while(numeroCartaMaquina == numeroCartaJogador) {
          numeroCartaJogador = parseInt(Math.random() * 7);
      }
      cartaJogador = cartas[numeroCartaJogador];
  
      var btnSortear = document.getElementById("btnSortear");
      btnSortear.innerHTML = "Escolher Atributo";
      btnSortear.setAttribute("onclick", "jogar()");
  
  
      exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName("atributo");
      for (var i = 0; i < radioAtributo.length; i++) {
          if(radioAtributo[i].checked) {
              return radioAtributo[i].value;
          }
      }
  }
  
  function jogar() {
      var atributoSelecionado = obtemAtributoSelecionado();
      var divResultado = document.getElementById("resultado");
  
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = "<p class='resultado-final'>Venceu</p>"
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = "<p class='resultado-final'>Derrotado</p>"
      }else {
          htmlResultado = "<p class='resultado-final'>Empatou</p>"
      }
      divResultado.innerHTML = htmlResultado;
  
  
      var btnSortear = document.getElementById("btnSortear");
      btnSortear.innerHTML = "Reiniciar";
      btnSortear.setAttribute("onclick", "reiniciarJogo()");
  
      exibirCartaMaquina();
  }
  

  
 
  function exibirCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador");
      divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
      
      var tagHTML = "<div id='opcoes' class='carta-status'>";
  
      var opcoesTexto = "";
  
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
      }
  
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
      divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
  }
  


  function exibirCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina");
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
      
      var tagHTML = "<div id='opcoes' class='carta-status'>";
  
      var opcoesTexto = "";
  
      for (var atributo in cartaMaquina.atributos) {
          opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<p>";
      }
  
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
      divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function reiniciarJogo() {
      var divCartaJogador = document.getElementById("carta-jogador")
      divCartaJogador.innerHTML = "";
      var divCartaMaquina = document.getElementById("carta-maquina")
      divCartaMaquina.innerHTML = "";
  
      var divResultado = document.getElementById("resultado");
      divResultado.innerHTML = "";
  
      var btnSortear = document.getElementById("btnSortear");
      btnSortear.innerHTML = "Sortear Carta";
      btnSortear.setAttribute("onclick", "sortearCarta()");
  }