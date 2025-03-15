// 01)Crie um objeto com os seus dados pessoais
// 02)Deve possui pelo menos duas propriedades nome e sobrenome

// 03)Crie um método no objeto anterior, que mostre o seu nome completo

var meusDados = {
  nome: "João",
  sobrenome: "Gherardi",
  idade: 20,
  corOlhos: "Castanho",
  nomeCompleto(nome, sobrenome) {
    return this.nome + " " + this.sobrenome;
  },
};

console.log(meusDados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dawg = {
  raça: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "de boa";
    }
  },
};
