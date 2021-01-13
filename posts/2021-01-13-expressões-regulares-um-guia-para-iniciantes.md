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

> Em ciência da computação, uma **expressão regular** ou "Regex" (ou os estrangeirismos ***regex*** ou **regexp** [\[1]](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular#cite_note-1) , abreviação do inglês *regular expression*) provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres. Expressões regulares são escritas numa linguagem formal que pode ser interpretada por um processador de expressão regular, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.
>
> [Wikipédia](https://pt.wikipedia.org/wiki/Express%C3%A3o_regular)