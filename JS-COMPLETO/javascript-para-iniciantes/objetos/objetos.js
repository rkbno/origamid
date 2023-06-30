// var pessoa = {
//   nome: 'Breno',
//   idade: 22
// }

// console.log(pessoa.idade)

// var quadrado = {
//   lados: 4,
//   area: function(lado){
//     return lado * lado
//   },
//   perimetro: function(lado){
//     return this.lados * lado
//   }
// }

// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: '#ccc',
// }

// menu.backgroundColor = 'black'

// menu.color = 'blue'

// exercicio 

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: 'breno',
  sobrenome: 'teixeira',
  idade: 22,
  sexo: 'Macho'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(eu.nome +' '+ eu.sobrenome)


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10 anos',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'auau'
    } else {
      return 'Nada'
    }
  }
}

