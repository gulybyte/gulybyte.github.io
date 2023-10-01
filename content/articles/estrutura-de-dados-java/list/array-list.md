---
title: 'ArrayList'
description: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-list.png'
  alt: 'ArrayList Java.'
  width: 1500
  height: 450
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: 'og:title'
      content: 'ArrayList'
    - name: 'description'
      content: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'ArrayList vs array | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, ArrayList, ArrayList vs array'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-list.png'
    - name: 'og:image:width'
      content: '1500'
    - name: 'og:image:height'
      content: '450'
    - name: 'og:image:type'
      content: 'image/png'
---

# ArrayList.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## ArrayList vs array.

**Arrays são uma sequencia de valores do mesmo tipo, e são imutáveis:**

```java
int[] numeros = {95, 31, 10, 45, 50, 91, 87, 12, 56, 61};
System.out.println(numeros[6]);
```
> saida: `87`

Perceba que todo array começa com o índice 0, isso é básico. No entanto,
é importante ressaltar que os arrays são imutáveis, o que significa que se você precisar
adicionar um novo elemento no meio dele, a JVM criará um novo objeto para cada operação.
Por exemplo, se você precisar adicionar um novo elemento no meio do array, a JVM criará
um `novo objeto` que terá os elementos da segunda metade, um
`segundo objeto` que será a primeira metade, um `terceiro objeto`
que será o novo elemento, um `quarto objeto` que será a primeira metade mais o
novo elemento, e, por fim, um `quinto objeto` que será a primeira
metade mais o novo elemento junto com a segunda metade.

Claro é meio exagero, o <span title="Garbage Collector">GC</span> (Garbage Collector) periodicamente
limpa esses objetos da memória, mas ainda assim a perca de performance em varias iterações é
significante. Portanto, **só use arrays se não precisar iterar novos elementos nele**.

Outro assunto referente a diferença entre arrays e ArrayList's que não se aplica
muito a Java, é que **arrays são sequencia de elementos do mesmo tipo** e **ArrayList
são sequencia de vários tipos**, mas como em Java tudo é um `Object`, podemos "gambiarrar"
arrays de diferentes elementos:

```java
/**
 * ArrayList
 */
List<Integer> listNames = new ArrayList<>();
listNames.add(42);
listNames.add(-17);
listNames.add("Guilherme");
listNames.add(false);

System.out.println(listNames);

/**
 * equivalente em array (diferentes tipos)
 */
Object[] numeros = {42, -17, "Guilherme", false};
System.out.println(numeros[2]);
```

> saida 1: `[42, -17, Guilherme, false]` <p>saida 2: `Guilherme` </p>

Inclusive, no Java não é recomendado deixar List sem tipo definido, e sim usar o `Generics` de Java e dar tipagem ao ArrayList.

Recapitulando, entendemos que ArrayList não é necessário para utilizarmos arrays com
elementos de tipos variados e que os arrays são imutáveis. Então, qual é o papel do ArrayList?
Simples, o **ArrayList é uma estrutura mutável que nos permite adicionar, remover e modificar
elementos de forma eficiente**.

Ou seja, podemos concluir que ArrayList é uma estrutura de lista sequencial,
onde podemos acessar pelo índice e elementos podem ser adicionados ou removidos de forma dinâmica:

![ArrayList Java](/static/images/articles/estrutura-de-dados-java/array-list.png)

Sim ele é um Objeto Dinâmico, porém ainda assim computador não tem memória infinita,
ArrayList costuma ter 50% de memória a mais que seu total, e quando bate o limite vai precisar criar
outro objeto, mas ainda assim é bem menos que o array, pois ele **redimensiona objeto não recria**.

::next-content
---
content: LinkedList
linkcontent: /articles/estrutura-de-dados-java/list/linked-list
---
::
