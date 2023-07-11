import outsideClick from "./outsideclick.js";

export default function menuMobile(){
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstar'];
  
function openMenu (event){
  menuList.classList.add('active');
  menuButton.classList.add('active');
  outsideClick(menuList, ['click', 'touchstar'], () => {
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  });
};
eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
};

