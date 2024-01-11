---
title: 'ArrayList'
description: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
image:
  src: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-list-redimensionamento.png'
  alt: 'ArrayList Java.'
  width: 2964
  height: 1261
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
      content: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'excerpt'
      content: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:description'
      content: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'application-name'
      content: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'og:site_name'
      content: 'ArrayList vs array | Série - Fundamentos de Estrutura de Dados Elementar com Java.'
    - name: 'keywords'
      content: 'Java, Estrutura de Dados, Série, List, Listas, ArrayList, ArrayList vs array'
    - name: 'og:image'
      content: 'https://gulybyte.github.io/static/images/articles/estrutura-de-dados-java/array-list-redimensionamento.png'
    - name: 'og:image:width'
      content: '2964'
    - name: 'og:image:height'
      content: '1261'
    - name: 'og:image:type'
      content: 'image/png'
---

# ArrayList.

<h1 style="text-align: left; padding: 0em 0em !important; font-size: 2em">Serie - Fundamentos de Estrutura de Dados Elementar com Java.</h1>

---

> Nota: Nesta série sobre estruturas de dados, é natural que a apresentação da primeira delas seja um tanto densa. Não se preocupe, pois isso ocorrerá apenas nesta introdução. Recomendo enfaticamente que se familiarize plenamente com todos os conceitos aqui apresentados, pois estes servirão como base essencial para o entendimento das próximas estruturas de dados, sem serem minuciosamente destrinchadas como nesta introdução.


## `ArrayList` vs `array`. Qual a diferença?

##### Relembrando array

