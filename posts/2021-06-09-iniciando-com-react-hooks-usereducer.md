---
title: Iniciando com React Hooks - useReducer
resume: É muito comum que nossas aplicações tenham estados complexos onde apenas
  o useState não é o suficiente. Nesses casos o react nos oferece o hook
  useReducer.
date: 2021-06-08 10:26:23
image: assets/img/react.png
category: React
tagColor: "#3498db"
---
Hey, esse artigo faz parte de uma série sobre react hooks. Se você ainda não leu os artigos passados, da uma conferida nos links abaixo:

* [Iniciando com React Hooks - useState](https://www.crisgon.dev/iniciando-com-react-hooks-usestate/)
* [iniciando com React Hooks  - useEffect](https://www.crisgon.dev/iniciando-com-react-hooks-useeffect/)
* [iniciando com React Hooks  - useMemo](https://www.crisgon.dev/iniciando-com-react-hooks-usememo/)
* [iniciando com React Hooks  - useCallback](https://www.crisgon.dev/iniciando-com-react-hooks-usecallback/)



Antes de focar no nosso objeto de estudo é preciso dar dois passos para trás e entender um pouco sobre redutores, conceito que se popularizou com o surgimento do [redux ](https://redux.js.org/)para gerenciamento de estados. 

Você provavelmente já deve ter se esbarrado com algum projeto que utiliza redux, mas se esse for um tema que foge do seu conhecimento, não se assuste. Em breve irei escrever um artigo explicando um pouco sobre redux e a arquitetura flux, mas no momento você só precisa saber que redux é uma biblioteca javascript para gerenciamento de estados de uma aplicação.

Voltando aos redutores... eles basicamente existem para controlar estados de aplicações, exatamente como já conhecemos no react. De maneira bem simplificada, um redutor é uma função que recebe dois argumentos(o **estado** atual da aplicação e uma **ação)** e retorna um **novo estado**.

Exemplo: 

```javascript
function counterReducer(count, action) {
  return count + 1;  
}

```

A função redutora acima tem um objetivo único que é o de sempre acrescentar 1 ao estado atual e retornar um novo estado.



Analisando a mesma função você deve ter percebido que ela é uma função bem direta ao ponto e que sempre vai retornar o mesmo valor se os argumentos passados forem sempre os mesmos. 

```javascript
counterReducer(1); // retorno 2
counterReducer(1); // retorno 2
counterReducer(1); // retorno 2
counterReducer(1); // retorno 2
counterReducer(1); // retorno 2
```

 Isso quer dizer que ela é uma função pura e que não tem efeitos colaterais. Ou seja, se essa função for executada dez vezes passando sempre o valor 1 o resultado retornado será 2 nas dez vezes.



Em suma isso é uma função redutora, porém ainda não falamos sobre a ação, nosso segundo argumento.  A ação costuma ser um objeto com duas propriedades: uma instrução(type) e um novo valor(value).



Vamos melhorar nosso redutor de contador e tudo vai ficar mais claro

```javascript
function counterReducer(count, action) {
  if(action.type === "INCREASE") {
      return count + 1; 
  }
  
  if(action.type === "DECREASE") {
     return count - 1; 
  }
 
  return count;
}

```



No código acima nossa função redutora pode atualizar o estado de duas formas diferentes  e também pode não fazer nada caso o type informado não exista,

```javascript
counterReducer(1, { type: "DECREASE" }); // retorno 0
counterReducer(1, { type: "INCREASE" }); // retorno 2
counterReducer(1, { type: "OPS" }); // retorno 1
```

> Essas adições não mudam a principal característica da função redutora, ser pura e sempre retornar o mesmo valor para os mesmos argumentos.





Ao trabalhar com react o padrão quando falamos em gerenciar estado é utilizar o useState, porém essa não é a única forma de trabalhar com estados. 

O useReducer é uma alternativa para o useState quando temos estados complexos, muito aninhados ou que precisam sempre do estado anterior antes de uma nova atualização.

Vamos pensar no seguinte cenário, onde temos que armazenar nome, idade, email, nacionalidade e endereço de um usuário.  O primeiro pensamento que temos é utilizar um estado para cada campo.

```javascript
const [name, setName] = useState("");
const [age, setAge] = useState(26);
const [email, setEmail] = useState("");
const [nationality, setNationality] = useState("brazilian");
const [address, setAddress] = useState({
 city: "",
 state: "",
 postalCode: ""
})
```

Uma outra forma de armazenar as mesmas informações seria