function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); // imagens
  const tabContent = document.querySelectorAll('.js-tabcontent section'); // conteudo
  
  
  if(tabMenu.length && tabContent.length){
      tabContent[0].classList.add('ativo');
    
      function activeElement(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', ()=>{
        activeElement(index);
      });
    });
  };
};

initTabNav();

// funcão envolvendo a função do faq 
function initAccordion(){
  //chamada dos dt dentro de faq
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo';
  // validação se o js ta habilitado no browser
  if(accordionList.length){
    
    //adicionando class no dt e dd
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);
    
    //função de toggle nas classes do dt e dd
    function activeAccordion(){
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }
    
    //forEach de click em dt
    accordionList.forEach((item)=>{
      item.addEventListener('click', activeAccordion);
    });
  };
};

//chamando a função do faq para ele ativar 
initAccordion();










