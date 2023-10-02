---
title: 'Estrutura de Dados com Java'
description: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
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
      content: 'Estrutura de Dados com Java.'
    - name: 'description'
      content: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
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


# Serie - Fundamentos de Estrutura de Dados Elementar com Java.

<h2 style="font-size:1em;text-align:center;padding-top:0em!important;border-bottom:0px">Data Structures + Algorithms = Programs de Niklaus Wirth.</h2>

![Dados Estruturados x Não Estruturados](/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png){width=700px quality=80}

---

## Por que estudar?

Poderia responder dizendo o óbvio, que estrutura de dados nos ensina sobre eficiência algorítmica, otimização de memória, <s>entrevistas para BigTechs</s>, bla bla bla. No entanto, essa abordagem muitas vezes torna o assunto tão cativante quanto estudar matemática apenas para passar em uma prova, transformando a motivação em uma mera necessidade pragmática.

Sinceramente, eu gostaria de conseguir persuadi-los a estudar o assunto, porém a de ser essa uma tarefa dispendiosa, visto que seu estudo, para muitos, é um caminho penoso sem ultilidade imediata.

**Então, por que estudar?**

> Fique postulado que: **estruturas de dados faz parte da fundação de um bom progrador**.

Enfase em **fundação**. Essa é a disciplina que visa estudar como os dados são organizados, acessados e manipulados na memória.

Quantas vezes você já se viu sem entender por que um código funcionava? A sensação de usar uma `lib` sem compreender seu funcionamento? De vez em quando tudo bem, mas se isso se torna uma constante, algo está errado, especialmente se essa sensação se torna uma conformidade.

Seguindo esse raciocinio. Entender o minimo de estrutura de dados é crucial, facilita a compreensão de como as coisas funcionam por de baixo dos panos, melhorando a capacidade de aprender e se adaptar a novas tecnologias.

De qualquer forma, fica aqui minha provocação, caso seja uma pessoa de brio, que admite mas não se conforma com a ignorância, que não quer seguir sendo um analfabeto funcional em programação, convido a continuar a leitura.

## Collections Framework.

###### _Ok, exagerei um pouco acima. Ficou um pouco sensacionalista. Mas vamos lá._

Mesmo que, em linguagens de alto nível, geralmente usemos as estruturas que a própria linguagem nos fornece, a compreensão de seus funcionamentos é de suma importância. Portanto, o conteúdo desta série de artigos está centrado no estudo do `Collections Framework` da linguagem de programação Java.

<main>

O `Collections Framework` do Java é um conjunto de classes e interfaces que fornecem estruturas de dados de alto nível eficientes para armazenar e manipular objetos em Java. É uma biblioteca onde ficam todas as estruturas de dados padrão da linguagem que podem ser reutilizadas.

</main>

As **principais interfaces e classes** que vamos estudar são estas (mas são apenas o básico e o mais usado; atualmente [essa lista](https://docs.oracle.com/en/java/javase/21/docs/api/overview-tree.html){target=_blank} é muito mais extensa):

> hierarquia elementar do `Collections Framework`:

![Hierarquia rudimentar do Collections Framework do Java.](/static/images/articles/estrutura-de-dados-java/collections-framework-java.png)

Lembrando que essa hierarquia é elementar, rudimentar, é apenas uma simplificação, não é a hierarquia completa nem a correta. [Confira a verdadeira aqui](https://docs.oracle.com/en/java/javase/21/docs/api/overview-tree.html){target=_blank}. Estão aqui apenas as ED (estruturas de dados) que considero como as principais, são também as que estudaremos ao longo desta série.

<details>
<summary>
  <h5 style="display: inline;cursor:pointer;">
    Curiosidade Interessante: O Nascimento das Estruturas de Dados Elementares em Java. (clique)
  </h5>
</summary>

<br>

No embrião do Java, originalmente batizado como `Oak`, as únicas estruturas de dados elementares disponíveis eram o venerável `Vector` e o confiável `Hashtable`. Uma nota curiosa: o `Hashtable`, na época, não seguia o padrão de nomenclatura atual, que deveria ser chamado de `HashTable`.

Entretanto, à medida que Java evoluiu e enfrentou desafios mais complexos, a demanda por uma variedade mais ampla de estruturas de dados cresceu. Isso culminou no desenvolvimento do tão essencial `Collections Framework` no Java 1.2.

Uma curiosidade que frequentemente causa confusão (eu mesmo já me vi nessa situação) é a relação da interface `Map` com o `Collections Framework`. Ao contrário das outras estruturas, `Map` não estende diretamente de `java.util.Collection`, gerando um equívoco comum. No entanto, é importante salientar que, sim, `Map` é parte integral do `Collections Framework`.

</details>

# Vamos as estruturas.

> (por interface).

---

## [List](/articles/estrutura-de-dados-java/list)

- **ArrayList** - um `array` dinâmico;
- **LinkedList** - estrutura `Node` duplamente ligada;
- **Vector** - um `ArrayList` `thread-safe`;
- **Stack** - `stack` do tipo `LIFO`;

## [Queue](/articles/estrutura-de-dados-java/queue)

- **PriorityQueue** - `queue` do tipo `FIFO`;
- **ArrayDeque** - `queue` do `FIFO` com duas cabeças;

## [Set](/articles/estrutura-de-dados-java/set)

- **HashSet** - tabela de `hash`;
- **LinkedHashSet** - tabela de `hash` com uma lista vinculada;
- **TreeSet** - tree baseada no TreeMap;

## [Map](/articles/estrutura-de-dados-java/map)

- **HashMap** - key-value;
- **LinkedHashMap** - key-value com uma lista vinculada;
- **TreeMap** - `tree` do tipo <span style="color: red;">R</span><span style="color: black;">B</span>Tree;
- **Hashtable** - um HashMap só que thread-safe.


::next-content
---
content: Começe aqui!
linkcontent: /articles/estrutura-de-dados-java/list
---
::
