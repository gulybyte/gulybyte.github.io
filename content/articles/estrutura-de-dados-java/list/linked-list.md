---
title: 'LinkedList'
description: 'ListLinkedList vs ArrayListas | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-list.png'
  alt: 'LinkedList Java.'
  width: 3488
  height: 1800
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
      content: 'LinkedList vs ArrayList | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'LinkedList vs ArrayList | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'LinkedList vs ArrayList | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'LinkedList vs ArrayList | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'LinkedList vs ArrayList | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, LinkedList, LinkedList vs ArrayList'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-list.png'
    - name: 'og:image:width'
      content: '3488'
    - name: 'og:image:height'
      content: '1800'
    - name: 'og:image:type'
      content: 'image/png'
---

# LinkedList.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

**Basicamente é uma estrutura chamada Node, ou seja, estrutura com seus valores que apontam para outros nós**. Fuçando o código fonte Java olha só o que eu encontrei:

```c
LinkedList$Node(java.util.LinkedList.Node<E> prev,
  E element, java.util.LinkedList.Node<E> next) {}
```

Ou seja, de formas rudimentar concluímos que nessa estrutura temos:

  - **prev -** endereço do registro anterior;
  - **element -** elementos em si, os valores nele;
  - **next -** endereço do próximo registro.

Isso significa que cada elemento possui um ponteiro para seu próximo e/ou anterior nessa lista.

## ArrayList vs LinkedList

Creio que a essa altura do campeonato você já tenha quase que entendido o funcionamento do `LinkedList`, mas agora qual sua diferença em relação a estrutura estudada anteriormente(`ArrayList`)?. Vamos ver essa tabela de [benchmark](https://gist.github.com/gulybyte/5682491f14ddf489d1c05d042673ca5e){target="_blank"}:

| Operação | ArrayList | LinkedList |
| - | - | - |
| add (final lista) | 3.064.831 | 4.056.815 |
| add (posição aleatoria lista) | 188.153.952 | 20.694.666 |
| get (posição aleatoria lista) | 81.242 | 112.373.462 |
| remove (posição aleatoria lista) | 376.194.016 | 112.884.713 |

Para adição no final `ArrayList` é levemente mais rápido. Para adições em posições aleatórias `LinkedList` é 10x mais rápido. Para get não tem jeito `ArrayList` é ordens de grandeza mais rápido (isso se da pois não é possível fazer aritmética de busca por ponteiro em Nodes). Remoção em posição aleatória `LinkedList` é pouco mais de 3x mais rápido.

Ou seja, **`ArrayList` para quando tem inserção no final e quando tem muita busca e `LinkedList` para quando tem remoção e adição em posição aleatória**.

Em resumo `LinkedList` é muito mais rápido para inserções e remoções em posições aleatórias `ArrayList` precisa redimensionar seu tamanho, já `LinkedList` faz algo assim:

![LinkedList Java](/static/images/articles/estrutura-de-dados-java/linked-list.png)

Por ao adicionar novo elemento, não precisa redimensionar tamanho objeto, você apenas precisar mudar dois endereços, e sem duplicata do seu objeto.
