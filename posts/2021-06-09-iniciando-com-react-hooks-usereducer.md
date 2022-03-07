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