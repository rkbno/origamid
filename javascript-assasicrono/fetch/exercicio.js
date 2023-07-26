// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector('#Number');
const res = document.querySelector('.res')
const btnCep = document.querySelector('#btn');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
  event.preventDefault();
  const cep = inputCep.value
  buscaCep(cep)
};

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.text())
.then(body => {
  res.innerText = body;
});
};







// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const p = document.querySelector('p')

function fetchBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    p.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  });
};

setInterval(fetchBtc, 500);

fetchBtc();




// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const chuck = document.querySelector('.piada')
const btnChuck = document.querySelector('.prox')

function chuckClick(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {chuck.innerText = piada.value})
}

chuckClick();

btnChuck.addEventListener('click', chuckClick)




