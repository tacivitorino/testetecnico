
# Projeto de Automação de Testes - Playwright

Este projeto contém testes automatizados desenvolvidos com **Playwright** para validar os endpoints da **Dog API**.

## Objetivo

Automatizar cenários de teste para garantir mais qualidade, agilidade e confiabilidade nas validações da API, verificando respostas, estrutura dos dados e tratamento de cenários negativos.

## Antes de executar o projeto, é necessário ter instalado:

- Node.js  
- npm  
- VS Code ou outro editor de código  

## Cenários automatizados

### Cenários positivos
- Validar a listagem de todas as raças
- Validar o retorno de imagens de raças informadas
- Validar o retorno de imagem aleatória

### Cenários negativos
- Validar o retorno de erro ao consultar uma raça inexistente
- Validar o retorno de erro ao consultar uma sub-raça como se fosse raça principal

## Tecnologias utilizadas

- **Node.js**
- **Playwright**
- **JavaScript**

## Documentação da API

Dog API Documentation:  
https://dog.ceo/dog-api/documentation/

## Endpoints testados

- `GET /breeds/list/all`
- `GET /breed/{breed}/images`
- `GET /breeds/image/random`

## Estrutura do projeto

```bash
api/
├── tests/
│   └── dog_api.spec.js
├── node_modules/
├── playwright-report/
├── test-results/
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md

## Instalação
Clone o projeto ou acesse a pasta api e execute o comando abaixo para instalar as dependências:

npm install
Como executar os testes
Executar todos os testes
npx.cmd playwright test
Executar um arquivo específico
npx.cmd playwright test tests/dog_api.spec.js
Abrir o relatório HTML
npx.cmd playwright show-report
Validações realizadas

## Os testes verificam:
Status code das respostas
Campo status
Estrutura do campo message
Retorno de lista de imagens para raças válidas
Retorno de erro para entradas inválidas
Observações
Para o endpoint GET /breed/{breed}/images, foram utilizadas raças válidas como affenpinscher, akita, beagle, entre outras.
O endpoint GET /breeds/image/random retorna uma imagem aleatória de qualquer raça.
O projeto foi separado do projeto web para facilitar a organização e manutenção.
Autor Taciana Vitorino