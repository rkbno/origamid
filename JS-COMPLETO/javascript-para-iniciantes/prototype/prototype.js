function Pessoa (nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function (){
    return 'abraçou'
  }
  
};

Pessoa.prototype.andou = function (){
  return this.nome = 'Pessoa andou'
}

const andre = new Pessoa('andre', 28);

console.log(Pessoa.prototype);
console.log(andre.prototype);