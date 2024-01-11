---
title: 'Vector'
description: 'Vector vs ArrayList | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png'
  alt: 'Vector x ArrayList Java.'
  width: 3114
  height: 2547
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
      content: '3114'
    - name: 'og:image:height'
      content: '2547'
    - name: 'og:image:type'
      content: 'image/png'
---

# Vector.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## `Vector`. Mais que um Simples ArrayList Sincronizado.

O Vector é a resposta quando a segurança em ambientes multi-thread é crucial. Entretanto, essa segurança tem seu preço, o Vector não é tão ágil quanto o ArrayList. Enquanto este último geralmente mantém 50% de espaço pré-alocado, o Vector vai além, aumentando 100% por tamanho pré-alocado. Em termos simples, a memória do Vector tem o dobro da capacidade em relação ao seu tamanho real.

Mas por que optar pelo Vector em vez do ArrayList? A resposta está na sua sincronização embutida, tornando-o seguro para uso em ambientes com várias threads. Embora essa segurança afete o desempenho, o Vector se destaca quando a consistência dos dados é primordial.

> **imagem mental:**

![ArrayList x Vector Java](/static/images/articles/estrutura-de-dados-java/vector-x-array-list.png){width=65% quality=50 position=auto}

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Similar ao ArrayList, mas é sincronizado, sendo útil em ambientes multithread.
 - **`2` -** Acesso direto aos elementos através de índices.

##### Desvantagens
 - **`1` -** A sincronização pode levar a um desempenho inferior em comparação com estruturas não sincronizadas, se não houver necessidade de concorrência.
 - **`2` -** O redimensionamento automático pode ser custoso.

#### Uso comum
Semelhante ao ArrayList, mas com sincronização para ambientes multithread.

**Cenário de uso:** Em um sistema de reservas de passagens online, um Vector pode ser utilizado para armazenar a lista de assentos disponíveis, garantindo consistência em operações concorrentes.

::next-content
---
content: Stack
linkcontent: /articles/estrutura-de-dados-java/list/stack
---
::
