# 📋 Projeto de Validação de Formulário

## Visão Geral

Este projeto é um **validador de formulário de registro** desenvolvido em **JavaScript**, HTML e CSS. O objetivo deste projeto é garantir que os usuários forneçam informações válidas ao se registrarem, melhorando assim a segurança e a experiência do usuário. Este sistema de validação verifica campos obrigatórios, formatação de e-mail, comprimento de senhas e se as senhas correspondem.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura do formulário.
- **CSS**: Para estilização e apresentação visual do formulário.
- **JavaScript**: Para a lógica de validação do formulário.

## Estrutura do Código

O código está organizado em várias funções que cuidam de diferentes aspectos da validação do formulário. Aqui está um resumo das principais partes:

1. **Função `showError(input, message)`**: Exibe uma mensagem de erro ao lado do campo que não foi preenchido corretamente.
  
2. **Função `showSuccess(input)`**: Aplica um estilo de sucesso ao campo quando a validação é bem-sucedida.

3. **Função `checkEmail(input)`**: Verifica se o e-mail inserido pelo usuário está em um formato válido.

4. **Função `checkRequired(inputArr)`**: Verifica se os campos obrigatórios foram preenchidos.

5. **Função `checkLength(input, min, max)`**: Valida o comprimento dos campos de entrada, garantindo que respeitem os limites estabelecidos.

6. **Função `checkPasswordsMatch(input1, input2)`**: Compara duas senhas para garantir que correspondam.

7. **Função `getFieldName(input)`**: Retorna o nome do campo em formato legível, capitalizando a primeira letra.

8. **Listener de Eventos**: Ouvintes de eventos para gerenciar a submissão do formulário e executar as funções de validação.

## Como Usar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador.
3. Preencha os campos do formulário e clique em "Submit" para verificar a validação.
4. Abaixo de cada campo, mensagens de erro aparecerão se os critérios de validação não forem atendidos.

## Aprendizados

Desenvolver este projeto proporciona a oportunidade de:

- Aprender sobre manipulação do DOM e eventos em JavaScript.
- Entender a importância da validação de dados em formulários.
- Praticar a estruturação de código e a organização de funções.
- Melhorar a experiência do usuário com feedback visual em tempo real.

## Conclusão

Este projeto de Validação de Formulário é uma maneira prática de aprender sobre JavaScript e as melhores práticas de desenvolvimento de formulários. Através da implementação de validações, você não apenas melhora a segurança, mas também a usabilidade da sua aplicação web.

Para visualizar o formulário, acesse a imagem abaixo:

![Formulário de Registro](https://github.com/GHERARDI-JOAO/JAVASCRIPT-PROJETOS/blob/main/formRegistration/Captura%20de%20Tela%20(32).png)

