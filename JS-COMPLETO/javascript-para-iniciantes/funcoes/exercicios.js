// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p')

const totalP = Array.prototype.reduce.call(p, (acumulador, item) => acumulador + item.innerText.length, 0);

console.log(p);
console.log(totalP);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento (tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? conteudo.innerHTML = conteudo : null; 
  return elemento;
};
  

console.log(criarElemento('div', 'azul', 'sou a porra do conteudo'));





// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novaFunction = criarElemento.bind(null, 'h1', 'titulo');

console.log(novaFunction())