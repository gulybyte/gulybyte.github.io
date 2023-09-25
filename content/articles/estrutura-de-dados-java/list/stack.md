---
title: 'Stack'
description: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/stack.png'
  alt: 'Stack Java.'
  width: 2363
  height: 1950
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
      content: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'Stack Java | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, Stack, Stack Java'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/stack.png'
    - name: 'og:image:width'
      content: '2363'
    - name: 'og:image:height'
      content: '1950'
    - name: 'og:image:type'
      content: 'image/png'
---

# Stack.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

**`Stack` é o que o próprio nome diz, uma pilha**. Essa é uma estrutura clássicatipo LIFO (last-in first-out), o que significa que o ultimo a entrar é o primeira sair.

**Exemplo código:**
```java
var pilha = new Stack<Integer>();

pilha.push(10);
pilha.push(20);
pilha.push(30);

// exibindo o topo da pilha
System.out.println("Topo da pilha: " + pilha.peek());

// removendo elementos da pilha
System.out.println("Removendo elemento " + pilha.pop());

// exibindo o topo da pilha novamente
System.out.println("Topo da pilha: " + pilha.peek());
```

Uma visualização disso é:
![Stack Java](/static/images/articles/estrutura-de-dados-java/stack.png)

No entanto, saiba que na atualidade é recomendado mais o uso de Class que derivem diretamente de Deque para quando precisar de um Stack. Isso porque tem as mesmas funcionalidades, são mais flexíveis e mais performáticas.
