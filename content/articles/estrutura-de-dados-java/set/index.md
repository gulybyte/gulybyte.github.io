---
title: "Set's"
description: 'Set | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
  alt: 'Set Java.'
  width: 371
  height: 271
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: "Set's"
    - name: 'description'
      content: 'Set | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'Set | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'Set | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'Set | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'Set | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Set, HashSet, LinkedHashSet, TreeSet'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/set.png'
    - name: 'og:image:width'
      content: '371'
    - name: 'og:image:height'
      content: '271'
    - name: 'og:image:type'
      content: 'image/png'
---

# Set's.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

<div class="float-768-disable" style="float: left;">

- [HashSet](/articles/estrutura-de-dados-java/set/hash-set/)
- [LinkedHashSet](/articles/estrutura-de-dados-java/set/linked-hash-set/)
- [TreeSet](/articles/estrutura-de-dados-java/set/tree-set/)


</div>

<div class="float-768-disable" style="float: right">

  ![Set (parecido com função matemática)](/static/images/articles/estrutura-de-dados-java/set.png){width=200}
</div>

<div class="clear-both"></div>
<div style="padding:1rem 0"></div>

| Tipo | Armazenamento | Ordenação |
| - | - | - |
| HashSet | tabela hash | Sem ordem |
| LinkedHashSet | tabela hash | Ordem por inserção |
| TreeSet | árvore | Ordem DESC ou ASC, fornecido na criação dela |

## Performance entre elas

Obviamente `HashSet` sempre vai se sair na frente, afinal ela não tem ordem, logo depois sem muita diferença e ordenada por inserção temos `LinkedHashSet`, por fim no geral sendo dobro mais lenta porém com sistemas de ordenação completo `TreeSet`. [Benchmark:](https://gist.github.com/gulybyte/9373c09e0b92d698945afc451527b853){target="_blank"}

| Operação | HashSet | LinkedHashSet | TreeSet |
| - | - | - | - |
| add	| 35.076.868	| 33.911.887	| 68.956.371 |
| get	| 986.795	| 1.171.634	| 2.420.362 |
| remove | 1.298.586	| 1.772.075	| 1.889.906 |
