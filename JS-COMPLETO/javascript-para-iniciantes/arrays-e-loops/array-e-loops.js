

// // var ultimoItem = videoGames.pop();

// // for (var numero = 0; numero < 4; numero++){
// //   console.log(numero)
// // }

// // var i = 0
// // while (i < 10){
// //   console.log(i)
// //   i++
// // }
 

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// // for (var item = 0; item < videoGames.length; item++){
// //   if (videoGames[item] === 'XBOX') {
// //     break;
// //   }
// // console.log(videoGames[item]);

// // }


// videoGames.forEach(function(item){
//   console.log(item)
// })


// exercicios
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilGanhouACopa = [1959, 1962, 1970, 1994, 2002]
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilGanhouACopa.forEach((ano) => {
  console.log(`O brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']


for (var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta])
  if (frutas[fruta] === 'Pera'){
    break;
  }
  console.log(frutas[fruta])
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultima = frutas[frutas.length - 1]
console.log(ultima)


