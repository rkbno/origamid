// function areaQuadrado(){
//   console.log('mensagem ativa')
// }

// areaQuadrado();

// function pi(){
//   return 3.14;
// }

// var total = 5 * pi()
// console.log(pi)

// function imc (peso, altura){
//   var imc = peso / (altura * altura)
//   return imc 
// }

// console.log(imc(80,1.8))

// function corFavorita (cor){
//   if(cor === 'azul'){
//     return 'eu gosto do mar'
//   } else if (cor === 'verde'){
//     return 'eu gosto de mato'
//   } else {
//     return 'não gosto de cores'
//   }
// }

// addEventListener('click', function(){
//   console.log('clique')
// })


// function terceiraIdade (idade){
//   if(idade >= 60){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(terceiraIdade(60))

// function faltaVisitar(paisesVisitados){
//   var totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados} paises `
// }

// exercicios

// Crie uma função para verificar se um valor é Truthy
function validarCor(cor){
  if(validarCor !== 'verde'){
    return true;
  } else { 
    return false; 
  }
}
console.log(validarCor('verde'))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 3;
}
console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nameLastname(nome, sobrenome){
  return nome +' '+ sobrenome
} 


// Crie uma função que verifica se um número é par
function numeroPar(n){
  var modulo = n % 2;
  if(modulo === 0){
    return true
  } else {
   return false
  }
} 


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log('breno teixeira')
})



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);


