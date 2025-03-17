function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por" + autor,
  };
}

const livroRetorno = livro("O senhor dos Anéis", 1954, "J.R.R. Tolkien");

console.log(livroRetorno);
