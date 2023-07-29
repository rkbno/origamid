fetch('./dados.json')
.then(r => r.text())
.then(json => {
// console.log(JSON.parse(json))
});

const config = {
  player: "Google",
  tempo: 25.5

}

localStorage.confi = JSON.stringify(config)

