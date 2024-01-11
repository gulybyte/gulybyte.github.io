---
title: "Queue's"
description: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/fila.png'
  alt: 'Queue.'
  width: 958
  height: 468
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: "Queue's"
    - name: 'description'
      content: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Queue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, PriorityQueue, ArrayDeque'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/fila.png'
    - name: 'og:image:width'
      content: '958'
    - name: 'og:image:height'
      content: '468'
    - name: 'og:image:type'
      content: 'image/png'
---

# Filas.

<div class="img_pag_init">

  ![Fila](/static/images/articles/estrutura-de-dados-java/fila.png){position=auto width=30%}
</div>

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

### Sobre Filas
Comumente, recorremos à `Queue`{tag=true} quando buscamos uma coleção que mantem uma lista de prioridades. Ele é projetada para guardar elementos antes do processamento.

::next-content
---
content: Começando com PriorityQueue
linkcontent: /articles/estrutura-de-dados-java/queue/priority-queue
---
::

<div class="clear-both"></div>

## Estruturas

<details style="padding-bottom: 1rem">
<summary>
  <h5 style="display: inline;cursor:pointer;">
    Opcional: curiosidade intrigante da interface Deque no Java. (clique)
  </h5>
</summary>

<br>

Em nossa jornada pela [hierarquia elementar do Collections Framework](/articles/estrutura-de-dados-java#collections-framework){target=blank}, deparamo-nos com uma fascinante curiosidade sobre a interface Deque, nosso conhecido ArrayDeque não é o único a adotar essa interface. O LinkedList, por sua vez, também a implementa.

O LinkedList não se limita a ser apenas uma lista; ele é uma estrutura multifuncional que abraça as interfaces List e Deque. Essa dualidade se deve à natureza abstrata da estrutura deque, que funciona como uma estrutura de dados que **aponta para objetos anteriores e posteriores**. No caso do LinkedList no Java, baseado em uma Doubly-linked List, a implementação das interfaces List e Deque se torna essencial para alinhar-se com esse conceito.

</details>

- [PriorityQueue](/articles/estrutura-de-dados-java/queue/priority-queue/)
- [ArrayDeque](/articles/estrutura-de-dados-java/queue/array-deque)

::next-content
---
content: Começando com PriorityQueue
linkcontent: /articles/estrutura-de-dados-java/queue/priority-queue
---
::
