---
title: "Queue's"
description: 'Queue | Série - visão geral sobre estrutura de dados Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/fila.png'
  alt: 'Queue.'
  width: 640
  height: 320
head:
  link:
    - rel: 'canonical'
      href: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
  meta:
    - name: 'og:url'
      content: 'https://gulybyte.github.io/articles/estrutura-de-dados-java'
    - property: "og:title"
      content: "Queue's"
    - name: 'description'
      content: 'Queue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'excerpt'
      content: 'Queue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:description'
      content: 'Queue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'application-name'
      content: 'Queue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'og:site_name'
      content: 'Queue | Série - visão geral sobre estrutura de dados Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, Queue, PriorityQueue, ArrayDeque'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/fila.png'
    - name: 'og:image:width'
      content: '640'
    - name: 'og:image:height'
      content: '320'
    - name: 'og:image:type'
      content: 'image/png'
---

# Queue's.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - visão geral sobre estrutura de dados Java.</h1>

---

<div class="float-768-disable" style="float: left;">

- [PriorityQueue](/articles/estrutura-de-dados-java/queue/priority-queue/)
- [ArrayDeque](/articles/estrutura-de-dados-java/queue/array-deque)

</div>

<div class="float-768-disable" style="float: right">

  ![Fila](/static/images/articles/estrutura-de-dados-java/fila.png){width=200}
</div>

<div class="clear-both"></div>
<div style="padding:1rem 0"></div>

| Tipo | Descrição | Detalhes |
| - | - | - |
| PriorityQueue | Queue simples | FIFO, primeiros elementos a entrar são os primeiros a sair. |
| ArrayDeque | Deque -> queue dupla | É possível inserir e remover dados da entrada e da saída. |

## Outras "queues"

Vimos só ArrayDeque e PriorityQueue, mas tem outras mais principais de outras interfaces

<br>

 - **BlockingQueue -** abstrata um tipo de fila que espera que a fila não seja vazia ao recuperar um elemento e aguarda que o espaço fique disponível na fila ao armazenar um elemento;

<br>

 - **BlockingDeque -** é semelhante a BlockingQueue, mas para filasde extremidade dupla. É sub interface do BlockingQueue.
