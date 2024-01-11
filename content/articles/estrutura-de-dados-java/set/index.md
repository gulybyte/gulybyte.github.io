---
title: "Set's"
description: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
  alt: 'Set Java.'
  width: 2201
  height: 1816
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: "Set's"
    - name: 'description'
      content: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Set | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, HashSet, LinkedHashSet, TreeSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
    - name: 'og:image:width'
      content: '2201'
    - name: 'og:image:height'
      content: '1816'
    - name: 'og:image:type'
      content: 'image/png'
---

# Set's.

<div class="img_pag_init">

  ![Map](/static/images/articles/estrutura-de-dados-java/set.png){position=auto width=30%}
</div>

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

<details style="padding-top:1.5rem;">
<summary>
  <h5 style="display: inline;cursor:pointer;">
    Opcional: breve explicação da imagem conceitual acima. (clique)
  </h5>
</summary>

![HashSet Java](/static/images/articles/estrutura-de-dados-java/set.png){width=30% quality=30 position=auto}

Isto diz, como funciona em geral uma função hash, onde cada valor será transformando em um unico hash, isso significa que os mesmo valores resultam nos mesmo hashes. (A expressão mostrada, é uma expressão matemática da lógica proposicional).

::equation
---
size: 2re
expression: \{ \forall v \exists! h \} \Leftrightarrow \begin{Bmatrix}  \begin{matrix} \underbrace{ \forall v } \\ \text{para todo value } \end{matrix}\text{ }\begin{matrix} \underbrace{ \exists! h } \\ \text{ existe um, e apenas um hash} \end{matrix} \end{Bmatrix}
---
::

</details>

---

### Sobre Sets
Comumente, recorremos à `Set`{tag=true} quando buscamos uma coleção que não permite elementos duplicados. Set segue o modelo matemático [Set Abstraction](https://en.wikipedia.org/wiki/Set_(abstract_data_type)){target=_blank}.

::next-content
---
content: Começando com HashSet
linkcontent: /articles/estrutura-de-dados-java/set/hash-set
---
::

<div class="clear-both"></div>

## Estruturas


- [HashSet](/articles/estrutura-de-dados-java/set/hash-set/)
- [LinkedHashSet](/articles/estrutura-de-dados-java/set/linked-hash-set/)
- [TreeSet](/articles/estrutura-de-dados-java/set/tree-set/)


<div class="clear-both"></div>
<div style="padding:1rem 0"></div>

::next-content
---
content: Começando com HashSet
linkcontent: /articles/estrutura-de-dados-java/set/hash-set
---
::
