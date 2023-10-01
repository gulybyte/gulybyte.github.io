---
title: 'Estrutura de Dados'
description: 'Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png'
  alt: 'Dados Estruturados x Não Estruturados.'
  width: 712
  height: 351
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - property: 'og:title'
      content: 'Estrutura de Dados.'
    - name: 'description'
      content: 'Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, Stack, Pilha, Árvores, Trees, Filas, Queues, Mapas, Maps, Set, Algoritmos e Estrutura de Dados Java'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png'
    - name: 'og:image:width'
      content: '712'
    - name: 'og:image:height'
      content: '351'
    - name: 'og:image:type'
      content: 'image/png'
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
---


# Serie - visão geral sobre estrutura de dados Java.

<h2 style="font-size:1em;text-align:center;padding-top:0em!important;border-bottom:0px">Data Structures + Algorithms = Programs de Niklaus Wirth.</h2>

![Dados Estruturados x Não Estruturados](/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png){width=700px quality=80}

---

## Porque estudar?

A disciplina de estrutura de dados visa estudar como os dados são organizados, acessados e manipulados na memória. Em linguagens de alto nível, geralmente usamos as estruturas que a própria linguagem fornece.

Compreender a estrutura de dados facilita a compreensão de como as coisas funcionam por baixo dos panos, melhorando a capacidade de aprender e se adaptar a novas tecnologias. Portanto é o que diferencia um estudante de um profissional.

Sendo direto, como quer entender a fundo conceitos como banco de dados, Kafka, contêineres, sistemas operacionais, SQS e escalabilidade que tem como base você saber e **entender estruturas de dados?**.

## Compreendendo Generics do Java.

Antes de partir para as estruturas, é necessário compreender os Generics do Java. Generics não apenas tornam o código mais seguro, mas também mais legível.

**Código sem Generics:**
```java
List listNames = new ArrayList();
listNames.add("Tom");
listNames.add("Mary");
listNames.add("Peter");
String name2 = (String) listNames.get(1);
```

**Código com Generics:**
```java
List<String> listNames = new ArrayList<String>();
listNames.add("Tom");
listNames.add("Mary");
listNames.add("Peter");
String name2 = listNames.get(1);
```

## Hierarquia Collection Framework.

O `Collection Framework` do Java é um conjunto de classes e interfaces que fornecem estruturas de dados de alto nível e eficiente para armazenar e manipular objetos em Java. É onde fica todas as estruturas de dados padrão da linguagem.

As **principais interfaces e classes** que vamos estudar são essas (mas é só o básico e o mais usado, atualmente [essa lista](https://docs.oracle.com/en/java/javase/17/docs/api/overview-tree.html) é muito mas muito mais grande):

![Collections Framework Java](/static/images/articles/estrutura-de-dados-java/collections-framework-java.png)

Lembrando que essa hierarquia são só as principais, e inclusive ela está bem rudimentar, faltou colocar as `Abstract's` interface e todas as outras estruturas fornecidas pela Collections Framework.

No início do Java (chamado originalmente de `Oak`), as estruturas básicas disponíveis eram o `Vector` e o `Hashtable`. Perceba que o `Hashtable` não segue o padrão de nomenclatura atual sendo que o correto seria `HashTable`. Com o tempo, a necessidade de mais estruturas de dados (devido aos sistemas que ele era usado) surgiu, levando então ao desenvolvimento do Collections Framework no Java 1.2. É comum que haja uma confusão (até eu me confundi) de que o Map não faz parte do Collections Framework, isso devido a ele não extender de `java.util.Collection` como nas outras estruturas, mas ele faz parte sim da Collections Framework.

# Explicando as estruturas.

---

## [List](/articles/estrutura-de-dados-java/list)
> A interface List define uma sequência ordenada de elementos. As implementações disponíveis incluem:

- **ArrayList** - um array dinâmico;
- **LinkedList** - estrutura Node duplamente ligado;
- **Vector** - um ArrayList só que thread-safe;
  - **Stack** - tipo LIFO;

## [Queue](/articles/estrutura-de-dados-java/queue)
> A interface Queue define uma coleção que mantém uma ordem específica para seus elementos. As implementações disponíveis incluem:

- **PriorityQueue** - tipo FIFO;
- **ArrayDeque** - FIFO de duas cabeças;

## [Set](/articles/estrutura-de-dados-java/set)
> A interface Set define uma coleção de elementos únicos, que não se repetem. As implementações disponíveis incluem:

- **HashSet** - tabela hash;
- **LinkedHashSet** - HashSet + <s>LinkedList</s>;
- **TreeSet** - tabela hash em <span style="color: red;">R</span><span style="color: black;">B</span>Tree;

## [Map](/articles/estrutura-de-dados-java/map)
> A interface Map define uma coleção de pares chave-valor, em que cada chave é única. As implementações disponíveis incluem:

- **HashMap** - key-value;
- **LinkedHashMap** - key-value + <s>LinkedList</s>;
- **TreeMap** - key-value em <span style="color: red;">R</span><span style="color: black;">B</span>Tree;
- **Hashtable** - um HashMap só que thread-safe;

::next-content
---
content: Começe aqui!
linkcontent: /articles/estrutura-de-dados-java/list
---
::
