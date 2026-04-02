
# Teste Técnico - Performance com JMeter

## Objetivo

Este projeto tem como objetivo validar o comportamento da aplicação sob cenários de **carga** e **pico**, utilizando o Apache JMeter, com foco em analisar:

- vazão (throughput)
- tempo de resposta
- estabilidade
- taxa de erros

Também são apresentados os resultados obtidos, a análise do critério de aceitação e as evidências da execução.

---

## Tecnologias utilizadas

- **Apache JMeter 5.6.3**
- **JMeter Plugins Manager**
- **Throughput Shaping Timer (jp@gc)**

---

## Estrutura do projeto

```text
performance/
├── jmeter/
│   ├── blazedemo_load.jmx
│   └── blazedemo_spike.jmx
├── reports/
│   ├── relatoriofinal.pdf
│   ├── loadresultado.png
│   ├── spikeresultado.png
│   ├── load.jtl/
│   │   ├── index.html
│   │   └── ...
│   └── spike.jtl/
│       ├── index.html
│       └── ...
├── jmeter.log
└── README.md

Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

Java
Apache JMeter 5.6.3
Plugin Custom Thread Groups / Throughput Shaping Timer

Caminho utilizado localmente para o JMeter:

C:\jmeter\apache-jmeter-5.6.3
Como executar os testes
1. Teste de carga

Executar no PowerShell, dentro da pasta do projeto:

C:\jmeter\apache-jmeter-5.6.3\bin\jmeter.bat -n -t .\jmeter\blazedemo_load.jmx -l .\load_results.jtl -e -o .\load_report
2. Teste de pico
C:\jmeter\apache-jmeter-5.6.3\bin\jmeter.bat -n -t .\jmeter\blazedemo_spike.jmx -l .\spike_results.jtl -e -o .\spike_report
Observação

Caso a pasta de relatório já exista, exclua antes de rodar novamente:

Remove-Item -Recurse -Force .\load_report
Remove-Item -Recurse -Force .\spike_report
Cenários implementados

1. Teste de carga
Configuração do Thread Group
Number of Threads (users): 2000
Ramp-up period: 60 segundos
Loop Count: Infinite
Action after Sampler error: Continue
Throughput Shaping Timer
Start RPS	End RPS	Duration (sec)
50	50	30
50	100	60
100	150	60
150	180	60
180	180	180
Objetivo do cenário

Simular aumento gradual de carga até um patamar estável, com o objetivo de avaliar a capacidade da aplicação em sustentar requisições por segundo de forma contínua.

2. Teste de pico
Configuração do Thread Group
Number of Threads (users): 2000
Ramp-up period: 10 segundos
Loop Count: Infinite
Action after Sampler error: Continue
Throughput Shaping Timer
Start RPS	End RPS	Duration (sec)
50	50	20
50	200	15
200	200	120
200	50	20
Objetivo do cenário

Simular uma subida brusca de carga para verificar como a aplicação se comporta diante de picos repentinos de acesso.

Relatório de execução dos testes

O relatório consolidado em PDF está disponível em:

performance/reports/relatorioload.pdf
performance/reports/relatoriospike.pdf

Resultados obtidos
1. Resultado do teste de carga
Resumo
Total de requisições: 2000
Taxa de erro: 0,00%
Tempo médio: 18.536 ms
Tempo mínimo: 0 ms
Tempo máximo: 174.767 ms
Throughput real: 5,0 req/s
Evidência

Análise

O cenário de carga apresentou estabilidade do ponto de vista de erros, já que não houve falhas nas requisições.
Entretanto, o desempenho não foi satisfatório em termos de vazão e tempo de resposta.

Apesar da configuração prever uma carga progressiva mais alta, o throughput efetivamente alcançado ficou em 5,0 req/s, muito abaixo do esperado para o cenário. Além disso, o tempo médio de resposta ficou em 18,5 segundos, com pico máximo de 174,7 segundos, indicando degradação significativa sob carga sustentada.

Conclusão do teste de carga

Critério de aceitação não satisfatório neste cenário, pois a aplicação não conseguiu sustentar a vazão esperada com desempenho aceitável, mesmo sem apresentar erros.

2. Resultado do teste de pico
Resumo consolidado
Total de requisições: 29.327
Taxa de erro: 0,00%
Tempo médio geral: 386 ms
Tempo mínimo: 241 ms
Tempo máximo: 4.947 ms
Throughput geral: 153,8 req/s
Comportamento durante o pico

Durante os intervalos de maior carga, o teste atingiu aproximadamente:

118 req/s no início
~199 req/s em vários intervalos do pico
média entre 360 ms e 381 ms
0% de erros em toda a execução
Evidência

Análise

O teste de pico apresentou comportamento positivo.
A aplicação suportou a subida brusca de carga e manteve estabilidade ao longo do cenário, sem ocorrência de erros.

Nos momentos de maior pressão, o ambiente chegou muito próximo de 200 requisições por segundo, mantendo latência média abaixo de 500 ms, o que demonstra boa capacidade de resposta nesse tipo de situação.

Conclusão do teste de pico

Critério de aceitação satisfatório neste cenário, pois a aplicação suportou o aumento brusco de carga com boa estabilidade, baixa latência e ausência de falhas.

Conclusão geral

Foram implementados dois cenários de performance: teste de carga e teste de pico.

Síntese final
No teste de carga, a aplicação não apresentou erros, porém teve tempo de resposta elevado e throughput abaixo do esperado, não atendendo plenamente ao critério de aceitação.
No teste de pico, a aplicação apresentou bom comportamento, suportando aproximadamente 200 RPS nos períodos de maior carga, com 0% de erro e tempo médio de resposta de 386 ms.
Conclusão final

O critério de aceitação foi parcialmente satisfeito:

Teste de carga: não satisfatório
Teste de pico: satisfatório

Essa conclusão foi baseada principalmente nos seguintes fatores:

vazão efetivamente alcançada
tempo médio de resposta
tempo máximo de resposta
taxa de erros
estabilidade observada em cada cenário

Evidências adicionais
Relatório em PDF: performance/reports/relatorioload.pdf
                  performance/reports/relatoriospike.pdf
