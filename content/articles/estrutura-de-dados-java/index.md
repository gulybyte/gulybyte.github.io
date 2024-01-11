---
title: 'Estrutura de Dados com Java'
description: 'Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png'
  alt: 'Dados Estruturados x Não Estruturados.'
  width: 2244
  height: 1132
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
      content: '2244'
    - name: 'og:image:height'
      content: '1132'
    - name: 'og:image:type'
      content: 'image/png'
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
---


# Serie - Fundamentos de Estrutura de Dados Elementar com Java.

<h2 style="font-size:1em;text-align:center;padding-top:0em!important;border-bottom:0px">Data Structures + Algorithms = Programs de Niklaus Wirth.</h2>

![Dados Estruturados x Não Estruturados](/static/images/articles/estrutura-de-dados-java/dados-estruturados-x-nao-estruturados.png){width=700px quality=80}

---

<main>

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

Mesmo que, em linguagens de alto nível, geralmente usemos as estruturas que a própria linguagem nos fornece, a compreensão de seus funcionamentos é de suma importância. Portanto, o conteúdo desta série de anotações está centrado no **estudo das estruturas de dados do `Collections Framework`** da linguagem de programação Java.

O `Collections Framework` do Java é um conjunto de classes e interfaces que fornecem estruturas de dados de alto nível eficientes para armazenar e manipular objetos em Java. É uma biblioteca onde ficam todas as estruturas de dados padrão da linguagem que podem ser reutilizadas.

As **principais interfaces e classes** que vamos estudar são estas (mas são apenas o básico e o mais usado; atualmente [essa lista](https://docs.oracle.com/en/java/javase/21/docs/api/overview-tree.html){target=_blank} é muito mais extensa):

> hierarquia elementar do `Collections Framework`:

![Hierarquia rudimentar do Collections Framework do Java.](/static/images/articles/estrutura-de-dados-java/collections-framework-java.png)

</main>

Lembrando que essa hierarquia é elementar, rudimentar, é apenas uma simplificação, não é a hierarquia completa nem a correta. [Confira a verdadeira aqui](https://docs.oracle.com/en/java/javase/21/docs/api/overview-tree.html){target=_blank}. Estão aqui apenas as estruturas de dados que considero como as principais, são também as que estudaremos ao longo desta série.

> Opcional: [Alguns beneficios do Collections Framework (clique)](https://docs.oracle.com/javase/tutorial/collections/intro/index.html#benefits-of-the-java-collections-framework){target=_blank}

<details>
<summary>
  <h5 style="display: inline;cursor:pointer;">
    Curiosidade Interessante: O Nascimento das Estruturas de Dados Elementares em Java. (clique)
  </h5>
</summary>

<br>

No embrião do Java, originalmente batizado como `Oak`, as únicas estruturas de dados elementares disponíveis eram o venerável `Vector` e o confiável `Hashtable`. Uma nota curiosa: o `Hashtable`, na época, não seguia o padrão de nomenclatura atual, que deveria ser chamado de `HashTable`.

Entretanto, à medida que Java evoluiu e enfrentou desafios mais complexos, a demanda por uma variedade mais ampla de estruturas de dados cresceu. Isso culminou no desenvolvimento do tão essencial `Collections Framework` no Java 1.2.

Uma curiosidade que frequentemente causa confusão (eu mesmo já me vi nessa situação) é a relação da interface `Map` com o `Collections Framework`. Ao contrário das outras estruturas de dados, `Map` não estende diretamente de `java.util.Collection`, gerando um equívoco comum. No entanto, é importante salientar que, sim, `Map` é parte integral do `Collections Framework`. [O porque de Map não estender de Collections é visto aqui](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/designfaq.html#a14){target=blank}.

</details>

# Vamos as estruturas.

::next-content
---
content: Começe aqui! (interface List)
linkcontent: /articles/estrutura-de-dados-java/list
---
::

<div class="clear-both"></div>

#### Nota para o leitor <i class="pi pi-exclamation-triangle" style="color: yellow; font-size: 25px;"></i>

Como mencionado, _"o conteúdo desta série de anotações está centrado no estudo das estruturas de dados do `Collections Framework` da linguagem de programação Java"_. Portanto **não irei explicar metódo a metódo**, meu objetivo é destrinchar as estruturas de dados sem a sobrecarga de explicações monótonas sobre cada método do `Collections Framework`. Afinal, quem precisa de redundância quando a magia está na descoberta?

Se surgir alguma interrogação durante os exemplos de código, relaxe! [Aqui estão links diretos para a documentação oficial](/articles/estrutura-de-dados-java/links-ref){target=_blank}. Mantenha esses links prontos em guias adicionais, para uma consulta relâmpago se necessário.

Motivo para isso: Não quero recriar o que já existe. Este não é mais um daqueles artigos "clone". O que pretendo é destrinchar as estruturas de dados, não o `Collections Framework` em si, ele será apenas para facilitar as explicações.

#### Dicas 💡

Esta série sobre estruturas de dados foi projetada para quem já possui conhecimento intermediário em programação (nível júnior). Recomenda-se ter familiaridade com lógica de programação, alguma linguagem de programação e conceitos de Programação Orientada a Objetos (POO), além de noções básicas de estruturas. Se você nunca teve contato com estruturas de dados e é iniciante na programação, é altamente recomendável buscar outros recursos para aprendizado. Uma simples série de artigos não proporcionará uma base sólida para iniciantes. Um material que posso recomendar é o livro [Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos](https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634){target=_blank} (um excelente recurso). Se você já é um programador pleno ou sênior, esta série pode não oferecer desafios adequados. Para seu caso, recomenda-se um livro como o de Cormen [Introduction to Algorithms](https://www.amazon.com.br/Introduction-Algorithms-Fourth-Thomas-Cormen/dp/026204630X/ref=sr_1_2){target=_blank} (imperdível para se aprofundar no assunto).

::next-content
---
content: Começe aqui! (interface List)
linkcontent: /articles/estrutura-de-dados-java/list
---
::
