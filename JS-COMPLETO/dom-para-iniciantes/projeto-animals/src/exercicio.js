
const imgs = document.querySelectorAll('.js-tabmenu li')
const contents = document.querySelectorAll('.js-tabcontent section')

if (imgs.length && contents.length){
  contents[0].classList.add('ativo')

  function ativarElemento(index){
    contents.forEach((section)=>{
      section[index].classList.remove('ativo')
    })
    contents[index].classList.add('ativo')
  }
  
  imgs.forEach((img, index)=>{
    img.addEventListener('click', ()=>{
      ativarElemento(index)
    })
  })
}