[Relembrando](https://www.w3schools.com/java/java_arrays.asp){target=blank}, os arrays são uma sequencia de valores do mesmo tipo, **são imutáveis** (estáticos). E são usados para armazenar vários valores em uma única variável, em vez de declarar variáveis separadas para cada valor.

> **exemplo em código:**
```java
int[] numbersArray = {2, 3, 5, 7};
System.out.println("third element: " + numbersArray[3]);
System.out.println("length of array: " + numbersArray.length);

numbersArray[3] numbersArray[3] = 11;
System.out.println("new third element: " + numbersArray[3]);

try {
  numbersArray[4] = 13; // error (exceeded size of the array)
} catch(ArrayIndexOutOfBoundsException e) {
  System.err.println("length max array is: "+ numbersArray.length);
}
```
::outputcode
> third element: 7<br>
&nbsp;&nbsp;length of array: 4<br>
&nbsp;&nbsp;new third element: 11<br>
&nbsp;&nbsp;length max array is: 4
::

Á `exception`{tag=true}, ocorre porque o array é estático, ou seja, não é possível adicionar novos elementos além do que é permitido pelo seu tamanho original.

![array Java](/static/images/articles/estrutura-de-dados-java/array.png){width=50% quality=40 position=auto}

##### Diferença entre array e ArrayList

A diferença mais significativa entre o array e o ArrayList é que o **array é estático** e o **ArrayList é dinâmico**. Isso significa que os arrays têm um tamanho fixo determinado na sua criação, logo, não podemos inserir novos elementos. Diferentemente do ArrayList, que serve exatamente para adicionar novos elementos.

## ArrayList. Como funciona o `Resizable Array`{tag=true}.

A estruturas de dados do ArrayList é chamada de `Resizable Array`{tag=true} (ou Array Dinâmico), também denominado simplesmente como Lista. Isso implica que ela cresce ou diminui dinamicamente à medida que os elementos são adicionados ou removidos. Em essência, o ArrayList se redimensiona automaticamente, sendo esta uma de suas principais vantagens.

Outra vantagem é que, por ser uma classe do Collections Framework, essa estrutura de dados implementa diversos métodos, métodos esses que auxiliam na manipulação da estrutura de dados. Porém, não vou detalhar esses métodos, [como já explicado aqui](/articles/estrutura-de-dados-java#nota-para-o-leitor){target=blank}.

Para comprovar isso (redimensionamento automático), vamos replicar o mesmo exemplo do código acima do array, só que agora com ArrayList.

> **código:**
```java
final var __ = " ; size: ";
var numbersList = new ArrayList<Integer>();

numbersList.add(2);
numbersList.add(3);
numbersList.add(5);
numbersList.add(7);
System.out.println(numbersList+__+numbersList.size());

numbersList.add(11);// no error (auto resize)
System.out.println(numbersList+__+numbersList.size());

numbersList.set(2, null);
numbersList.remove(4);
System.out.println(numbersList+__+numbersList.size());
```
::outputcode
> `[2, 3, 5, 7]` ; size: 4 <br>&nbsp;
`[2, 3, 5, 7, 11]` ; size: 5 <br>&nbsp;
`[2, 3, null, 7]` ; size: 4
::

Como podemos ver, agora foi possível adicionar um novo elemento além do seu tamanho original. Mas como nada é bala de prata, ArrayList também tem suas desvantagens, dentre elas, a **desvantagem de "memória não utilizada"** é a principal. Mas o que seria isso? Antes de tudo, para uma melhor didática, veja essa imagem mental do ArrayList do mesmo código acima.

> **imagem mental:**

![ArrayList Java](/static/images/articles/estrutura-de-dados-java/array-list.png){width=75% quality=50 position=auto}

Agora que já tem uma imagem mental do que é a estrutura de dados `Resizable Array`{tag=true}, podemos entender a desvantagem do ArrayList: a memória não utilizada, também conhecida como "capacidade ociosa" ou "capacidade de reserva", e o porquê disso.

## ArrayList: Como funciona seu redimensionamento automático.

Basicamente, o motivo do ArrayList usar mais memória do que o esperado é o seu redimensionamento automático. Pense da seguinte forma: como ter uma estrutura de dados que pode armazenar mais elementos do que seu tamanho original? Como isso é possível? A solução está na pré-alocação de espaço, garantindo que a estrutura de dados esteja pronta para receber novos elementos.

Mas, e se o número de elementos adicionados ultrapassar a capacidade pré-alocada? Não se preocupe, o ArrayList se antecipa e pré-aloca ainda mais espaço. O mesmo ocorre quando você remove elementos, reduzindo o tamanho conforme necessário.

Claro, isso não funciona magicamente. Infelizmente, não podemos simplesmente adicionar ou remover bytes no ArrayList. O ArrayList usa internamente um array, e, como não é possível adicionar ou remover bytes diretamente no array, naturalmente não é possível fazer o mesmo com ArrayList.

Então, como o ArrayList, mesmo com espaço pré-alocado, consegue adicionar mais espaço sem perder os elementos? A resposta está na "realocação" do array interno. Quando atinge a capacidade máxima, o ArrayList cria um novo array interno com capacidade maior e, em seguida, copia os elementos do array antigo para o novo array.

> Nota: Você pode conferir essas informações (ArrayList realoca o array interno) no seu código fonte. [Veja aqui](https://github.com/openjdk/jdk/blob/ecd25e7d6f9d69f9dbdbff0a4a9b9d6b19288593/src/java.base/share/classes/java/util/ArrayList.java#L232){target=blank}.

E qual é o tamanho pré-alocado pelo ArrayList? Bem, isso depende de vários fatores, como o número de elementos, o tipo utilizado, a versão do Java, a JVM e até o Garbage Collector. Em geral, o ArrayList opera com 50% a mais de espaço pré-alocado além do seu tamanho original, e, em alguns casos, até o dobro.

Caso não tenha ficado muito intuitiva a explicação de ArrayList realocar array interno, sem problemas. Vamos explicar no código e, depois, um diagrama, uma imagem mental deste código.

> Código:

```java
final var __ = " ; size: ";
var numbersList = new ArrayList<Integer>(12);

numbersList.addAll(Arrays.asList(
  2,3,5,7,11,13,17,19,23,29
));
System.out.println(numbersList+__+numbersList.size());

numbersList.addAll(Arrays.asList(
  31,37,41,43,47
));
System.out.println(numbersList+__+numbersList.size());
```
::outputcode
> `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]` ; size: 10 <br>&nbsp;
`[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]` ; size: 15
::

> **imagem mental:**

![ArrayList Redimensionamento Java](/static/images/articles/estrutura-de-dados-java/array-list-redimensionamento.png){width=75% quality=50 position=auto}

## Vantagens e Desvantagens

##### Vantagens
 - **`1` -** Possui redimensionamento automático.
 - **`2` -** Acesso direto aos elementos através de índices, o que resulta em tempos de acesso constantes.

##### Desvantagens
 - **`1` -** O redimensionamento traz uma complexidade espacial notável devido à pre-alocação.
 - **`2` -**  Ineficiente para inserções e remoções frequentes, pois requer realocação de memória.
 - **`3` -**  A inserção no meio da lista é custosa, pois requer o deslocamento de elementos subsequentes.

#### Uso comum
Armazenamento e recuperação eficiente de dados sequenciais.

**Cenário de uso:** Em um sistema de gerenciamento de biblioteca, um ArrayList pode ser usado para armazenar a lista de livros em uma prateleira, permitindo fácil acesso e manipulação dos livros.

> Para casos de extremos de acesso a elementos, usariamos TreeSet.

::next-content
---
content: LinkedList
linkcontent: /articles/estrutura-de-dados-java/list/linked-list
---
::
