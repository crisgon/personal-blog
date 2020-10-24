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

> Em programação orientada a objetos,**modificador de acesso**, também chamado de **visão de método** ou ainda **visão de atributo**, é a palavra-chave que define um atributo, método ou classe como público, privado ou protegido.
>
> *[Wikipédia](https://pt.wikipedia.org/wiki/Modificador_de_acesso)*

#### Público(public)

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

#### Privado(private)

Também podemos declarar atributos e métodos como privado, isso fará com que eles não sejam acessíveis fora da sua classe.

```typescript
class User {
  private username: string;
  private password: string;
  
  constructor(name: string, pass: string) {
    this.username = name;
    this.password: pass;
  }
};

const admin = new User('Cristiano', '123');
console.log(admin.username); // Property 'username' is private and only accessible within class 'User'.
```

Aqui só conseguimos acessar `username` ou `password` expondo por meio de algum método, ou atributo público.

```typescript
class User {
  private username: string;
  private password: string;
  
  constructor(name: string, pass: string) {
    this.username = name;
    this.password: pass;
  }
  
  public getInfo() {
    return {
     username: this.username,
      password: this.passowrd
      
    }
  }
};

const admin = new User('Cristiano', '123');
console.log(admin.getInfo());
```

#### Protegido(protected)

Métodos e atributos protegidos são semelhantes aos privados. A única diferença é que conseguimos acessá-los em classes derivadas. 

Como assim?

```typescript
class User {
  protected username: string;
  
  constructor(name: string) {
    this.username = name;
  }
};

const user = new User('Cristiano');

user.username; //Property 'username' is protected and only accessible within class 'User' and its subclasse
```

O código acima nos gera um erro, pois estamos tentando acessar uma propriedade protegida que só pode ser acessada na própria classe ou nas classes derivadas dela.

Segue o exemplo:

```typescript
class User {
  protected username: string;
  
  constructor(name: string) {
    this.username = name;
  }

};

class Employee extends User {
  private salary: number;

  constructor(username: string, salary: number) {
    super(username);
    this.salary = salary;
  }

  getInfo() {
    return `${this.username} recebe o salário de ${this.salary}`
  }
}
 
const admin = new Employee('Cristiano', 999);
console.log(admin.username); // Property 'username' is protected and only accessible within class 'User' and its subclasse
console.log(admin.getInfo());
```

A classe `Employee`é derivada de `Use`, por isso ela consegue acessar `username` no método `getInfo.` Porém, vamos ter um erro ao tentar acessar `username` em um objeto criado de `Employee.`

#### Apenas leitura(readonly)

Propriedades e métodos readonly são públicos, mas apenas para leitura. Não conseguimos fazer alterações no seu valor depois de iniciados.

```typescript
class User {
  readonly username: string;
  
  constructor(name: string) {
    this.username = name;
  }

};

const user = new User('Cristiano');
console.log(user.username); // Cristiano
user.username = 'João'; // Cannot assign to 'username' because it is a read-only property.
```

### Estática(static)

Até o momento só vimos propriedades que vão aparecer no objeto quando uma classe for instanciada, mas também podemos declarar propriedades visíveis apenas a classe e para uso inter. Pra isso basta utilizar a palavra-chave `static` e para acessar ao invés do `this` usamos o nome da classe.

```typescript
class User {
  static id = '22'  
  public username: string;

  constructor(name: string) {
    this.username = name;
  }

  getInfo() {
    console.log({id: User.id, name: this.username});
  }

};

const user = new User('Cristiano');
user.getInfo(); // { id: "22", name: "Cristiano" }

```

### Classes Abstratas
