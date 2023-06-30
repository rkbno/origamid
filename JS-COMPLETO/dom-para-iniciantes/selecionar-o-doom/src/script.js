// const animais = document.getElementById('animais')
// console.log(animais)

// const gridSection = document.getElementsByClassName('grid-section')
// console.log(gridSection)

// const primeiraLi = document.querySelector('li')
// console.log(primeiraLi)

// const primeiraUl = document.querySelector('ul')
// console.log(primeiraUl)

// const linksInternos = document.querySelector('[href^="#"]')
// console.log(linksInternos)

// const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg)

// const gridSectionHTML = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// primeiraUl.classList.add('grid-section')

// // console.log(gridSectionHTML[0])
// // console.log(gridSectionNode[0])

// gridSectionNode.forEach((item, index) => {
//   console.log(item) 
// });

// const arrayGrid = Array.from(gridSectionHTML)

// arrayGrid.forEach(function(item){
//   console.log(item)
// })

// exercicios
// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="src/img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2')
console.log(h2)

// Selecione o último p do site
const p = document.querySelectorAll('p')
console.log(p[--p.length])



