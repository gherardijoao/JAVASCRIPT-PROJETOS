# Pokémon Search App

![Pokémon Search App](https://github.com/GHERARDI-JOAO/JAVASCRIPT-PROJETOS/blob/main/PokemonSearch/Captura%20de%20Tela%20(52).png)

Este é o projeto final para a certificação **JavaScript Algorithms and Data Structures** do [freeCodeCamp](https://www.freecodecamp.org/). Ele consiste em uma aplicação web para buscar informações detalhadas sobre qualquer Pokémon usando a API pública da [PokéAPI](https://pokeapi-proxy.freecodecamp.rocks/). Com essa aplicação, os usuários podem buscar por Pokémons pelo nome ou ID e ver detalhes como sprite, tipos, estatísticas e dimensões físicas (peso e altura).

## Funcionalidades

- **Busca de Pokémon**: Digite o nome ou ID do Pokémon para ver suas informações.
- **Exibição de Detalhes**:
  - Sprite (imagem frontal)
  - Tipos com cores específicas
  - Peso e altura do Pokémon
  - Estatísticas de batalha, como HP, ataque e defesa
- **Interface Responsiva**: Layout adaptável para dispositivos móveis e desktops.

## Como Funciona

1. **Busca Dinâmica**: A aplicação realiza uma chamada assíncrona à PokéAPI para buscar os dados do Pokémon desejado.
2. **Exibição das Informações**: Após a busca, os detalhes do Pokémon são exibidos na interface, com estilização condicional para cada tipo.
3. **Estilos Específicos para Tipos**: As cores de cada tipo de Pokémon são exibidas de acordo com sua classe, como `.fire`, `.water`, `.grass`, etc.

## O que Aprendi

- Manipulação do DOM com JavaScript para exibir dados de API.
- Uso de `async/await` para chamadas assíncronas com tratamento de erros.
- Aplicação de CSS com variáveis e classes dinâmicas para personalizar a interface.
- Integração com APIs e manipulação de respostas JSON.

## Como Usar

1. Clone este repositório ou faça o download dos arquivos.
2. Abra o arquivo `pokemon.html` em um navegador.
3. Digite o nome ou ID de um Pokémon e clique no botão de busca para visualizar suas informações.

## Tecnologias Utilizadas

- **HTML5** para a estrutura.
- **CSS3** para estilização.
- **JavaScript (ES6+)** para funcionalidades e requisições assíncronas.

## Contribuições

Sinta-se à vontade para contribuir com melhorias e sugestões para o projeto!
