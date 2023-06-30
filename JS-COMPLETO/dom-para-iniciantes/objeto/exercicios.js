// Crie uma função que verifique
// corretamente o tipo de dado

const carro = 'uno';
const frutas = function limao(){

};

console.log(Object.prototype.toString.call(carro));
console.log(Object.prototype.toString.call(frutas));



// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  }
});

Object.seal(quadrado)

quadrado.meio = 10;
delete quadrado.lado

console.log(quadrado)






// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

configuracao.width = 900;
delete configuracao.height;
configuracao.canvas = 100;

console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
