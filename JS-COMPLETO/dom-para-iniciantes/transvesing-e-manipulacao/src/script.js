// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.animais-lista')

// const lista = document.querySelector('.animais-lista')

// console.log(lista.children[--lista.children.length])
// console.log(lista.querySelector('li:last-child'))

// console.log(lista.previousSibling)

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// const mapa = document.querySelector('.mapa')

// // contato.removeChild(titulo)
// contato.replaceChild(lista, titulo)

// contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement('h1')
// novoh1.innerText = 'novo titulo'
// novoh1.classList.add('titulo')

// mapa.appendChild(novoh1)

// const h1 = document.querySelector('h1')
// const faq =document.querySelector('.faq')

// const cloneh1 = h1.cloneNode(true)



// faq.appendChild(cloneh1)


// exercicios
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)


// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const promixoDD = primeiroDt.nextElementSibling




// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML


