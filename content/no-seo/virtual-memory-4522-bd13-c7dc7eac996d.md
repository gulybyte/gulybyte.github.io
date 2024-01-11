---
title: 'Virtual Memory Resumão'
---

# Virtual Memory Resumão

> É uma matéria `low-level`. Geralmente é visto ao estudar sobre C, assembly ou arquitetura de computadores.

---

`Virtual Memory` é uma técnica que usa a memória secundária como um cache para armazenamento secundário. É usada para compartilhamento seguro e eficiente da memória entre programas.

A `Virtual Memory` é divida em vários segmentos, os principais são: `Stack`, `Heap`, `Text`, `ROData` e `BSS`.

![](/static/images/no-seo/4522-bd13-c7dc7eac996d.png){width=12% position=auto}

| Virtual Memory | Ultilidade |
| - | - |
| Stack | Armazena dados temórarios, como ponteiros armazenados na Heap. Ela cresce e diminui automaticamente a medida que dados são retirados ou inseridos. |
| Heap | Armazena dados durante a execução de um programa, dados esses gerenciados pelo programador ou por um Garbage Collector. É um espaço de memória dinâmico que cresce ou diminui conforme a nescessidade. |
| Text | Contém o código exécutavel do programa, instruções assembly para a máquina. É um segmento estático, apenas de leitura. |
| ROData | Segmento de dados somente de leitura, como constantes hardcoded no código, paramentros entre funções que não mudam (depende do compilador), e outras coisas. É um segmento estático. |
| BSS | Onde é armazenado variaveis globais estaticas que não foi atribuido nenhum valor, o que estão com valores `null`. É um segmento estático. |
