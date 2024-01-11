---
title: "Map's"
description: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
  alt: 'Map Java.'
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
      content: "Map's"
    - name: 'description'
      content: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Map | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Map, HashMap'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
    - name: 'og:image:width'
      content: '2201'
    - name: 'og:image:height'
      content: '1816'
    - name: 'og:image:type'
      content: 'image/png'
---

# Mapas.
<div class="img_pag_init">

  ![Map (parecido com função matemática com indexador)](/static/images/articles/estrutura-de-dados-java/set.png){position=auto width=30%}
</div>

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

### Sobre Mapas

Comumente, recorremos à `Map`{tag=true} uando desejamos uma coleção que estabelece uma relação entre chaves e valores, sendo que as chaves não podem estar duplicadas. Valores podem ser duplicados, mas chaves não.

::next-content
---
content: Começando com HashMap
linkcontent: /articles/estrutura-de-dados-java/map/hash-map
---
::

<div class="clear-both"></div>

#### Nota

Não será necessário abordar `Hashtable`{tag=true}, pois compreender HashMap é suficiente. Analogamente a Vector e ArrayList, assim é com Hashtable e HashMap. A distinção entre eles reside na sincronização, sendo Hashtable adequado para ambientes multi-thread, embora com um consumo um pouco mais elevado de memória.

Ao iniciar esta série, mencionei que abordaria os mapeamentos HashMap (já explorado), `LinkedHashMap`{tag=true}, e `TreeMap`{tag=true}. No entanto, compreender HashMap torna as explicações subsequentes "redundantes". LinkedHashMap assemelha-se a `LinkedHashSet`{tag=true}, e TreeMap é comparável a `TreeSet`{tag=true}. A diferenciação reside na abordagem de geração de hash para armazenar dados, um aspecto que exploraremos ao estudar a próxima estrutura: `HashSet`{tag=true}, posteriormente a esta, discutiremos LinkedHashSet e TreeSet.

Ao entender as variações na geração de hash em estruturas pertencentes às interfaces `Set`{tag=true} e `Map`{tag=true}, você poderá facilmente aplicar esses conceitos ao converter essas estruturas entre as interfaces Set e Map. Portanto, não vejo a nescessidade em explicar LinkedHashMap e TreeMap se veremos LinkedHashSet e TreeSet.

::next-content
---
content: Começando com HashMap
linkcontent: /articles/estrutura-de-dados-java/map/hash-map
---
::

<div class="clear-both"></div>

## Estruturas

- [HashMap](/articles/estrutura-de-dados-java/map/hash-map/)

::next-content
---
content: Começando com HashMap
linkcontent: /articles/estrutura-de-dados-java/map/hash-map
---
::
