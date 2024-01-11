---
title: 'PriorityQueue'
description: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/priority-queue.png'
  alt: 'PriorityQueue Java.'
  width: 3140
  height: 613
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
      content: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'PriorityQueue | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, PriorityQueue'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/priority-queue.png'
    - name: 'og:image:width'
      content: '3140'
    - name: 'og:image:height'
      content: '613'
    - name: 'og:image:type'
      content: 'image/png'
---

# PriorityQueue.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## PriorityQueue. Como funciona `Queue`.

Como visto na estrutura de dados [Stack](articles/estrutura-de-dados-java/list/stack){target=blank}, a Stack opera com o princípio LIFO (Last-In-First-Out), onde o último elemento a entrar é o primeiro a sair. Agora, vamos direcionar nossa atenção para a intrigante PriorityQueue.

Ao contrário da Stack, a PriorityQueue segue o princípio FIFO (First-In-First-Out). Nesse contexto, o primeiro elemento a entrar é o último a sair, replicando o comportamento de uma fila comum. Essa reviravolta na lógica de ordenação é útil em situações em que a prioridade dos elementos é crucial. O que é útil em situações em que a prioridade dos elementos é crucial.

> **exemplo em código:**
```java
var numbersQueue = new PriorityQueue<Integer>();
numbersQueue.add(2);
numbersQueue.add(3);
numbersQueue.add(5);

System.out.println(numbersQueue);

numbersQueue.poll();

System.out.println(numbersQueue);
```
::outputcode
> `[2, 3, 5]` <br>&nbsp;
`[3, 5]`
::

> **imagem mental:**

![PriorityQueue Java](/static/images/articles/estrutura-de-dados-java/priority-queue.png)

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Mantém os elementos em ordem natural ou com base em um comparador, permitindo acesso eficiente ao elemento de maior prioridade.
 - **`2` -** Implementa uma fila de prioridade eficiente. FIFO - First In, First Out.

##### Desvantagens
 - **`1` -** Não fornece acesso eficiente a elementos arbitrários; a remoção é restrita ao elemento de maior prioridade.
 - **`2` -** A remoção e atualização de elementos específicos são menos eficientes que em outras estruturas, em termos de flexibilidade.

#### Uso comum

Implementação de filas de prioridade em algoritmos como Dijkstra ou algoritmos de roteamento.

**Cenário de uso:** Em um sistema de despacho de tarefas, uma PriorityQueue pode ser usada para priorizar e executar tarefas com base em sua urgência ou importância. Como o [SQS da AWS](https://aws.amazon.com/pt/sqs/){target=_blank}, onde as requisições são processadas por ordem de chegada.

::next-content
---
content: ArrayDeque
linkcontent: /articles/estrutura-de-dados-java/queue/array-deque
---
::
