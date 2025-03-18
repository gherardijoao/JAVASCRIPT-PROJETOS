var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var item = 0; item < 4; item++) {
  console.log(videoGames[item]);

  if (videoGames[item] === "PS4") {
    break;
  }
}

// 01) Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// 02) Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// 03) Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (frutas[i] === "Pera") {
    break;
  }
}

// 04) Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
