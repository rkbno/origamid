// // const menu = document.querySelector('.menu')

// // menu.classList.add('ativo')
// // menu.classList.add('azul')
// // menu.classList.removeve('azul')
// // menu.classList.toggle('azul')

// // if (menu.classList.contains('azul')){
// //   menu.classList.add('pussi azul')
// // }

// const animais = document.querySelector('.animais')

// console.log(animais.attributes['data-texto'])

// const img = document.querySelector('img')

// const srcImg = img.getAttribute('alt')

// img.setAttribute('alt', 'é uma raposa')

// const possuiAlt = img.hasAttribute('alt')
// console.log(possuiAlt)

// console.log(img.getAttribute('alt'))

// const carro = {
//   portas: 4,
//   andar(km){
//     console.log(`andou ${km}km`)
//   }
// }



// exercicios
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')


itensMenu.forEach((classe) => {
  classe.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((classe) => {
  classe.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((imagem)=>{
  const i = imagem.hasAttribute('alt')
  console.log(imagem, i)
})
// Modifique o href do link externo no menu
const link = document.querySelectorAll('a[href^="http"]')

link.forEach((ref)=>{
  ref.setAttribute('href', 'https://www.google.com')
})





