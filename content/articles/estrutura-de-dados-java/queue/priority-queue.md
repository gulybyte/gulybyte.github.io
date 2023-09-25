---
title: 'PriorityQueue'
description: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/priority-queue.png'
  alt: 'PriorityQueue Java.'
  width: 3038
  height: 1528
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'PriorityQueue'
    - name: 'description'
      content: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'PriorityQueue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, PriorityQueue'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/priority-queue.png'
    - name: 'og:image:width'
      content: '3038'
    - name: 'og:image:height'
      content: '1528'
    - name: 'og:image:type'
      content: 'image/png'
---

# PriorityQueue.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

Essa deve ser a mais fácil. Como o nome diz, uma fila de prioridade, **é exatamente como uma fila de supermercado, o primeiro da fila é o primeiro a sair.**

Visualização é:

![PriorityQueue Java](/static/images/articles/estrutura-de-dados-java/priority-queue.png)

Eu sei que pode parecer difícil imaginar um cenário de uso real para filas, mas vou dar um bom exemplo. Imagine que na sua aplicação outras APIs se conectam a você e, de tempos em tempos, enviam dados em formato CSV via cron. Você precisa processar esses dados e salvá-los em um banco de dados, mas antes disso, precisa carregá-los na memória RAM para não ter problema de N+1. Nesse caso, você poderia usar um ArrayList para armazenar os dados, mas pense bem: é um processo em que você pega vários e vários dados, os processa em alguma estrutura de dados em sequência e, no final, os envia em sequência para a base de dados. Nesse cenário, uma estrutura de filas, ou melhor, uma estrutura de filas que já é feita especificamente para um cenário como esse e é performática seria melhor. É aí que entra a PriorityQueue, uma fila que oferece uma ordem específica para os elementos com base em sua prioridade. Ela é ideal para esse tipo de cenário, pois permite que você processe e envie os dados em ordem de prioridade, evitando gargalos e garantindo que tudo seja executado de forma eficiente.
