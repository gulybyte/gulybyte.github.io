---
title: "Map's"
description: 'Map | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/map.png'
  alt: 'Map Java.'
  width: 611
  height: 271
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: "Map's"
    - name: 'description'
      content: 'Map | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'Map | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'Map | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'Map | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'Map | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Map, HashMap'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/map.png'
    - name: 'og:image:width'
      content: '611'
    - name: 'og:image:height'
      content: '271'
    - name: 'og:image:type'
      content: 'image/png'
---

# Map's.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

<div class="float-768-disable" style="float: left; font-size: 1.3em;">

- [HashMap](/articles/estrutura-de-dados-java/map/hash-map/)


</div>

<div class="float-768-disable" style="float: right">

  ![Map (parecido com função matemática com indexador)](/static/images/articles/estrutura-de-dados-java/map.png){width=200}
</div>

<div class="clear-both"></div>
<div style="padding:1rem 0"></div>

| Tipo | Armazenamento | Ordenação |
| - | - | - |
| HashMap | key-value (tabela hash) | Sem ordem |
| LinkedHashMap | key-value (tabela hash) | Ordem por inserção |
| TreeMap | key-value (RB-Tree) | Ordem das chaves ou comparador |

## Outros

Se você leu a sessão [Set](/articles/estrutura-de-dados-java/set) e leu o [HashMap](/articles/estrutura-de-dados-java/map/hash-map) então você já sabe como funciona `LinkedHashMap` e `TreeMap`, a diferença é que o hash no Map diferente de Set, é a key.
