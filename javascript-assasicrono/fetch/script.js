 const imagem = fetch('https://viacep.com.br/ws/01001000/json/');


 imagem.then(response => {
  console.log(response.type);
 if(response.status === 404){
  console.log('pagina não existe')
 }
});

