---
title: 'Stack'
description: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/stack.png'
  alt: 'Stack Java.'
  width: 3386
  height: 2306
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: 'og:title'
      content: 'Stack'
    - name: 'description'
      content: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Stack Java | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, Stack, Stack Java'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/stack.png'
    - name: 'og:image:width'
      content: '3386'
    - name: 'og:image:height'
      content: '2306'
    - name: 'og:image:type'
      content: 'image/png'
---

# Stack.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## Pilha. Como funciona a `Stack`.

A Stack, como o próprio nome sugere, é uma pilha. Essa estrutura clássica segue o princípio LIFO (Last-In-First-Out), onde o último elemento a entrar é o primeiro a sair.

Imaginem como uma pilha de pratos. Quando você adiciona um novo prato, ele se torna o topo da pilha. Se precisar remover um prato, você retira o que está no topo, pois foi o último a ser adicionado.

É a mesma forma que a Stack opera. É uma escolha lógica quando a ordem de entrada e saída é crucial. Se você está lidando com dados onde a temporalidade importa, a Stack é a ferramenta certa.

> **exemplo em código:**
```java
var numbersStack = new Stack<Integer>();
numbersStack.push(2);
numbersStack.push(3);
numbersStack.push(5);

System.out.println("Top of the stack: " + numbersStack.peek());

System.out.println("Removing the element: " + numbersStack.pop());

System.out.println("Top of the stack: " + numbersStack.peek());
```
::outputcode
> Top of the stack: 5 <br>&nbsp;
Removing the element: 5 <br>&nbsp;
Top of the stack: 3
::

> **imagem mental:**

![Stack Java](/static/images/articles/estrutura-de-dados-java/stack.png){width=65% quality=70 position=auto}

No entanto, saiba que na atualidade é recomendado mais o uso de Class que derivem diretamente de Deque para quando precisar de um Stack. Isso porque tem as mesmas funcionalidades, são mais flexíveis e mais performáticas.

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Implementa uma estrutura de pilha de forma simples e eficiente. LIFO - Last In, First Out.
 - **`2` -** Operações de empilhamento e desempilhamento são rápidas.

##### Desvantagens
 - **`1` -** Limitado na flexibilidade em comparação com outras estruturas mais gerais, como ArrayList ou LinkedList.
 - **`2` -** Eistem estruturas que fazem o mesmo trabalho e de forma mais rápida, como o [ArrayDeque](/articles/estrutura-de-dados-java/queue/array-deque){target=blank}.

#### Uso comum
Rastreamento de chamadas de função em algoritmos recursivos ou controle de navegação em um navegador web.

**Cenário de uso:** Um navegador web utiliza uma pilha para armazenar a história de navegação do usuário, permitindo a navegação de volta (undo) e para frente (redo) nas páginas visitadas.

::next-content
---
content: Queue (próxima interface)
linkcontent: /articles/estrutura-de-dados-java/queue
---
::
