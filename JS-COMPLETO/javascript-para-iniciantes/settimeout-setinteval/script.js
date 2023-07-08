// const btn = document.querySelector('button')

// // function texto(){
//   //   console.log('texto')
//   // };
  
//   btn.addEventListener('click', handleClick);
  
//   function handleClick(){
//     setTimeout( () => {
//       console.log(this);
//     }, 1000);
//   }
  
//   setTimeout(() => {
//     console.log('oi');
//   }, 2000);

// // for(let i = 0; i < 20; i++){
// //   setTimeout(() => {
// //     console.log(i)
// //   }, 1000 * i);
// // };




let i = 0;
const meuLoop = setInterval(() => {
    console.log(i);
    i++;
    if(i > 20){
      clearInterval(meuLoop);
    }
  }, 1000);
