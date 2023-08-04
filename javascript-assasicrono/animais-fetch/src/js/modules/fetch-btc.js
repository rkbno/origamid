export default function initFecthBtc(){

};



fetch('https://blockchain.info/ticker')
.then(r => r.json())
.then(btc => {
  const btcPreco = document.querySelector('.btc-preco');
  btcPreco.innerText = (1000 / btc.BRL.sell).toFixed(4);
}).catch(error => {
  console.log(error)
})