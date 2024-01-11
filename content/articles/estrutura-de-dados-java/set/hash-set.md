---
title: 'HashSet'
description: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png'
  alt: 'HashSet Java.'
  width: 2142
  height: 1156
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
      content: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'HashSet | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, HashSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png'
    - name: 'og:image:width'
      content: '2142'
    - name: 'og:image:height'
      content: '1156'
    - name: 'og:image:type'
      content: 'image/png'
---

# HashSet.

<h1 style="text-align: left; padding: 0em 0em 1em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---


## HashSet. Como Funciona o `Hash Table` com `Set`.

O HashSet, assim como o HashMap, é uma estrutura de dados baseada em tabelas de hash. Embora ambos compartilhem a ideia de associação chave-valor `<K, V>`{tag=true}, no HashSet essa relação é um pouco diferente. Ao contrário do HashMap, não tratamos diretamente de chaves no HashSet. A chave é utilizada apenas para garantir a ausência de duplicatas de dados, utilizando o hash. Em resumo, o HashSet é semelhante ao HashMap, mas com foco na exclusividade dos dados, evitando duplicatas.

O funcionamento é o seguinte: ao adicionar um elemento, o HashSet recebe esse elemento, e a função hash é aplicada a ele. Em outras palavras, o hash é gerado com base nos dados que estamos inserindo. Para recuperar um dado na estrutura, utilizamos o próprio dado enviado, que é transformado em hash para realizar a busca na estrutura.

Então, qual é a vantagem? Enquanto no HashMap podemos verificar a existência de algo sem possuir todos os dados, utilizando apenas a chave, no HashSet precisamos do dado completo. O Set é ideal para casos em que desejamos evitar duplicatas de dados e verificar a existência desses dados (retornando verdadeiro ou falso) durante a manipulação da estrutura.

> **exemplo em código:**

```java
var names = new HashSet<String>();

names.add("gulybyte");
names.add("Aulus");
names.add("Donald Knuth");

System.out.println(names.contains("gulybyte"));
System.out.println(names.contains("John Doe"));

```
::outputcode
> true <br>&nbsp;
false
::

> **imagem mental:**

![HashSet Java](/static/images/articles/estrutura-de-dados-java/hash-set.png){width=80% position=auto}

Observe que as informações não serão dispostas de forma organizada, nem mesmo por inserção.

## E se houver colisões?

Aqui a resposta é simples: nos bastidores, o HashSet usa o HashMap. Em outras palavras, ele abstrai para nós a necessidade de lidar diretamente com chaves.

Dado que o HashSet implementa o HashMap, a abordagem para lidar com colisões é a mesma. Vamos usar o mesmo exemplo que utilizamos no HashMap.

> **exemplo em código:**

```java
var names = new HashSet<String>();

names.add("John Carmack");
names.add("Ea");
names.add("Cormen");
names.add("FB");

System.out.println(names);
```
::outputcode
> `[Cormen, John Carmack, Ea, FB]`
::

> **imagem mental:**

![HashSet Colisão Java](/static/images/articles/estrutura-de-dados-java/hash-set-colisao.png){width=80% position=auto}

Nesta representação visual, optei por retratar o HashSet de forma mais abstrata, diferentemente de incluir os Nodes como fizemos no HashMap, para variar um pouco e facilitar o entendimento.

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Fornece uma coleção de elementos únicos com acesso rápido.
 - **`2` -** Implementa um algoritmo de tabela de hashing eficiente, sem duplicação de dados. Eficiente para verificar a existência de elementos.

##### Desvantagens
 - **`1` -** Não mantém a ordem dos elementos e pode ter colisões.
 - **`2` -** Sua função de hash hashCode pode levar a colisões frequentes.

#### Uso comum
Verificação eficiente de unicidade de elementos em uma coleção.

**Cenário de uso:** Em um sistema de gerenciamento de permissões, um HashSet pode ser usado para armazenar os papéis atribuídos a um usuário, garantindo que não haja duplicatas e facilitando a verificação de permissões.

::next-content
---
content: LinkedHashSet
linkcontent: /articles/estrutura-de-dados-java/set/linked-hash-set
---
::
