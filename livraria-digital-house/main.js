//Carrossel

var indice = 1;
passador(indice);

function outroSlide(indicador) {
  passador(indice += indicador);
}

function slideAtual(indicador) {
  passador(indice = indicador);
}

function passador(indicador){
    var i;
    var slide = document.getElementsByClassName("slide");
    var pontos = document.getElementsByClassName("bola");
    if(indicador > slide.length){
        indice = 1;
    }
    if(indicador < 1){
        indice = slide.length;
    }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for(i=0; i< pontos.length; i++){
        pontos[i].className = pontos[i].className.replace(" ball-color", "")
    }
    slide[indice-1].style.display = "block";
    pontos[indice-1].className = pontos[indice-1].className + " ball-color"
}

//MENU

var div = document.querySelector('div');
var button = document.getElementById("dh_menu_btn");

var counter = 0;
button.onclick = function (){
    counter++;
    if(counter % 2 != 0){
        div.classList.remove("menu_escondida");
        div.classList.add("menu");
    }
    else{
        div.classList.remove("menu");
        div.classList.add("menu_escondida");
    }
}