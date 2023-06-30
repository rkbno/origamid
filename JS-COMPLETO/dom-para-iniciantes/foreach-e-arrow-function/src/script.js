// // const imgs = document.querySelectorAll('img')
// // console.log(imgs)

// let i = 0;
// // imgs.forEach(function(item, index, array){
//   // console.log(item, index, array)
// // })

// const titulos = document.getElementsByClassName('titulo')
// const tituloArray = Array.from(titulos)


// // console.log(titulos)
// // console.log(tituloArray)

// tituloArray.forEach(function(item, index, array){
//   // console.log(item,index,array)
// })

// const imgs = document.querySelectorAll('img')

// // imgs.forEach((item, index, array) =>{
// //   console.log(item, index, array)
// // })

// imgs.forEach((item) =>{console.log (item)})

// exercicios
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

paragrafos.forEach((item, index, array)=>{
  console.log(item,index)
})
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item,index )=>{
  console.log(item.innerText)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item,index) => {
  console.log(item,index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

