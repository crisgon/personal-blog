---
title: Typescript - Uma breve introdução - Type utilities
resume: >-
  No último artigo aprendemos um pouco sobre classes. Hoje vamos aprender a
  melhorar nosso fluxo de trabalho usando type utilities.
date: '2020-10-29 09:31:06'
image: assets/img/ts-js.png
category: Typescript
tagColor: '#130f40'
---
![Javascript|Typescript](assets/img/ts-js.png)

Nos artigos anteriores nós vimos um pouco sobre tipos básicos, enums, type assertions , interfaces, type aliases e classes. Recomendo dar uma conferida neles, caso não se sinta confortável com esses conceitos.

* [Typescript - Uma breve introdução](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o/)
* [Typescript - Uma breve introdução - Tuplas, Enums e Type Assertion](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-parte-2/)
* [Typescript - Uma breve introdução - Interfaces](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-interfaces/)
* [Typescript - Uma breve introdução - Type Aliases](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-type-aliases/)
* [Typescript - Uma breve introdução - Classes](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-classes/)

### Type Utilities

Type utilities são um conjunto de utilitários que o typescript nos oferece  para manusear tipos de forma simples. Esses utilitários são disponíveis globalmente e conhece-los são de extrema importância pra que você não olhe um código typescript e fique voando.

O padrão dos utilitários é `NOME<ARGUMENTOS>`. É como se estivéssemos invocando uma função, porém usando <>.

#### Partial

Esse utilitário faz com que todas as propriedades de uma interface se tornem opcionais.

Seu uso é bastante simples, basta passar o tipo como "argumento" `Partial<MeuTipo>`

```typescript
interface Music {
  name: string;
  artist: string;
  duration: number;
}

type newMusic = Partial<Music>;
// É isso que newMusic representa
// interface newMusic {
//   name?: string;
//   artist?: string;
//   duration?: number;
// }


const song: newMusic  = {
  name: 'yura yura '
};
```

#### Readonly

Conforme o nome sugere, esse utilitário faz com que todos os itens de um tipo sejam apenas de leitura. Isso impossibilita que um valor seja reatribuído em tempo de execução. Ou seja, você não consegue alterar um valor enquanto desenvolve, mas é possível fazer reatribuições depois que o typescript for compilado para javascript, pois no fim das contas o objeto não é congelado com [Object.freeze](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).



```typescript
interface Music {
  name: string;
  artist: string;
  duration: number;
}

type newMusic = Readonly<Music>

const song: newMusic  = {
  name: 're: re',
  artist: 'Asian kung -u generation',
  duration: 5.32
}

song.duration = 5.33 // Cannot assign to 'duration' because it is a read-only property

```

![Playground typescript](assets/img/Captura de tela de 2020-11-03 23-59-04.png "Resultado do typescript compilado")

A imagem acima mostra lado a lado os códigos typescript e javascript. Note que o typescript apresenta um erro de compilação, mas meu foco é apenas o javascript... veja que eu tenho uma reatribuição e um console no meu javascript. Logo abaixo temos o resultado do console e você pdoe ver que consegui alterar a `duration` de `5.32` para `5.33`

### Isso é tudo pessoal!

![Isso é tudo pessoal](https://i.pinimg.com/originals/2a/82/1e/2a821ee45ca3cbc384c0b70f730248ae.gif)

Obrigado por chegar até aqui!! Espero que tenha conseguido te ajudar de alguma forma. =]

Em breve irei escrever mais conteúdo sobre Typescript.

Então... Até mais!

### Links importantes

* [Typescript HandBook](https://www.typescriptlang.org/v2/docs/handbook/basic-types.html)
* [Typescript Playground](https://www.typescriptlang.org/play/index.html)
* [You Dont Know Js](https://github.com/getify/You-Dont-Know-JS)
* [Mini-curso de Typescript do Willian Justen](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)
