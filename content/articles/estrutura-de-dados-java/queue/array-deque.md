---
title: 'ArrayDeque'
description: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-deque.png'
  alt: 'ArrayDeque Java.'
  width: 3700
  height: 1062
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
      content: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'ArrayDeque | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, ArrayDeque'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-deque.png'
    - name: 'og:image:width'
      content: '3700'
    - name: 'og:image:height'
      content: '1062'
    - name: 'og:image:type'
      content: 'image/png'
---

# ArrayDeque.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## `ArrayDeque`. Como funciona o `Double-Ended Queues`.

O ArrayDeque, usa uma variação de uma estrutura de dados chamada `Deque`{tag=true} (ou `Double-Ended Queues`{tag=true}), que é uma estrutura que combina características familiares com um toque único. Aqui, você pode realizar operações em ambas as extremidades, criando assim um híbrido entre as estruturas de dados Stack e PriorityQueue.

Imagine a versatilidade de uma queue padrão, como a PriorityQueue, mas com a distinção de executar operações em ambas as cabeças (extremidades), é assim o funcionamento de uma deque. O ArrayDeque redefine o jogo, permitindo que você adicione e remova elementos tanto no início quanto no final da deque, criando uma abordagem única para manipulação de dados em "ambos os lados".

> **exemplo em código:**
```java
var numbersDeque = new ArrayDeque<Integer>();

numbersDeque.add(6);
numbersDeque.add(8);
numbersDeque.add(9);

System.out.println(numbersDeque);

numbersDeque.addFirst(4);
numbersDeque.addLast(10);

System.out.println(numbersDeque);

numbersDeque.removeFirst();
numbersDeque.removeLast();

System.out.println(numbersDeque);
```
::outputcode
> `[6, 8, 9]` <br>&nbsp;
`[4, 6, 8, 9, 10]` <br>&nbsp;
`[6, 8, 9]`
::

> **imagem mental:**

![ArrayDeque Java](/static/images/articles/estrutura-de-dados-java/array-deque.png)

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Fornece operações eficientes de fila e pilha, sendo um híbrido das duas.
 - **`2` -** Acesso rápido ao início e ao final da deque.

##### Desvantagens
 - **`1` -** Não é tão flexível quanto LinkedList para inserções e remoções no meio da estrutura.

#### Uso comum
Implementação eficiente de fila e pilha, especialmente em algoritmos onde operações de inserção e remoção em ambas as extremidades são frequentes.

**Cenário de uso:** Em um sistema de processamento de eventos em tempo real, um ArrayDeque pode ser usado para armazenar eventos recentes, permitindo rápida adição e remoção tanto no início quanto no final da lista.

::next-content
---
content: Map (próxima interface)
linkcontent: /articles/estrutura-de-dados-java/map
---
::
