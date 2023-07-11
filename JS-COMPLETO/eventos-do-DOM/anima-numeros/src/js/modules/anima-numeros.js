export default function initAnimaNumeros(){
 
};

const numeros = document.querySelectorAll('[data-numero]');

numeros.forEach(numero => {
  const total = +numero.innerText;
  console.log(total)

  let start = 0;
  const timer = setInterval(() => {
    start++;
    if(start > total){
      clearInterval(timer)
    }
  }, 50);
  console.log(total);
});

