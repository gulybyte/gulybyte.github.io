---
title: 'LinkedHashSet'
description: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png'
  alt: 'LinkedHashSet Java.'
  width: 3244
  height: 2424
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'LinkedHashSet'
    - name: 'description'
      content: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'LinkedHashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, LinkedHashSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png'
    - name: 'og:image:width'
      content: '3244'
    - name: 'og:image:height'
      content: '2424'
    - name: 'og:image:type'
      content: 'image/png'
---

# LinkedHashSet.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

É uma estrutura de dados interessante, semelhante ao `HashSet`, em que não temos duplicação de elementos, mas com uma diferença importante: nela, a ordem pela inserção é mantida. Mas como isso é possível? Basicamente, o `LinkedHashSet` trabalha com outras duas estruturas de dados: a própria `HashSet`, pois ela herda dela, e uma lista duplamente ligada que é adicionada para manter a ordem de inserção.

- Onde HashSet é a tabela de hash com os hashes dos elementos que serve para não ter duplicata de elementos, e como valor um ponteiro para a lista vinculada;
- A lista vinculada (que é uma lista duplamente ligada) é quem tem os elementos e serve para manter a ordem de inserção.

Em visualização fica um pouco mais simples, (observe que aqui já estamos mostrando junto com uma colisão):
![LinkedHashSet Colisão Java](/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png)

**Em resumo é uma estrutura para quando não quer elementos duplicados e depende de ordenação pela inserção, em caso de colisões como visto, é feito igual da HashSet porém seu valor é um ponteiro para seu elemento na lista vinculada.**
