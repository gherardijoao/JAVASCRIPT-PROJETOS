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
