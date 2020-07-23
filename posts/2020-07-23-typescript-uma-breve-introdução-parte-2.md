---
title: 'Typescript - Uma breve introdução - Tuplas, Enums e Type Assertion'
resume: >-
  No último artigo aprendemos um pouco sobre o básico para iniciar no
  typescript. Dessa vez iremos aprender sobre mais alguns conceitos básicos, mas
  que facilitam muito nosso fluxo de desenvolvimento. 
date: '2020-07-22 10:25:50'
image: assets/img/ts-js.png
category: Typescript
tagColor: '#130f40'
---
No [artigo anterior](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o/) descobrimos como tipar o básico com javascript, number, string, boolean, null, undefined, void, any e never. Dessa vez iremos prosseguir com conceitos básicos e aprender um pouco sobre tuples(tuplas), enums e type assertion.

## Tuplas

Tuplas são utilizadas para representar um array onde sabemos a quantidade exata de elementos, mas queremos tipos específicos para cada um desses elementos.

Vamos supor que eu quero guardar nome, idade e se a pessoa está empregada ou não.

Provavelmente uma tupla não seja a melhor abordagem, mas podemos fazer algo assim:

```typescript
let person: [string, number, boolean];

person = ["Cristiano", 25, true]; // Ok

person = ["Cristiano", 25]  // Erro!

person = [true, 25] // Erro!
```

``

Algo interessante é que poderíamos recuperar os valores de `person` armazenando em variáveis de forma bem simples através de uma desestruturação.

```typescript
person = ["Cristiano", 25, true];

const [name, age, isEmployed] =  person;

name === "Cristiano"; // true

age === 25; // true

isEmployed === true; // true
```

Um caso de uso bem interessante sobre tuplas são os `react hooks.`

```typescript
const [name] = useState("Cris");
```

No trecho de código acima o `useState` está retornando um array de uma posição, onde o primeiro item desse array é exatamente uma string.  Não se preocupe em entender o que está acontecendo com o `useState` por debaixo dos panos, pra isso seria necessário abordar o tema `generatos`, que é um pouquinho mais complexo. Por hora se atente a informação de que `useState` é uma função que está retornando um array de tamanho com o seguinte tipo `[string]`

``
