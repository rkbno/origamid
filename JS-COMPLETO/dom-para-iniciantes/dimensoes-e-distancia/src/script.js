// const listaAnimais = document.querySelector('.animais-lista')

// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop)

// const raposa = document.querySelector('h2')
// const left = raposa.offsetLeft

// const h2rect = raposa.getBoundingClientRect()

// console.log(h2rect)

// if (h2rect.top < 0){
//   console.log('passou do elemento')
// }

// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.outerHeight,
//   window.innerHeight,
//   window.pageYOffset,
// )

// const small = window.matchMedia('(max-width: 600px').matches

// if(small) {
//   console.log('usuario mobile')
// } else {
//   console.log('usuario desktop')
// }


// exercicios
// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
const imgTop = img.offsetTop

console.log(imgTop)
// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const imgs = document.querySelectorAll('img')
  let soma = 0
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth
  })
  console.log(soma)
}

window.onload = function(){
  somaImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((link) =>{
  const width = link.offsetWidth
  const height = link.offsetheight
  
  if(width >= 47 && height >= 47){
    console.log(link,'Possui boa acessibilidade')
  } else {
    console.log(link,'Não possui boa acessibilidade')

  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const h1 = document.querySelector('h1')
const menuMobile = document.querySelector('.menu')
const small = window.matchMedia('(max-width: 720px)').matches
console.log(small)
if(small === true){
  menuMobile.classList.add('menu-mobile')
  h1.innerHTML = 'EU SOU FODA'
} else {
  menuMobile.classList.remove('menu-mobile')
  console.log('usuario de desktop')  
}


