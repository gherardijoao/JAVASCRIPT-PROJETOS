# Movie Seat Booking

Este projeto é uma aplicação web interativa para reserva de assentos em uma sala de cinema. A aplicação permite que o usuário selecione o filme desejado, escolha os assentos disponíveis e visualize o total de assentos selecionados e o valor total da compra.

## Funcionalidades

1. **Seleção de Filmes**:

   - O usuário pode escolher entre quatro filmes disponíveis:
     - _Avengers: Endgame_ ($10)
     - _Joker_ ($12)
     - _Toy Story 4_ ($8)
     - _The Great Gatsby_ ($9)
   - O preço do bilhete é atualizado automaticamente com base no filme selecionado.

2. **Seleção de Assentos**:

   - A sala é dividida em várias fileiras com assentos que podem estar disponíveis ou ocupados.
   - Assentos ocupados estão marcados visualmente e não podem ser selecionados.
   - Assentos selecionados são destacados com uma cor diferente, indicando que estão prontos para compra.

3. **Contagem de Assentos e Cálculo de Preço**:

   - A quantidade de assentos selecionados é atualizada em tempo real.
   - O total da compra é calculado automaticamente com base no número de assentos selecionados e o preço do filme escolhido.

4. **Persistência de Dados**:
   - A aplicação utiliza o `localStorage` para salvar as preferências do usuário, incluindo:
     - Assentos selecionados
     - Filme selecionado
   - Isso permite que o usuário retorne à aplicação e continue de onde parou, com os dados pré-selecionados restaurados.

## Estrutura do Projeto

- **HTML**: Estrutura da interface da aplicação, incluindo a área de seleção de filmes, a grade de assentos, e a tela de exibição.
- **CSS**: Estilização da aplicação, com temas de cores, layout flexível e feedback visual para os estados dos assentos (disponível, ocupado e selecionado).
- **JavaScript**: Lógica interativa da aplicação, incluindo:
  - Eventos para manipulação de seleção de assentos e atualização do total.
  - Funções para salvar e restaurar os dados do `localStorage`.

## Como Executar

1. Clone este repositório em sua máquina.
2. Abra o arquivo `index.html` em um navegador da web.
3. Escolha um filme, selecione os assentos desejados e veja o cálculo do total.

## Observações

- Este projeto é desenvolvido para ambientes de navegação modernos e utiliza `localStorage`, o que significa que as preferências serão mantidas no mesmo dispositivo.
- A aplicação não possui integração com backend, então a reserva é apenas simulada e não há validação em tempo real com outros usuários.
