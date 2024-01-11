# O metodo `hashCode()`{tag=true} da linguagem de programação Java.

---

O `hashCode()`{tag=true} é a função de hash padrão do Java. Porém, ela é, de certa forma bastante exotica se comparado ao padrão que geralmente as funções hash seguem, padrões tais como:

- ao invés do padrão que é gerar uma cadeia de caracteres, o `hashCode()`{tag=true} gera um número inteiro;
- ao invés do padrão de ter uma unicidade forte, por conta do `hashCode()`{tag=true} usar um número inteiro, sua unicidade não é muito forte (o que gera colisões de hash);
- ao invés do padrão de ter tamanho fixo, o `hashCode()`{tag=true} não se preocupa em ter tamanho fixo;
- ao invés do mesmo dado gerar sempre o mesmo hash, o `hashCode()`{tag=true} (apesar de ser casos raros) nem sempre [gera os mesmos hashes](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Object.html#hashCode()){target=_blank} para as mesmas entradas dependendo da execução da aplicação.

Mas essas coisas não nescessariamente são um problema, afinal existem diferentes tipos de hash, e cada um é para um uso especifico, no caso de `hashCode()`{tag=true} é ter uma velocidade rápida para gerar hash sem nescessariamente precisar ter alta unicidade, ou sem nescessariamente ter tamanho fixo. Ou então o caso de não manter consistencia entre execuções (que depende de fatores diversos, como OS, JVM e GC), não é nescessariamente um problemas pois o `hashCode()`{tag=true} é feito para se trabalhar nas estruturas de dados do Java durante a execução da aplicação, e não para persistir esses hashes.
