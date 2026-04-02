# Teste Técnico QA

Projeto de teste técnico com **automação web**, **validação de APIs** e **testes de performance com JMeter**, incluindo evidências, relatório final e instruções de execução.

## Repositório

[https://github.com/tacivitorino/teste-tecnico-performance](https://github.com/tacivitorino/testetecnico)

---

## Objetivo

Este repositório foi criado para apresentar a implementação de cenários de teste em três frentes:

- **Testes Web**: validação de fluxos da aplicação pela interface
- **Testes de API**: validação de requisições, respostas e comportamento dos endpoints
- **Testes de Performance**: validação de carga e pico utilizando Apache JMeter

Além da automação, o projeto também inclui:

- documentação de execução
- evidências dos testes
- relatório final
- análise sobre atendimento ou não do critério de aceitação

## Tecnologias utilizadas
Playwright
TypeScript / JavaScript
Apache JMeter 5.6.3
JMeter Plugins
Node.js
Git / GitHub

## Testes Web
Objetivo

Os testes web têm como finalidade validar o comportamento da aplicação pela interface, garantindo que os fluxos principais funcionem corretamente.

Localização
web/tests/

## Testes de API
Objetivo

Os testes de API têm como finalidade validar:

status code
estrutura da resposta
dados retornados
comportamento funcional dos endpoints
Localização
api/
Execução

Caso os testes de API estejam configurados para execução no projeto, utilize o comando correspondente definido na sua implementação.


## Testes de Performance
Objetivo

Os testes de performance foram criados para avaliar o comportamento da aplicação sob cenários de:

carga
pico

com foco em:

vazão
tempo de resposta
estabilidade
taxa de erros
Localização
performance/jmeter/
---

## Estrutura do projeto

```text
teste_tecnico/
├── api/
├── web/
│   └── tests/
├── performance/
│   ├── jmeter/
│   └── reports/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md

