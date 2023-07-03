export default function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); // imagens
  const tabContent = document.querySelectorAll('[data-tab="content"] section'); // conteudo
  
  
  if(tabMenu.length && tabContent.length){
      tabContent[0].classList.add('ativo');
    
      function activeElement(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      const descricao = tabContent[index].dataset.anime
      tabContent[index].classList.add('ativo', descricao);
    };

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', ()=>{
        activeElement(index);
      });
    });
  };
};













