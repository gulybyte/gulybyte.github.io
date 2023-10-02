---
title: 'Vector'
description: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png'
  alt: 'Vector x ArrayList Java.'
  width: 1969
  height: 1303
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: 'og:title'
      content: 'Vector'
    - name: 'description'
      content: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: ' | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, Vector, Vector vs ArrayList'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png'
    - name: 'og:image:width'
      content: '1969'
    - name: 'og:image:height'
      content: '1303'
    - name: 'og:image:type'
      content: 'image/png'
---

# Vector.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## Como funciona? | ArrayList vs Vector

**`Vector` é basicamente um ArrayList sincronizado**, o que significa que é seguro para uso em ambientes com várias threads (multi-thread), e é claro que isso diminui sua performance em comparação com `ArrayList`. O `ArrayList` costuma manter 50% do seu tamanho, já o `Vector` aumenta 100% por tamanho, ou seja, em memória ele tem o dobro de capacidade que seu tamanho real.

Uma visualização disso é:
![ArrayList x Vector Java](/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png)

**Em resumo, use Vector quando precisa de um ArrayList que é thread-safe.**

::next-content
---
content: Stack
linkcontent: /articles/estrutura-de-dados-java/list/stack
---
::
