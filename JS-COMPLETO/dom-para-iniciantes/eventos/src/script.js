// const img = document.querySelector('img');

// function callback(event){
//   console.log(event)
// }

// img.addEventListener('click',callback)

// const animaisLista = document.querySelector('.animais-lista')

// function callbackLista(event){
//   console.log(event.currentTarget)
//   console.log(event.target)
//   console.log(event.type)
// }

// // animaisLista.addEventListener('click', callbackLista)

// const linkExterno = document.querySelector('a[href^="http"]')

// function handleLinkExterno(event){
//   event.preventDefault()
//   console.log(event)
//   console.log(this.getAttribute('href'))
//   console.log(event.currentTarget)
// }

// linkExterno.addEventListener('click', handleLinkExterno)


// const h1 = document.querySelector('h1')

// function handleEvent(event){
//   console.log(event.type, event)
// }

// // h1.addEventListener('click', handleEvent)
// // h1.addEventListener('mouseenter', handleEvent)
// // h1.addEventListener('mousemove', handleEvent)

// // window.addEventListener('scroll', handleEvent)
// // window.addEventListener('risize', handleEvent)
// // window.addEventListener('keydown', handleEvent)


// function handleEvent(event){
//   if(event.key === 's'){
//     document.body.style.background = 'red'
//   } else if (event.key === ' '){
//     document.body.style.background = 'blue'
//   }
//   console.log(event.key)
// }

// window.addEventListener('keydown', handleEvent)

// const imgs = document.querySelectorAll('img')

// function handleImg(event){
//   console.log(event.target)
//   console.log(event.target.getAttribute('src'))
// }

// imgs.forEach((img) =>{
//   img.addEventListener('click', handleImg)
// })


// exercicios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]')
function link(event){
  event.preventDefault()
  linkInterno.forEach((classe) =>{
    classe.classList.remove('ativo')
  })
  event.target.classList.add('ativo')
}
linkInterno.forEach((event)=>{
  event.addEventListener('click', link)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll('body *')

todosElementos.forEach((elemento)=>{
  elemento.addEventListener('click', handleElemento)
})

function handleElemento(event){
  event.currentTarget.remove()
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

window.addEventListener('keydown', teclaT)

function teclaT(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textomaior')
  }
}




