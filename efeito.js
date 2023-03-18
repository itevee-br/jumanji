var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var frase = 0;
var texto = false;
var txtA = 'Parabéns aos jogadores';
var txtB = 'que chegaram até aqui.';
var txtC = 'Mas o tesouro de Jumanji,';
var txtD = 'só pode ser concebido aos dignos.';
var txtE = '- - continue tocando na tela - -';
var speed = 50; /* The speed/duration of the effect in milliseconds */
var resposta = '';
const random = (num) => Math.floor(Math.random() * num) ;
var skip = true;
var seed = 0;
var morse = document.getElementById("selva");

function reset() {
  if (texto == false) {
    document.getElementById("linhaA").innerHTML = "";
    document.getElementById("linhaB").innerHTML = "";
    document.getElementById("linhaC").innerHTML = "";
    document.getElementById("linhaD").innerHTML = "";
    document.getElementById("linhaE").innerHTML = "";

    a = b = c = d = e = 0;
  }
}

function escrever() {
  if (a < txtA.length) {
    if (frase >= 2) {
      skip = false;
    }
    texto = true;
    document.getElementById("linhaA").innerHTML += txtA.charAt(a);
    a++;
    setTimeout(typeWriter, speed);
  } else if (b < txtB.length) {
    document.getElementById("linhaB").innerHTML += txtB.charAt(b);
    b++;
    setTimeout(typeWriter, speed);
  } else if (c < txtC.length) {
    document.getElementById("linhaC").innerHTML += txtC.charAt(c);
    c++;
    setTimeout(typeWriter, speed);
  } else if (d < txtD.length) {
    document.getElementById("linhaD").innerHTML += txtD.charAt(d);
    d++;
    setTimeout(typeWriter, speed);
  } else if (e < txtE.length) {
    document.getElementById("linhaE").innerHTML += txtE.charAt(e);
    e++;
    setTimeout(typeWriter, speed);
  } else {
    frase += 1;
    texto = false;
  }
}

function typeWriter() {
  if (frase == 0 && skip) {
    reset();
    escrever();
  } else if (frase == 1 && skip) {
    reset();
    txtA = 'Você e seu grupo serão testados';
    txtB = 'perguntas dificeis estão por vir,';
    txtC = 'mas se você errar a resposta...';
    txtD = 'vai ser direcionado para um meme :)';
    txtE = 'preparado?'
    escrever();
    seed = random(3);
  } else if (frase == 2) {
    reset();
    if (seed == 0) {
      morse = document.getElementById("selva");
      morse.style.display = "block";
      skip = true;
    }
    if (seed == 1) {
      morse = document.getElementById("tesouro");
      morse.style.display = "block";
      skip = true;
      
    }
    if (seed == 2) {
      morse = document.getElementById("armadilha");
      morse.style.display = "block";
      skip = true;
    }
  } else if (frase == 4) {
    document.getElementById("linhaA").innerHTML = 'Letras são como números';
    document.getElementById("linhaB").innerHTML = 'Numeros dos andares';
    document.getElementById("linhaC").innerHTML = 'Você está no elevador.';
    if (seed == 0){
      document.getElementById("linhaE").innerHTML = 'lzbzbn';
    }
    if (seed == 1){
      document.getElementById("linhaE").innerHTML = 'zqunqd';
    }
    if (seed == 2){
      document.getElementById("linhaE").innerHTML = 'itlzmih';
    }
    
  } else if (frase == 6) {
    morse = document.getElementById("pergunta");
    morse.style.display = "none";
    morse = document.getElementById("valor");
      morse.style.display = "none";
    document.getElementById("linhaA").innerHTML = '';
    document.getElementById("linhaB").innerHTML = ':)';
    document.getElementById("linhaC").innerHTML = '';
    if (seed == 0){
      document.getElementById("linhaE").innerHTML = 'O Brasil não ganhou o Hexa, mas vc pode ganhar, ache o F5.';
    }
    if (seed == 1){
      document.getElementById("linhaE").innerHTML = 'Vera achou o tesouro.. está em um asteroide.';
    }
    if (seed == 2){
      document.getElementById("linhaE").innerHTML = 'Suicune está com o tesouro... encontre na pokedex.';
    }
    
  }
}

function capturar() {
  resposta = document.getElementById("valor").value;
  if (resposta == "selva" && seed == 0 || resposta == "tesouro" && seed == 1 || resposta == "armadilha" && seed == 2 ) {
    morse.style.display = "none";
    skip = true;
    skip = false;
    seed = random(3);
    frase = 4;
  } else if (resposta == "macaco" && seed == 0 || resposta == "arvore" && seed == 1 || resposta == "jumanji" && seed == 2 ) {
    seed = random(3);
    frase = 6;
  } else {
    meme();
  }
}

function meme() {
  var x = random(10);
  if (x == 0) {
    window.location = "https://br.ifunny.co/picture/as-do-dia-31-de-dezembro-nos-deveriamos-gritar-jumanji-97r4KfBt7";
  } else if (x == 1) {
    window.location = "https://br.ifunny.co/picture/jumanyi-rampage-jungle-cruise-jumanji-jumanji-jumanyi-Rn6HCZmT9?s=cl";
  } else if (x == 2) {
    window.location = "https://br.ifunny.co/video/08F7TH589?s=cl";
  } else if (x == 3) {
    window.location = "https://br.ifunny.co/picture/janeiro-3o-guerra-mundial-fevereiro-pandemia-marco-quarentena-abril-vulcao-6slXwnHn7?s=cl";
  } else if (x == 4) {
    window.location = "https://br.ifunny.co/picture/vo-rafael-manarin-fui-assistir-jumanji-no-pc-ativei-o-DmmMzh5n7?s=cl";
  } else if (x == 5) {
    window.location = "https://br.ifunny.co/picture/eu-julho-vai-ser-melhor-brasil-bem-vindo-a-fase-ViNy82zl7?s=cl";
  } else if (x == 6) {
    window.location = "https://br.ifunny.co/picture/z0NZVcI29?s=cl";
  } else if (x == 7) {
    window.location = "https://br.ifunny.co/video/lj3CpY3HA?s=cl";
  } else if (x == 8) {
    window.location = "https://br.ifunny.co/picture/que-nao-consigo-entender-UkvNRUpU9?s=cl";
  } else if (x == 9) {
    window.location = "https://youtube.com/shorts/d2KOak9ICrY?feature=share";
  }
}