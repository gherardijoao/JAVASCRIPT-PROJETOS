# Movie Seat Booking

Este projeto é uma aplicação web interativa para reserva de assentos em uma sala de cinema. A aplicação permite que o usuário selecione o filme desejado, escolha os assentos disponíveis e visualize o total de assentos selecionados e o valor total da compra.

## Funcionalidades
1. **Seleção de Filmes**: 
   - O usuário pode escolher entre quatro filmes disponíveis.
   - O preço do bilhete é atualizado automaticamente com base no filme selecionado.

2. **Seleção de Assentos**:
   - A sala é dividida em várias fileiras com assentos que podem estar disponíveis ou ocupados.
   - Assentos ocupados estão marcados visualmente e não podem ser selecionados.

3. **Contagem de Assentos e Cálculo de Preço**:
   - A quantidade de assentos selecionados é atualizada em tempo real.
   - O total da compra é calculado automaticamente com base no número de assentos selecionados e o preço do filme escolhido.

4. **Persistência de Dados**:
   - A aplicação utiliza o `localStorage` para salvar as preferências do usuário.

## Visualização
Veja abaixo uma captura de tela da interface do projeto:

![Captura de Tela](https://github.com/GHERARDI-JOAO/JAVASCRIPT-PROJETOS/blob/main/movieSeat/Captura%20de%20Tela%20(50).png)

## Estrutura do Projeto

- **HTML**: Estrutura da interface da aplicação.
- **CSS**: Estilização da aplicação, com temas de cores, layout flexível e feedback visual.
- **JavaScript**: Lógica interativa da aplicação.

## Como Executar

1. Clone este repositório em sua máquina.
2. Abra o arquivo `movieSeat.html` em um navegador da web.
3. Escolha um filme, selecione os assentos desejados e veja o cálculo do total.
  
## Observações

- Este projeto é desenvolvido para ambientes de navegação modernos.
- A aplicação não possui integração com backend.
