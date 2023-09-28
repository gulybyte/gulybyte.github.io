---
title: 'HashSet'
description: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png'
  alt: 'HashSet Java.'
  width: 2400
  height: 1913
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'HashSet'
    - name: 'description'
      content: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'HashSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, HashSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png'
    - name: 'og:image:width'
      content: '2400'
    - name: 'og:image:height'
      content: '1913'
    - name: 'og:image:type'
      content: 'image/png'
---

# HashSet.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?

É uma estrutura de dados bem rápida. É uma tabela de hash, onde temos sim de certa forma um `<K, V>` (chave e valor), porém nós não lidamos com chave em HashSet (para isso use HashMap), a chave é insignificante (não trabalhamos e nem podemos lidar diretamente com elas), usada apenas para encontrar os elementos na tabela, e também para garantir que não tenhamos elementos duplicados:

A visualização geral é essa:

![HashSet Java](/static/images/articles/estrutura-de-dados-java/hash-set.png)

Se você prestou atenção, deve ter percebido que os elementos adicionados ao `HashSet` não ficaram na mesma ordem que foram inseridos. Isso acontece porque o `HashSet` não mantém nenhuma ordem, nem mesmo a ordem de inserção. A forma como os elementos são ordenados varia de acordo com a implementação da JVM e de outros fatores. Além disso, é importante mencionar a função hash utilizada, que é uma função de hash padrão da classe `Object`. O número total de hashes possíveis é de 32 bits (em algumas implementações pode chegar a 64 bits), o que é relativamente pouco, e isso pode levar a **colisões entre os elementos do `HashSet`**.

## E se houver colisões?
> "No caso de colisão, um único value armazena várias entradas sequenciais de outros values".

Se o hash é usado como próprio "identificador" dos elementos para evitar duplicação, o que acontece se houver dois elementos diferentes que geram o mesmo hash?

Bem, o algoritmo de hash usado por `HashSet` é chamado de hashing by chaining, sua implementação não é importante aqui, mas ele funciona como uma tabela de hash e as **"colisões são resolvidas colocando em um único value armazena várias entradas sequenciais de outros values".** Ficou meio confuso eu sei, mas na visualização que já veremos vai dar para entender facilmente.

Vamos usar exemplo de colisões com duas String, as String's "FB" e "Ea" geram o mesmo hash 2236. Isso aconteçe pois o hashCode() do Java usa uma função polinomial que produz um número finito de valores hash, por isso a colisão. Veremos agora então uma visualização de como funciona essa lista encadeada em caso de colisões ("FB" e "Ea"):

![HashSet Colisão Java](/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png)

**Em resumo é uma estrutura para quando não quer elementos duplicados e não depende de ordenação, em caso de colisões como visto, se for fazer pesquisa nela vai jogar para um lista ligada vai verificar o primeiro elemento, se não for passa para o próximo e assim por diante.**

::next-content
---
content: LinkedHashSet
linkcontent: /articles/estrutura-de-dados-java/set/linked-hash-set
---
::
