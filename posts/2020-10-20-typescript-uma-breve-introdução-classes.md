---
title: Typescript - Uma breve introdução - Classes
resume: >-
  No último artigo aprendemos um pouco sobre como criar tipos personalizados
  utilizando type alias. Hoje vamos aprender a criar tipos personalizados usando
  type aliases.
date: '2020-10-19 01:00:27'
image: assets/img/ts-js.png
category: Typescript
tagColor: '#130f40'
---
Nos artigos anteriores nós vimos um pouco sobre tipos básicos, enums, type assertions , interfaces e type aliases. Recomendo dar uma conferida neles, caso não se sinta confortável com esses conceitos.

* [Typescript - Uma breve introdução](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o/)
* [Typescript - Uma breve introdução - Tuplas, Enums e Type Assertion](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-parte-2/)
* [Typescript - Uma breve introdução - Interfaces](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-interfaces/)
* [Typescript - Uma breve introdução - Type Aliases](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-type-aliases/)

Antes prosseguirmos gostaria de deixar claro que não vamos abordar orientação a objetos nesse artigo! O objetivo aqui é  apresentar algumas das funcionalidades que o typescript nos oferece para trabalhar com classes.

### Classes

> Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes **não** introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.
>
> *[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)*



```typescript
class Student {
    constructor(name, n1, n2, n3) {
        this.name = name;
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
    }
  
  getAverage() {
    return (this.n1 + this.n2 + this.n3) / 3;
  }
}

const cristiano = new Student('Cristiano', 7,8,9);
console.log(cristiano); // {name: "Cristiano", n1: 7, n2: 7, n3: 7}
console.log(cristiano.name); // Cristiano
console.log(cristiano.getAverage()); // 8
```



Até aqui não tem nada de typescript... Todo código acima é vanilla js e você consegue executar ele no console do navegador sem grandes problemas. Pra entender mais um pouco classes no javascript recomendo conferir a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes).

### Tá, mas onde tem typescript?
