---
title: 'LinkedList'
description: 'ListLinkedList vs ArrayListas | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-list-adicao-de-elementos.png'
  alt: 'LinkedList Java.'
  width: 3478
  height: 1420
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: 'og:title'
      content: 'LinkedList'
    - name: 'description'
      content: 'LinkedList vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'LinkedList vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'LinkedList vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'LinkedList vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'LinkedList vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, LinkedList, LinkedList vs ArrayList'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-list-adicao-de-elementos.png'
    - name: 'og:image:width'
      content: '3478'
    - name: 'og:image:height'
      content: '1420'
    - name: 'og:image:type'
      content: 'image/png'
---

# LinkedList.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## LinkedList. Como funciona o `Doubly-linked List`.

> A estrutura de dados do LinkedList é sim uma `Linked List`{tag=true} (ou Lista Ligada), porém de forma mais rigorosa, ela é mais especificamente uma `Doubly-linked List`{tag=true} (ou Lista Duplamente Ligada).

A `Doubly-linked List`{tag=true} funciona no Java, através de um objeto chamado `Node`{tag=true}, podemos vê-lo [aqui no código fonte do Java](https://github.com/openjdk/jdk/blob/ecd25e7d6f9d69f9dbdbff0a4a9b9d6b19288593/src/java.base/share/classes/java/util/LinkedList.java#L986){target=blank}:

```java
Node(Node<E> prev, E element, Node<E> next)
  { ... }
```

De forma rudimentar, o parametro `element`{tag=true} é o value, ou seja, o objeto que está sendo armazenado. Já os paramentros `prev`{tag=true} e `next`{tag=true}, funcionam como <abbr title="uma variável que armazena o endereço de memória de um objeto" style="text-decoration: underline dotted">ponteiros</abbr>, sendo respectivamente `prev`{tag=true} (previous) quem aponta para o node anterior, e `next`{tag=true} quem aponta para o próximo node que está a sua frente.

Isso significa que cada node possui seu element e ponteiros para seu próximo e anterior node.

> **exemplo em código:**
```java
final var __ = " ; size: ";
var numbersLinkedList = new LinkedList<Integer>();
numbersLinkedList.addAll(Arrays.asList(
  4,6,8,9
));

System.out.println(numbersLinkedList+__+numbersLinkedList.size());
```
::outputcode
> `[4, 6, 8, 9]` ; size: 4
::

![LinkedList Java](/static/images/articles/estrutura-de-dados-java/linked-list.png)

Vale ressaltar que, para adição, o LinkedList é muito rápido, pois não precisa se redimensionar, internamente ele não usa um array como ArrayList, ele armazena no baixo nivel os nodes em locais como a [`Heap`](/no-seo/virtual-memory-4522-bd13-c7dc7eac996d){target=blank}, como a Heap é dinâmica, os nodes simplesmente são armazenados lá, e para encontrarmos é via ponteiro dos outros nodes.

> **exemplo em código:**
```java
final var __ = " ; size: ";
var numbersLinkedList = new LinkedList<Integer>();
numbersLinkedList.addAll(Arrays.asList(
  4,6,8,10
));

System.out.println(numbersLinkedList+__+numbersLinkedList.size());

numbersLinkedList.add(3, 9);
System.out.println(numbersLinkedList+__+numbersLinkedList.size());
```
::outputcode
> `[4, 6, 8, 10]` ; size: 4 <br>&nbsp;
`[4, 6, 8, 9, 10]` ; size: 5
::

![imagem mental de adição no LinkedList Java](/static/images/articles/estrutura-de-dados-java/linked-list-adicao-de-elementos.png)

Como pode ver, além do novo node, foi preciso apenas alterar dois ponteiros de outros nodes. Para se ter ideia, LinkedList é cerca de 9x mais rápido que ArrayList no quesito adição que não seja no final da estrutura de dados. Afinal de contas, em listas ligadas, seus itens podem estar em qualquer lugar da
memória.

Porém como nada é bala de prata, LinkedList é pessimo no quesito para fazer busca na estrutura de dados, pois para fazer search ele precisa fazer [equals em for em todos os nodes](https://github.com/openjdk/jdk/blob/ecd25e7d6f9d69f9dbdbff0a4a9b9d6b19288593/src/java.base/share/classes/java/util/LinkedList.java#L615){target=blank}, mesmo que o [ArrayList faça o mesmo](https://github.com/openjdk/jdk/blob/ecd25e7d6f9d69f9dbdbff0a4a9b9d6b19288593/src/java.base/share/classes/java/util/ArrayList.java#L299){target=blank}, ainda assim o LinkedList é cerca de **130x pior** que o ArrayList em search, pois diferentemento do ArrayList que é sequencial (o que facilita em fazer search), o LinkedList vai precisar verificar Node a Node, para isso ira em cada Node, ver se corresponde ao element procurado, caso contrario vai precisar verificar o ponteiro do próximo Node, ir no endereço da memória, e repetir o processo. Quanto maior for a LinkedList, pior vai ser para fazer search.

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Eficiente para inserções e remoções frequentes, inclusive em posições aleatórias, pois não requer realocação de memória.
 - **`2` -** Suporta eficientemente operações de remoção e inserção no meio da lista.

##### Desvantagens
 - **`1` -** O acesso direto aos elementos é mais lento do que em ArrayList devido à necessidade de percorrer os Nodes sequencialmente, ou melhor, não existe operação de busca por índice.

#### Uso comum
Implementação de listas encadeadas para operações eficientes de inserção e remoção.

**Cenário de uso:** Em um editor de texto colaborativo em tempo real, uma LinkedList pode ser usada para representar a sequência de caracteres, permitindo inserções e remoções eficientes em qualquer posição do texto.


::next-content
---
content: Vector
linkcontent: /articles/estrutura-de-dados-java/list/vector
---
::

