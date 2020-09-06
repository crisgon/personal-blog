---
title: Typescript - Uma breve introdução - Type Aliases
resume: >-
  No último artigo aprendemos um pouco sobre como criar tipos personalizados
  utilizando interfaces. Hoje vamos aprender a criar tipos personalizados usando
  type aliases.
date: '2020-09-05 01:10:03'
image: assets/img/ts-js.png
category: Typescript
tagColor: '#130f40'
---
Nos artigos anteriores nós vimos um pouco sobre tipos básicos, enums, type assertions e interfaces. Recomendo dar uma conferida neles, caso não se sinta confortável com esses conceitos.

* [Typescript - Uma breve introdução](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o/)
* [Typescript - Uma breve introdução - Tuplas, Enums e Type Assertion](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-parte-2/)
* [Typescript - Uma breve introdução - Interfaces](https://www.crisgon.dev/typescript-uma-breve-introdu%C3%A7%C3%A3o-interfaces/)



Hoje vamos aprender um pouco sobre `type aliases`(type alias), mais uma forma oferecida pelo typescript para criar tipos reutilizáveis de maneira bastante simples. 

Em poucas palavras, `type aliases `nos permite dar "apelidos" para tipos primitivos, tuplas, tipos personalizados e qualquer outro tipo que você desejar. Em alguns casos um `type aliase` pode ser semelhante às interfaces, mas ambos tem peculiaridades que vamos entender ao longo deste artigo.



### Criando nosso primeiro type aliase

Para criar uma `type aliase` é muito simples, basta usar a palavra reservada `type`, inserir um nome e um valor. Igualzinho a declaração de uma variável. Um caso clássico para seu uso é quando precisamos que uma variável possa assumir o valor de dois ou mais tipos primitivos.

```typescript
type numberOrString = number | string;

let val: numberOrString = 10;

val = 'olá';
val = false; // error
```

Pra ficar mais claro, vamos supor que temos uma função que retorna o faturamento diário, semanal e mensal de uma empresa.

```typescript
function getRevenue(type:  "daily" | "weekly" | "monthly") {
  api.get(type) // busca na api...
}

let revenueType: "daily" | "weekly" | "monthly" = "daily"

getRevenue(revenueType) 

```

Até aqui tudo bem... Mas vamos supor que agora temos uma função que retorna o total de despesas diário, semanal e mensal de uma empresa.

```typescript
function getExpenses(type:  "daily" | "weekly" | "monthly") {
  api.get(type) // busca na api...
}

let expenseType: "daily" | "weekly" | "monthly" = "weekly"

getExpenses(expenseType) 
```

Agora as coisas já começam a ficar complicadas... Imagine que nosso sistema também vai fornecer informações anuais. Nós precisamos alterar o código em pelo menos 4 lugares. Utilizando `type aliases` a gente pode resolver esse problema facilmente, concentrando nosso tipo em um único ponto do código.

```typescript
type period = "daily" | "weekly" | "monthly" | "yearly";

function getRevenue(type:  period) {
  api.get(type) // busca na api...
}

let revenueType: period = "daily"

getRevenue(revenueType) 


function getExpenses(type: period) {
  api.get(type) // busca na api...
}

let expenseType: period = "weekly"

getExpenses(expenseType) 
```



Esse foi um caso clássico para uso de `type aliases`, mas podemos fazer seu uso em diversas outras situações. 

Daqui pra frente vou mostrar algumas comparações entre interfaces e `type aliases` para facilitar sua compreensão.

### Type Aliases x Interfaces
