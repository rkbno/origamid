// const perimetro = new Function ('lado', 'return lado * 4');

// function somar(n1, n2){
//   return n1 + n2 + '2';
// };

// console.log(somar.name.toUpperCase());

// function darOi (nome, idade){
//   console.log('Oi pra você ' + nome + idade);
// };

// darOi.call({}, 'Breno ', 22)


// window.marca = 'Carro';
// window.ano = 2022

// function descricaoCarro (velocidade){
//   console.log(this);
//   console.log(this.marca + ' ' + this.ano + velocidade);
// };

// descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);


// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Pera', 'Goiaba'];


// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// });

// frutas.forEach.call(carros, (item) => {
//   console.log(item);
// });


// function Dom(section){
//   this.element = document.querySelector(section);
// };

// Dom.prototype.ativo = function (classe){
//   this.element.classList.add(classe);
// };


// const section = new Dom ('section');

// const p = {
//   element: document.querySelector('p')
// }

// section.ativo.call(p, 'ativar')

// // console.log(section);


const frutas = ['uva', 'maçã', 'banana'];

Array.prototype.pop.call(frutas);
frutas.pop();

console.log(frutas)


const arrayLike = {
  0: 'item',
  1: 'item',
  2: 'item',
  length: 3,
};

const p = document.querySelectorAll('p');
const arrayP = Array.from(p)

const filtro = Array.prototype.filter.bind(p, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro())

console.log(p)

const numeros = [33, 44, 45, 10, 3, 50, 1000];


const $ = document.querySelectorAll.bind(document, 'li');

const carro ={ 
  marca: 'BMW',
  ano: 2023,
  acelerar: function(aceleracao, tempo){
    return `${this.marca} celerou ${aceleracao}KM em ${tempo}s`;
  }
};

const honda = {
  marca: 'honda'
};

const acelerarHonda = carro.acelerar.bind(honda, 100)

console.log(acelerarHonda(8))

console.log(carro.acelerar(100, 2));


function imc(altura, peso){
  return peso / (altura * altura);
};

const IMC = imc.bind(null, 1.80)  

console.log(imc(1.80, 70))
console.log(IMC(70))

