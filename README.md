## Diferença entre testes unitários e testes E2E:

Os testes unitários servem para verificar partes pequenas e funções isoladas do sistema, já os testes E2E simulam a interação real do usuário percorrendo a aplicação do começo ao fim.

## Pré-requisitos

`node` versão 20 ou superior 

# Comando para instalar

`npm install -g yarn`

## Instalar as dependências

`yarn install` 

## Comando para rodar os testes unitários

`yarn test`

## Comando para rodar os testes E2E

- O ambiente deve ser expo web
- Inicie o expo na web `yarn expo start --web`
- Em outro terminal rode `yarn cypress open`, para abrir a interface dos teste
    - Nesse caso clique em um dos teste e rode.
- Modo headless `yarn cypress run` 
