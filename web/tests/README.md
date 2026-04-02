

# Projeto de Automação de Testes - Playwright

Este projeto contém testes automatizados desenvolvidos com **Playwright** para validar fluxos web, API e performance.

## Objetivo

Automatizar cenários de teste para garantir mais qualidade, agilidade e confiabilidade nas validações do sistema.

## Tecnologias utilizadas

- **Node.js**
- **Playwright**
- **TypeScript**
- **Dotenv**

## Estrutura do projeto

```bash
TESTE_QA/
├── tests/
│   ├── web/
│   │   ├── cadastro_newsletter.spec.ts
│   │   └── pesquisa_artigo.spec.ts
│   ├── api/
│   └── performance/
├── test-results/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md

Pré-requisitos

##Antes de executar o projeto, é necessário ter instalado:
Node.js
npm
VS Code ou outro editor de código
Git Bash ou outro terminal
Instalação do projeto
1. Acesse a pasta do projeto
cd /c/Agi/TESTE_QA
2. Instale as dependências
npm install
3. Instale os navegadores do Playwright
npx playwright install
Configuração do arquivo .env

Para evitar expor dados diretamente no código, algumas informações podem ser armazenadas em variáveis de ambiente.
Foi criado um arquivo .env na raiz do projeto com o conteúdo abaixo:
NEWSLETTER_EMAIL=seuemail@exemplo.com

##Execução dos testes
#Rodar todos os testes
npx playwright test
#Rodar com navegador visível
npx playwright test --headed
#Rodar com interface gráfica do Playwright
npx playwright test --ui
#Rodar apenas os testes web
npx playwright test tests/web
#Rodar apenas os testes de API
npx playwright test tests/api
#Rodar um arquivo específico
npx playwright test tests/web/cadastro_newsletter.spec.ts
npx playwright test tests/web/pesquisa_artigo.spec.ts

##Cenários automatizados
#Testes Web
Pasta: tests/web
Arquivo: cadastro_newsletter.spec.ts

Cenários implementados:
deve exibir erro ao informar e-mail inválido
deve exibir mensagem para confirmar assinatura ao informar e-mail válido já utilizado
Arquivo: pesquisa_artigo.spec.ts

Cenários implementados:
deve permitir pesquisar artigos
abrir artigo e rolar até o final da página

##Boas práticas aplicadas
organização dos testes por tipo dentro da pasta tests
separação entre testes web, API e performance
uso de seletores mais confiáveis com getByRole, getByLabel e locator
uso de variável de ambiente com .env
comentários explicativos nos testes
separação de dados sensíveis do código-fonte
Scripts disponíveis

Relatórios

Para abrir o relatório HTML após a execução dos testes:
npx playwright show-report

##Observações
O projeto deve ser executado a partir da raiz TESTE_QA.
O arquivo .env não deve ser versionado no repositório.
Recomenda-se incluir .env no .gitignore. Mas eu envie para facilitar o teste.
A pasta tests/performance está organizada para evolução futura dos testes.

Autora:Taciana Vitorino

##Finalidade
Este projeto foi desenvolvido com o objetivo de praticar automação de testes, organização de cenários e execução com Playwright, aplicando boas práticas de estruturação e manutenção de testes.



