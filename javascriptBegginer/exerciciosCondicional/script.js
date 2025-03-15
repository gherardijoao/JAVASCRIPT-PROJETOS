// 📝 Exercícios de Condicionais em JavaScript

// 01) Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var myAge = 20;
var familiarAge = 40;

if (myAge > familiarAge) {
  console.log("É maioir");
} else if (myAge < familiarAge) {
  console.log("É menor");
} else if (myAge === familiarAge) {
  console.log("É igual");
}

function imc(peso, altura) {
  const imc = peso / altura ** altura;
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "eu gosto do ceu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "eu nao gosto de cores";
  }
}

console.log(corFavorita("verde"));

// 02) Crie uma função para verificar se um valor é Truthy

function isTrue(x) {
  return !!x;
}

var ehTrueOuNao = isTrue(28);
console.log(ehTrueOuNao);

// 03) Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado1, lado2, lado3, lado4) {
  return lado1 + lado2 + lado3 + lado4;
}

var quadradao = perimetro(20, 30, 20, 30);
console.log(quadradao);

// 04) Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

var meuNome = nomeCompleto("João", "Gherardi");
console.log(meuNome);

// 05) Crie uma função que verifica se um número é par

function ehPar(numero) {
  if (numero % 2 === 0) {
    return "É PAR";
  } else {
    return "Não é par";
  }
}

var number = ehPar(20);
console.log(number);

// 06) Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

var dadozin = tipoDeDado(20);
console.log(dadozin);

// 07) addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", function () {
  console.log("JOao GHerardi");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
