---
title: Expressões Regulares - Um guia para iniciantes
resume: Durante o desenvolvimento existem momentos em que precisamos validar
  palavras, frases e textos ou simplesmente precisamos encontrar padrões de
  textos sem nos preocupar com o conteúdo. Quando esses momentos aparecem você
  provavelmente vai precisar de uma regex para resolver esse problema.
date: 2021-01-12 08:36:24
image: assets/img/1_gxrxu9czy1iahspufd95zw.png
category: Geral
tagColor: "#e056fd"
---
Antes de aprender uma tecnologia é interessante entender que tipo de problema ela se propõe a resolver, então vamos lá... Imagine que você trabalha em uma aplicação que precisa receber o CPF com 11 dígitos numéricos. Qual seria sua abordagem para fazer uma validação? Acredito que caso não conheça regex, sua primeira opção seria verificar se o tamanho da string com os números digitados é 11, mas quem garante que tudo que foi passado são números?

```typescript
"12345678909".lenght === 11; // Pode ser um CPF válido...
"123456789".lenght === 11; // Não seria um CPF válido...
"1234567890B".lenght === 11; // Aqui temos uma string com tamanho 9, mas é um CPF válido?
```

No código acima vimos 3 situações que provam que verificar apenas o tamanho da string não é garantia de que teremos um CPF válido, pois essa é uma verificação muito rasa que não garante que todos os caracteres passados são numéricos. Para conseguir ter a certeza de que os caracteres atendem aos requisitos que desejamos é preciso definir e verificar padrões e isso pode ser feito com uso de expressões regulares.

### O que é uma expressão regular?

> Em ciência da computação, uma **expressão regular** ou "Regex" (ou os estrangeirismos ***regex*** ou **regexp**) , abreviação do inglês *regular expression*) provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres. Expressões regulares são escritas numa linguagem formal que pode ser interpretada por um processador de expressão regular, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.
>
> [Wikipédia](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular)

Diversas linguagens de programação tem sua própria implementação de expressões regulares, geralmente com pequenas diferenças e em alguns casos com diferenças bem significativas. Mas não se preocupe, pois, a base que você irá aprender a seguir vai ser de grande valor em qualquer linguagem de programação que você for se aventurar.

Agora você já sabe que uma expressão regular permite que palavras ou padrões de caracteres sejam encontrados em um texto, então vamos partir do exemplo mais básico que são os **caracteres literais**. 



#### *Antes de prosseguir recomendo que visite o site [regex101](https://regex101.com/) e vá reproduzindo os exemplos que forem sendo abordados ao longo do artigo.*

### Caracteres literais

Antes de prosseguir precisamos combinar que todas as nossas regex(expressões regulares) serão escritas entra duas barras(`/SUA REGEX AQUI/`).  Agora que estamos na mesma página, qual seria a forma de encontrar todas as palavras "doce" que aparecem no nosso trava-línguas?

*O doce perguntou pro doce*\
*Qual é o doce mais doce*\
*Que o doce de batata-doce.*\
*O doce respondeu pro doce*\
*Que o doce mais doce que*\
*O doce de batata-doce*\
*É o doce de doce de batata-doce.*

Já que queremos encontrar  a palavra "doce" vamos fazer um uso literal e nossa regex vai ficar assim: `/doce/`

PS: Tudo que for encontrado por nossa regex vai ser destacado com <span style="background: #c7ecee">a cor azul.</span>

*O <span style="background: #c7ecee">doce</span> perguntou pro doce*\
*Qual é o doce mais doce*\
*Que o doce de batata-doce.*\
*O doce respondeu pro doce*\
*Que o doce mais doce que*\
*O doce de batata-doce*\
*É o doce de doce de batata-doce.*



Parabéns! Você acabou de fazer sua primeira regex, mas note que apenas a primeira palavra doce ficou azul... Isso acontece porque por padrão nossa expressão regular busca apenas a primeira ocorrência e para de procurar quando encontra algo que atenda o seu padrão.  Tá, mas como resolvemos isso? Vamos resolver utilizando flags!

### Flags

Flags são informações adicionais que passamos para mudar o comportamento da nossa regex.  A estrutura de uma regex com flag seria assim: `/doce/SUA  FLAG`

Existem diversos tipos de flags, mas por agora vamos focar apenas na `g` que significa global e indica que a busca só deve parar após encontrar todas as ocorrências do texto. Nossa regex ficaria assim `/doce/g` e esse seria o resultado das ocorrências:

*O <span style="background: #c7ecee">doce</span> perguntou pro <span style="background: #c7ecee">doce</span>*\
*Qual é o <span style="background: #c7ecee">doce</span> mais <span style="background: #c7ecee">doce</span>*\
*Que o <span style="background: #c7ecee">doce</span> de batata-<span style="background: #c7ecee">doce</span>.*\
*O <span style="background: #c7ecee">doce</span> respondeu pro <span style="background: #c7ecee">doce</span>*\
*Que o <span style="background: #c7ecee">doce</span> mais <span style="background: #c7ecee">doce</span> que*\
*O <span style="background: #c7ecee">doce</span> de batata-<span style="background: #c7ecee">doce</span>*\
*É o <span style="background: #c7ecee">doce</span> de <span style="background: #c7ecee">doce</span> de batata-<span style="background: #c7ecee">doce</span>.*

Show de bola! Encontramos todas as ocorrências para a palavra doce,  mas geralmente você não vai usar uma regex para buscar por uma palavra específica... O grande poder de uma regex é permitir que padrões sejam encontrados, então vamos "dificultar" um pouco mais as coisas. Preciso de uma expressão regular que seja capaz de encontrar todos os números do texto a seguir:

*0 N4rut0 p0de ser um p0uc0 dur0 às vezes, t4lvez v0cê nã0 s41b4 d1ss0, m4s 0 N4rut0 t4mbém cresceu sem p41. N4 verd4de ele nunc4 c0nheceu nenhum de seus p41s, e nunc4 teve nenhum 4m1g0 em n0ss4 4lde14. Mesm0 4ss1m eu nunc4 v1 ele ch0r4r, f1c4r z4ng4d0 0u se d4r p0r venc1d0, ele está sempre d1sp0st0 4 melh0r4r, ele quer ser respe1t4d0, é 0 s0nh0 dele e 0 N4rut0 d4r14 4 v1d4 p0r 1ss0 sem hes1t4r. Meu p4lp1te é que ele se c4ns0u de ch0r4r e dec1d1u f4zer 4lgum4 c01s4 4 respe1t0!*