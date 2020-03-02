---
title: Typscript - Uma breve introdução
resume: >-
  Trabalhar com a tipagem dinâmica do javascript é como andar no escuro em um
  labirinto... Você não sabe onde está e quando pensa que sabe tudo pode mudar
  muito rápido e acabar te deixando confuso. É com a premissa de resolver esses
  problemas que o Typescript entra em cena.
date: '2020-03-02 11:30:10'
image: assets/img/ts-js.png
category: Typescript
tagColor: '#130f40'
---
Javascript é uma linguagem muito permissiva e simples, ela não tem tipagem forte e isso torna seu aprendizado mais fácil, porém, com grandes poderes vem grandes responsabilidades. Toda a liberdade que o javascript oferece pode ser muito perigosa caso você não saiba exatamente o que está fazendo.

>  “Apesar do JavaScript ser talvez uma das linguagens mais fáceis de se começar, suas excentricidades fazem com que o domínio sólido da linguagem seja muito menos comum do que em outras linguagens. Enquanto se precisa um conhecimento aprofundado em linguagens como C ou C++ para escrever um programa em grande escala, uma aplicação similar em JavaScript pode ser desenvolvida, e muitas vezes é, apenas arranhando parte do que a linguagem pode fazer de verdade”
>
> Kyle Simpson



### Antes de prosseguir acho importante deixar claro dois termos:

* Linguagens tipadas: Também conhecidas como fortemente tipadas, são linguagens onde você é obrigado a declarar o tipo do dado. Ex: Java, C++, C#
* Linguagens não tipadas: Também conhecidas como fracamente tipadas ou de tipagem dinâmica, são linguagens onde a conversão é feita durante a execução do programa e sem a necessidade do programador forçar a conversão. Ex: PHP, Javascript, Ruby, Python.



Trabalhar com a tipagem dinâmica do javascript é como andar no escuro em um labirinto... Você não sabe onde está e quando pensa que sabe tudo pode mudar muito rápido e acabar te deixando confuso.  Recomendo dar uma olhada [nesse](https://www.crisgon.dev/coercao-de-tipos-em-javascript/) artigo que escrevi em um outro momento sobre coerção de tipos.

É com a premissa de resolver esses problemas que o Typescript surgiu, mas o que é exatamente Typescript?



## O que é? 

É um superset para javascript que adiciona tipagem forte e alguns outros recursos para a linguagem. Ela foi criada pela Microsoft em meados de 2012 e vem caindo no gosto dos programadores. Segundo a [pesquisa do stackoverflow](https://insights.stackoverflow.com/survey/2019#technology) o typescript esteve entre as linguagens mais amadas de 2019, perdendo apenas para rust e python.

![Pesquisa do stack overflow sobre as linguagens mais amadas em 2019.](assets/img/most-love.png "Pesquisa do stack overflow sobre as linguagens mais amadas em 2019.")
