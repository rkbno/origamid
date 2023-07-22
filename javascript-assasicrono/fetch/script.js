 const cep = fetch('./sobre.html');

const div = document.createElement('div');

 cep.then(r =>  r.text())
 .then(body => {
  div.innerHTML = body
  const titulo = div.querySelector('h1')
  document.querySelector('h1').innerText = titulo.innerText
  console.log(titulo)
 });