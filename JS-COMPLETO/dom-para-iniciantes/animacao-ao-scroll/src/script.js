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

// funcão envolvendo a função do menu
function initScrollSuave(){

  //chamada dos linksInternos dentro no menu
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  // validação se o js ta habilitado no browser
  if(linksInternos.length){

      // função ativando o scroll 
      function scrollToSection(event){
        // previnindo o scroll para a parte clicada
        event.preventDefault();
        // chamando o href exato com currentTarget
        const href = event.currentTarget.getAttribute('href');
        // section chamando o href
        const section = document.querySelector(href);
        // scrollIntoView passando behavior e block
        section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
       });
 
//  forma alternativa
//   const topo = section.offsetTop;
//   window.scrollTo({
  //     top: topo,
  //     behavior: "smooth",
  //   });
}

    // forEach ativando função de click
    linksInternos.forEach((link) =>{
      link.addEventListener('click', scrollToSection);
    });
  }
}

// chamando a função criada 
initScrollSuave();


// funcão envolvendo a função das sections
function initAnimacaoScroll(){

  //chamada dos sections
  const sections = document.querySelectorAll('.js-scroll');
  
  // validação se o js ta habilitado no browser
  if(sections.length){
    
    // chamada da altura do window 
    const windowMetade = window.innerHeight * 0.6;
    
    // fução para animar o scroll
    function animaScroll(){
      // forEach para ocorrer a função de visibilitade para cada section
      sections.forEach((section)=>{

        // criando variavel que pega o top de cada section
        const sectionTop = section.getBoundingClientRect().top;
        // const de sectionTop - windowMetade que ira comparar se é menor que 0
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        
        // if de isSectionVisible se a varialvel der certo colocar adicionar a class ativo e se der else remover
        if(isSectionVisible){
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    };
    
    // chamar função de animar o scroll 
    animaScroll();
    
    // adicionando evento de scroll chamando a função de animar o scroll com window
    window.addEventListener('scroll', animaScroll)
  };
};

// chamada da função envolvendo a função das sections
initAnimacaoScroll()
  
  









