// const tabMenu = document.querySelectorAll('.js-tabmenu li') // imagens
// const tabContent = document.querySelectorAll('.js-tabcontent section') // conteudo


// if(tabMenu.length && tabContent.length){
//   tabContent[0].classList.add('ativo')
 
//   function activeElement(index){
//   tabContent.forEach((section) => {
//     section.classList.remove('ativo')
//   })
//   tabContent[index].classList.add('ativo')
// }

// tabMenu.forEach((itemMenu, index) =>{
//   itemMenu.addEventListener('click', ()=>{
//     activeElement(index)
//   })
// })
// }

const imgs = document.querySelectorAll('.js-tabmenu li')
const contents = document.querySelectorAll('.js-tabcontent section')

if (imgs.length && contents.length){
  contents[0].classList.add('ativo')

  function ativarElemento(index){
    contents.forEach((section)=>{
      section.classList.remove('ativo')
    })
    contents[index].classList.add('ativo')
  }
  
  imgs.forEach((img, index)=>{
    img.addEventListener('click', ()=>{
      ativarElemento(index)
    })
  })
}



