---
title: 'LinkedHashSet'
description: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png'
  alt: 'LinkedHashSet Java.'
  width: 2889
  height: 2415
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'LinkedHashSet'
    - name: 'description'
      content: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'LinkedHashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, LinkedHashSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png'
    - name: 'og:image:width'
      content: '2889'
    - name: 'og:image:height'
      content: '2415'
    - name: 'og:image:type'
      content: 'image/png'
---

# LinkedHashSet.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

## LinkedHashSet. Como funciona o `Hash Table` com `Set` e uma `Linked List` vinculada.

##### Inicialmente, uma ressalva.

Aqui, evitarei entrar em minúcias sobre o LinkedHashSet, uma vez que, no próprio código-fonte Java, [é explicitamente indicado que o LinkedHashMap é, de certa maneira, confuso quanto ao seu funcionamento](https://github.com/openjdk/jdk/blob/ecd25e7d6f9d69f9dbdbff0a4a9b9d6b19288593/src/java.base/share/classes/java/util/LinkedHashMap.java#L187).  Se até os engenheiros do Java consideram isso, quem sou eu para discordar? Além disso, como o LinkedHashSet se baseia no LinkedHashMap, a explanação fica um tanto desafiadora. Portanto irei simplificar, mantendo as informações essenciais para uma compreensão clara.

##### A Estrutura

O LinkedHashSet representa uma estrutura de dados fascinante, assemelhando-se ao HashSet na prevenção de duplicatas, mas com uma distinção crucial: aqui, a ordem de inserção é preservada, ao contrário do HashSet convencional. Mas como essa façanha é alcançada? O LinkedHashSet utiliza tanto a tabela de hash quanto uma lista encadeada, sendo esta última responsável por manter a ordem de inserção. Em relação aos atributos, a essência reside nos seguintes pontos:
 - **chave (key):** similar ao HashSet, é gerada a partir do valor;
 - **valor (value):** nossa informação central;
 - **próximo (next):** gerenciamento de colisões de hash;
 - **depois (after):** atributo crucial para a manutenção da ordem, apontando para o elemento subsequente;
 - **antes (before):** outro atributo crucial para a ordem, apontando para o elemento anterior.

> Nota: O desempenho do LinkedHashSet é ligeiramente inferior ao do HashSet, devido ao custo adicional associado à manutenção da lista encadeada.

#### Exemplificando

Vamos agora examinar o mesmo exemplo utilizado no HashSet, porém com a distinção de que nossos dados agora se apresentam ordenados. Vale notar que, dada a maturidade esperada dos leitores, apresentarei o exemplo já contemplando colisões de hash:

```java
var names = new LinkedHashSet<String>();

names.add("John Carmack");
names.add("Ea");
names.add("Cormen");
names.add("FB");

System.out.println(names);
```
::outputcode
> `[John Carmack, Ea, Cormen, FB]`
::

Conforme observado, a ordem de inserção foi preservada. Pode ainda pairar alguma perplexidade quanto aos atributos `after`{tag=true} e `before`{tag=true} responsáveis por esse feito, mas sem preocupações; o diagrama oferece uma clara representação de como esses atributos desempenham esse papel.

> imagem mental:

![LinkedHashSet Java](/static/images/articles/estrutura-de-dados-java/linked-hash-set-colisao.png){width=75% position=auto}

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Mantém a ordem de inserção dos elementos, além de fornecer acesso rápido.
 - **`2` -** Implementação simples de uma tabela de hash com uma lista encadeada vinculada.

##### Desvantagens
 - **`1` -** Ligeiramente menos eficiente do que HashSet em termos de velocidade.
 - **`2` -** Ocupa ligeiramente mais espaço que HashSet devido à necessidade da lista encadeada vinculada

#### Uso comum
Manutenção da ordem de inserção dos elementos em uma coleção semelhante ao HashSet.

**Cenário de uso:** Em um sistema de registro de eventos, um LinkedHashSet pode ser utilizado para armazenar eventos na ordem em que ocorreram, facilitando a análise cronológica.


::next-content
---
content: TreeSet
linkcontent: /articles/estrutura-de-dados-java/set/tree-set
---
::
