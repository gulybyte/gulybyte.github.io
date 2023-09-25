---
title: 'ArrayDeque'
description: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-deque.png'
  alt: 'ArrayDeque Java.'
  width: 3638
  height: 1419
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'ArrayDeque'
    - name: 'description'
      content: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'ArrayDeque | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, ArrayDeque'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-deque.png'
    - name: 'og:image:width'
      content: '3638'
    - name: 'og:image:height'
      content: '1419'
    - name: 'og:image:type'
      content: 'image/png'
---

# ArrayDeque.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

**É igual a estrutura anterior, mas você pode fazer ambas operações e ambas as cabeças.**

A visualização geral é essa:
![ArrayDeque Java](/static/images/articles/estrutura-de-dados-java/array-deque.png)

Embora seja difícil imaginar um cenário prático para o uso de uma estrutura de dados como ArrayDeque, há um caso em que ela pode ser muito útil. Suponha que você esteja lidando com uma aplicação que recebe eventos em uma ordem específica, como uma Stack, em que os últimos eventos a chegar são os primeiros a serem processados. No entanto, há um limite de tamanho para essa Stack e, eventualmente, muitos eventos começam a chegar ao mesmo tempo, tornando o processamento lento. Em uma estrutura de dados convencional, seria necessário pausar a chegada de eventos e processar todos os elementos até o final da Stack, para que os eventos mais antigos não fiquem defasados. Mas com a ArrayDeque, é possível processar a fila simultaneamente pelas duas extremidades, mantendo um equilíbrio perfeito e excelente performance. Além disso, caso o limitador seja acionado, é possível deixar os eventos chegarem enquanto o processamento é feito no final da fila, sem precisar pausar o recebimento de novos eventos. Com isso, é possível manter uma estrutura de dados leve e performática, sem sacrificar a velocidade de processamento.
