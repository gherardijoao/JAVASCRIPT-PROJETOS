// 01)Retorne o url da página atual utilizando o objeto window

function retornaURL() {
  return window.location.href;
}

// 02) Seleciona o primeiro elemento da página que
// possua a classe ativo

constElementoAtivo = document.querySelector(".ativo");

// 03) Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// 04) Retorne a largura da janela

const windowWidth = window.innerWidth;
console.log(windowWidth);
