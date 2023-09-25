---
title: 'TreeSet'
description: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso-x-red-black-tree.png'
  alt: 'TreeSet Java.'
  width: 2201
  height: 946
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: 'TreeSet'
    - name: 'description'
      content: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'TreeSet | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, TreeSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso-x-red-black-tree.png'
    - name: 'og:image:width'
      content: '2201'
    - name: 'og:image:height'
      content: '946'
    - name: 'og:image:type'
      content: 'image/png'
---

# TreeSet.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

## Tree's?

Trees são literalmente arvores, então imagine essa estrutura de dados como uma árvore com galhos e sub-galhos e sub-galhos de sub-galhos e por ai vai, a Tree especificamente usada por TreeSet é uma chamada <span style="color: red;">Red</span>-<span style="color: black;">Black</span>Tree, mas para entender a <span style="color: red;">R</span><span style="color: black;">B</span>Tree é necessário antes entender o básico de Tree o porque existe a <span style="color: red;">R</span><span style="color: black;">B</span>Tree.

A Tree mais básica que temos é uma Tree que só pode ter 2 filhas, e cada filha também só pode ter 2 filhas (sub-filhas), uma representação básica temos:

![Tree simples estrutura de dados](/static/images/articles/estrutura-de-dados-java/tree-classica.png)

## Qual a utilidade?

Com elas a busca é muito mais rápida, um exemplo simples é o famoso Binary search (ou busca binária). Para verificar se existe um número em um array faríamos uma busca sequencial de um a um até chegar nele, porém na busca binaria dividimos o total por dois, verificamos se a segunda metade e maior ou menor que nosso número, se menor cortamos ela e vamos para próxima etapa e assim por diante, visualização disso é:

![Busca Binaria x Busca Sequencial estrutura de dados](/static/images/articles/estrutura-de-dados-java/busca-binaria-x-busca-sequencial.gif)

**A arte de dividir para conquistar.**

Vamos ver outro exemplo na tree, digamos que temos o seguinte conjunto: `{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}`, em um array se fossemos procurar `101` precisaríamos percorrer todos os elementos, já em uma BST (binary search tree) percorreríamos apenas 4: `34 -> 84 -> 99 -> 100 -> 101`, veja:
![Binary Search Tree estrutura de dados](/static/images/articles/estrutura-de-dados-java/binary-search-tree.png)

Note os elementos foram armazenas na sequencia dada (`{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}`), sendo os elementos menores são jogados a esquerda da árvore e os maiores a direita. Nesse nosso caso temos uma árvore bem distribuída, mas em um caso onde nosso conjunto não vai facilitar que nossa arvore fique bem distribuída?, ex `{99, 89, 100, 101, 102, 103, 104, 105, 106}`:
![Binary Search Tree Pior Caso estrutura de dados](/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso.png)

Pense agora, para encontrarmos o elemento `106` vamos precisar percorrer a árvore inteira. Mas e nesses casos, o que fazemos para manter a árvore bem distribuída?, bom, é agora que chegamos nas **<span style="color: red;">Red</span>-<span style="color: black;">Black</span> Tree**, construídas exatamente para manter uma árvore bem distribuída. Mas como ela faz isso?

## Como funciona <span style="color: red;">Red</span>-<span style="color: black;">Black</span> Tree?

A diferença no geral entre a **<span style="color: red;">Red</span>-<span style="color: black;">Black</span>** e a BST, é que a <span style="color: red;">R</span><span style="color: black;">B</span>Tree tem um campo que é quem "define as cores", que claramente são <span style="color: red;">Vermelho (**R**ed)</span> e <span style="color: black;">Preto (**B**lack)</span>, mas com certeza não é uma cor, a cor é só para melhor compreensão e principalmente visualização a nós humanos. Esse campo que seria a cor é na realidade um campo de um 1 bit, no caso um boolean, e geralmente o bit 1 é associado à cor vermelha e o bit 0 é associado à cor preta.

> ***A partir de agora vamos chamar os elementos da tree pelo nome correto que é Node!!**

O Node raiz (o primeiro) ele é sempre preto, e por padrão ao criar um novo Node ele será vermelho, a regra geral é que **um Node vermelho só pode ter Node pai e Nodes filhos da cor preta**. Os últimos Nodes (comumente chamados de LEAF) são Nodes vazios, que servem basicamente para os ponteiros dos verdadeiros últimos Nodes não serem nulos para seguir a regra das cores. Mas como que o <span style="color: red;">R</span><span style="color: black;">B</span>Tree consegue rebalancear nossos Nodes?, ela faz a rotação dos nós (por baixo dos panos é um swap de ponteiros) de forma que mantenha a árvore bem balanceada. Veja exemplo com nossos conjuntos anteriories (`{34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101}` e `{99, 89, 100, 101, 102, 103, 104, 105, 106}`):

![Binary Search Tree x Red-Black Tree estrutura de dados](/static/images/articles/estrutura-de-dados-java/binary-search-tree-x-red-black-tree.png)

> pior caso:

![Binary Search Tree Pior Caso x Red-Black Tree estrutura de dados](/static/images/articles/estrutura-de-dados-java/binary-search-tree-pior-caso-x-red-black-tree.png)

**Bem melhor não é?**, agora que você já entendeu o que é uma **<span style="color: red;">Red</span>-<span style="color: black;">Black</span> Tree** fica mais fácil de entender como que ela consegue ordenar elementos de uma tabela de hash (nossa interface `Set`) por `ASC` ou `DESC` por exemplo.
