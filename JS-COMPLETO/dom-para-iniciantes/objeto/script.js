// const pessoa = new Object ({
//   nome: 'Breno'
// });

// console.log(pessoa)

// const carro1 = {
//   rodas: 4,
//   init (valor){
//     this.marca = valor;
//     return this 
//   },
//   acelerar(){
//     return this.marca + ' acelerou';
//   },
//   buzinar(){
//     return this.marca + ' buzinou';
//   }
// };

// const honda = Object.create(carro1).init('honda');;
// console.log(honda.acelerar())

// const ferrari = Object.create(carro1).init('ferrari');
// console.log(ferrari.acelerar())

// const funcaoAuto = {
//   acelerar(){
//     return 'acelerou';
//   },
//   buzinar(){
//     return 'buzinou';
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// const carro = {
//   rodas: 4,
//   mala: true,
// };

// console.log(Object.assign(moto, funcaoAuto))
// console.log(Object.assign(carro, funcaoAuto))

const moto = {
  capacete: true
};

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false ,
//     writable: true, 
//   }
// });

// Object.defineProperties(moto, {
//   rodas: {
//     get(){
//       return this._rodas;
//     },
//     set(valor){
//       this._rodas = valor * 4
//     }
//   }
// });



// console.log(moto)


// console.log(Object.getOwnPropertyDescriptors(Array));
// console.log(Object.getOwnPropertyDescriptor(window,'innerHeight'));

// Object.keys(Array);

// const carro = {
//   marca: 'ferrari',
//   ano: 2022,
// };

// console.log(Object.keys(carro));
// console.log(Object.values(carro));
// console.log(Object.entries(carro));

// console.log(Object.getOwnPropertyNames(Array.prototype));


// const frutas = ['banana', 'uva'];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype);

// const frutas1 = ['banana', 'uva'];
// const frutas2 = ['banana', 'uva'];


// const novaFruta = frutas1

// novaFruta[0] = 'melancia'

// console.log(frutas1)

// console.log(Object.is(frutas1, frutas2));
// console.log(Object.is(frutas1, novaFruta));

// const carro = {
//   marca: 'fiat',
//   ano: 2000,
// };

// Object.freeze(carro)
// Object.seal(carro)
// Object.preventExtensions(carro)

// delete carro.marca

// carro.portas = 4

// carro.marca = 'honda'

// console.log(carro)
// console.log(Object.isFrozen(carro))
// console.log(Object.isSealed(carro))
// console.log(Object.isExtensible(carro))



// console.log(carro.constructor.prototype)

// console.log(frutas.hasOwnProperty('map'));
// console.log(frutas.hasOwnProperty('map'));
// console.log(Array.prototype.hasOwnProperty('map'));

// console.log(Array.prototype.isPrototypeOf(frutas));




const frutas = ['banana', 'uva'];
const frase = 'Oi frase';
const somar = function (a, b){
  return a + b;
};

carro = {
  marca: 'ford'
};


const li = document.querySelectorAll('li')

console.log(carro.toString())
console.log(frutas.toString())
console.log(frase.toString())
console.log(somar.toString())

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
console.log(Object.prototype.toString.call(li));