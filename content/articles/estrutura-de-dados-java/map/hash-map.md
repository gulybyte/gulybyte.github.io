---
title: 'HashMap'
description: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-map-colisao.png'
  alt: 'HashMap colisão Java.'
  width: 401
  height: 311
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'HashMap'
    - name: 'description'
      content: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'HashMap | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Map, HashMap'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-map-colisao.png'
    - name: 'og:image:width'
      content: '401'
    - name: 'og:image:height'
      content: '311'
    - name: 'og:image:type'
      content: 'image/png'
---

# HashMap.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Como funciona?
É uma tabela de hash com `<K, V>`, ou seja, key-value (chave e valor) que nós controlamos. O `K` é o identificador dos elementos, é igual no `HashSet` porém aqui nós controlamos a chave, e obviamente por ela ser um identificador ela é única, vejamos em código:
```java
var names = new HashMap<Integer, String>();
names.put(1, "John Doe");
names.put(2, "Jane Doe");
names.put(3, "Aulus");
names.put(3, "Agerius");

System.out.println(names);

System.out.println(names.get(3));
```

Como pode ver, tínhamos `3=Aulus` e mudamos para `3=Agerius` e quem ficou com a chave `3` foi `Agerius`, afinal uma chave só pode estar ligada a um valor. É uma estrutura de dados relativamente simples não?

HashMap é a nova versão do antigo `Hashtable`, exceto que é não sincronizado e permite nulos. Inclusive o `Hashtable` extende de `Dictionary` que é a antiga implementação da interface `Map` que segue a mesma ideia de `<K, V>`, por curiosidade em outras linguagens (como Python) a estrutura chamada de `Map` se chama `Dictionary`.

Em resumo, `HashMap` é um `<K, V>` onde `K` é a nossa chave e `V` é o valor, e então eles são passados para um mapa que é uma tabela de hash, onde o hash seria o índice e esse hash obviamente é o `K`.
![HashMap Java](/static/images/articles/estrutura-de-dados-java/hash-map.png){width="100%"}

## E se houver colisões?

Assim como os elementos em `HashSet` são os hashes, em `HashMap` nossa `K` é o hash pois key é unica, mas e em casos onde duas keys geram o mesmo hash?, nesse caso HashMap lida com isso exatamente como `HashSet` lida. "No caso de colisão, um único value armazena várias entradas sequenciais de outros values".

Vamos usar o mesmo exemplo que usamos em `HashSet`, colisão entre duas String's que gerem o mesmo hash ("FB" e "Ea"):
![HashMap Colisão Java](/static/images/articles/estrutura-de-dados-java/hash-map-colisao.png){width="100%"}

**Em resumo é uma estrutura para quando quer ter indices, ou seja, uma estrutura perfeita entre o melhor dos dois mundos de List e Set, ou seja, search e find rápidos.**

::next-content
---
content: Fim da série. Retorne a home artigos.
linkcontent: /articles/estrutura-de-dados-java
---
::
