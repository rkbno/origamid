// const carros = ['fiat', 'civic', 'honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array)
// })

// const li = document.querySelectorAll('li')

// // li.forEach(item => item.classList.add('ativa'))

// // console.log(li)

// const retornoForech = li.forEach(item => item.classList.add('ativa'))

// console.log(retornoForech)

// const carros = ['ford', 'honda', 'fiat'];

// const novaArray = carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 10, 20, 25, 50];
// const numerosX2 = numeros.map(n => n * 2);


// console.log(numeros);
// console.log(numerosX2);



// console.log(novaArray);
// console.log(carros);


// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]


// const tempoAulas = aulas.map(aula => aula.min);

// // function nomeAulas (aula) {
// //   return aula.nome
// // };

// const nomeAulas = aula => aula.nome;

// const nomeAulas2 = (aula) => {
//   return aula.nome;
// } 


// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);


const aulas = [20, 30, 5, 57, 10];
const total = aulas.reduce((acumulador, item) => acumulador + item, 0);

const maior = aulas.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);


console.log(total)
console.log(maior)