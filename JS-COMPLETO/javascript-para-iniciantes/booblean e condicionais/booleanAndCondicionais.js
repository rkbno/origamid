// var possuiGraduacao = false;

// if (possuiGraduacao){
//   alert('Possui graduação');
// } else {
//   alert('Não possui graduação');
// }


// var nome = {};

// if (nome){
//   console.log(nome)
//   console.log('nome existe')
// } else {
//   console.log('Não existe o nome')
// }

// var idade = ''; //false
// if(!''){ 
//   console.log(!'') // true
// } else {
//   console.log('Não tem idade')
// }

// var corFavorita = 'amarelo';

// switch (corFavorita){
//   case 'Azul':
//     console.log('olhe para o céu');
//     break;
//   case 'amarelo':
//     console.log('olhe para o sol');
//     break;
//   case 'vermelho':
//     console.log('olhe para o sangue');
//     break;  
//   default: 
//   console.log('feche os olhos');
// }


// exercicio 
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var mIdade = 22; // eu
var idadeP = 18; //irmã
if(mIdade > idadeP){
  console.log('é maior');
}else if(mIdade === idadeP){
  console.log('é igual'); 
} else {
  console.log('é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false;  //false
var empregoFuturo;  // false
var dinheiroNaConta = 0;  //false

console.log(dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(china > brasil){
  console.log('china é um pais com mais habitantes que o Brasil!')
} else {
  console.log('Brasil é um pais com mais habitantes que china')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}