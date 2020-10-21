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

Até aqui não tem nada de typescript... Todo código acima é vanilla js e você consegue executar ele no console do navegador sem grandes problemas. Recomendo conferir a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes), caso não esteja confortável com classes no javascript.

### Tá, mas onde tem typescript?

![Will Smith pensativo](https://media1.tenor.com/images/8ba280cf79c3a988bfb7cce7258e39d6/tenor.gif?itemid=4813460)

Certo, é hora de focar no que o typescript oferece além do básico de classes que você já deve conhecer.  Vamos aprender um pouco sobre modificadores de acesso e classes abstratas. 

> Em programação orientada a objetos,**modificador de acesso**, também chamado de**visão de método**ou ainda**visão de atributo**, é a palavra-chave que define um atributo, método ou classe como público, privado ou protegido.
>
> *[Wikipédia](https://pt.wikipedia.org/wiki/Modificador_de_acesso)*

#### Público

Por padrão tudo no typescript é público até que você diga o contrário. Isso quer dizer que conseguimos acessar e manipular os métodos e atributos das nossas classes livremente. É interessante utilizar a palavra-chave `public` de forma explicita para deixar tudo padronizado, mas você verá que é algo opcional.

```typescript
class Employee {
  public name: string;
  public salary: number;
  
  public constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

const programmer = new Employee('John', 12000);

console.log(programmer.name); // John
console.log(programmer.salary); // 12000

programmer.salary = 9999;

console.log(programmer.salary); // 9999
```

Com o modificador public(ou não utilizando nenhum modificador) conseguimos pintar e bordar com nosso objeto. Você notou que conseguimos alterar até o salário depois que instanciamos a classe e criamos o objeto `programmer`?

A classe declarada abaixo tem o **MESMO** efeito da que declaramos anteriormente, a única diferença é que não estamos explicitando que os atributos são públicos.

```typescript
class Employee {
   name: string;
   salary: number;
  
   constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

const programmer = new Employee('John', 12000);

console.log(programmer.name); // John
console.log(programmer.salary); // 12000
```
