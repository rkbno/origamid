
// função da função das imagens
function initTabNav(){

  // chamando os elementos de imagem e conteudo
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); // imagens
  const tabContent = document.querySelectorAll('.js-tabcontent section'); // conteudo
  
  // validação se o browser possui ativação de javascript
  if(tabMenu.length && tabContent.length){

    // conteudo visivel sempre que abre o browser
      tabContent[0].classList.add('ativo');
    
      // função ativar e desativar as classes da section
      function activeElement(index){
      
        // forEach desativar as classes das section
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      
      // adicionar a class ativo na imagem clicada
      tabContent[index].classList.add('ativo');
    };

    // forEach de ativar a imagem 
    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', ()=>{
        activeElement(index);
      });
    });
  };
};

// chamar a função do nav para ele ativar
initTabNav();


// funcão envolvendo a função do faq 
function faq(){
  
  //chamada dos dt dentro de faq
  const faqLista = document.querySelectorAll('.js-accordion dt');
  
  // validação se o js ta habilitado no browser
  if (faqLista.length){
    
    //adicionando class ao abrir o browser no dt e dd
    faqLista[0].classList.add('ativo');
    faqLista[0].nextElementSibling.classList.add('ativo');
    
    //função de toggle nas classes do dt e dd
    function ativo(){
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    };
    
    //forEach de click em dt
    faqLista.forEach((event)=>{
      event.addEventListener('click', ativo);
    }); 
  };
};

//chamando a função do faq para ele ativar 
faq();



// funcão envolvendo a função do menu
function initScrollSuave(){

  //chamada dos linksInternos dentro no menu
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  // validação se o js ta habilitado no browser
  if(linksInternos.length){

      // função ativando o scroll 
      function activeScrollSmooth (event) {
        
        // previnindo o scroll para a parte clicada
        event.preventDefault();
        // chamando o href exato com currentTarget e getAttribute
        const href = event.currentTarget.getAttribute('href');
        // section chamando o href
        const section = document.querySelector(href);
        // scrollIntoView passando behavior e block
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
 
//  forma alternativa
//   const topo = section.offsetTop;
//   window.scrollTo({
  //     top: topo,
  //     behavior: "smooth",
  //   });
  }

    // forEach ativando função de click
    linksInternos.forEach((item)=>{
      item.addEventListener('click', activeScrollSmooth)
    })
}
// chamando a função criada 
initScrollSuave();
