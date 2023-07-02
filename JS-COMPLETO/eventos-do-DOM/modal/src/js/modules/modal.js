export default function initModal(){
  
}

const botaoAbrir = document.querySelector('[data-modal="abrir"]')
const botaoFechar = document.querySelector('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-modal="container"]')

function modal (event){
  event.preventDefault();
  containerModal.classList.toggle('ativo')
}

function fecharModal (event){
  event.preventDefault();
  containerModal.classList.remove('ativo')

}

function container(event){
if (event.target === containerModal){
  fecharModal(event);
}
}

botaoAbrir.addEventListener('click', modal);
botaoFechar.addEventListener('click', fecharModal);
containerModal.addEventListener('click', container);

