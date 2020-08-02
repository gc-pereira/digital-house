//Exercício1

function parOuImpar(a){
    if (a%2 == 0){
        console.log("O número digitado é par")
    }
    else{
        console.log("O número digitado é impar")
    }
}

parOuImpar(3)

//Exercício 2

const primo = (numero) => {
    var quantidadeDivisores = 0;
    const ehDivisaoExata = (dividendo, divisor) => {
        return (dividendo % divisor) == 0;
    }
    for(i=1; i<= numero; i++){
        if(ehDivisaoExata(numero,i) == true){
            quantidadeDivisores++;
        }
    }
    if (quantidadeDivisores == 2){
        console.log("O número é primo");
    }
    else{
        console.log("O número não é primo");
    }
}

primo(12)

//Exercício 3

const felizAnoNovo = (callback) => {
    
    var contador = 10;
    var timer = setInterval(function() {
      if(contador <= 1) {
        clearInterval(timer);
      }
      
      console.log(contador--);
    }, 1000);
    callback();
}

function contagemRegressiva(){
    setTimeout(function(){console.log("Feliz ano novo!");},11000);
}

felizAnoNovo(contagemRegressiva);

//Exercício 4


//Exercício 5



// Exercício 6

var vector = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

function maiores(a){
    var newVector = []
    for(let i = 0; i < a.length; i++){
        if(a[i] > 7){
            newVector.push(a[i]);
        }
    }
    if(newVector.length == 0){
        return "nenhum número é maior do que 7";
    } else{
        return newVector;
    }
    }
    

console.log(maiores(vector))

/* Exercício 7 */

var listaSupermercado  = [
    {
        produto:"maçã",
        valor: 3.49
    },
    {
        produto:"shampoo",
        valor:17.99
    },
    {
        produto:"alface",
        valor:3.00
    },
    {
        produto:"detergente",
        valor:1.50
    }
];

function somaPreco(array){
    var total = 0;
    /*for(let i = 0; i < array.length; i++){
        total = total + array[i].valor
    }
    return total*/
    array.map(item => {
        total = total + item.valor;
    });
    return total
}

console.log(somaPreco(listaSupermercado));

//Exercício 8

var alunos = [
    {nome:"Daniel",ano:8},
    {nome:"Andreia",ano:9},
    {nome:"José",ano:8},
    {nome:"Maria",ano:9},
    {nome:"Rafael",ano:8},
    {nome:"Rosana",ano:9}
]

function atribuiDisciplina(array){
    array.forEach(element => {
        if(element.ano == 8){
        Object.assign(element, {disciplina:"História"});
        } else {
            Object.assign(element, {disciplina:"Física"});
        }
    });
    return alunos;
}

console.log(atribuiDisciplina(alunos));