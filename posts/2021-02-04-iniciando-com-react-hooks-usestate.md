---
title: Iniciando com React Hooks - useState
resume: User hooks se tornou algo comum no dia a dia de quem desenvolve com
  react, mas será que realmente entendemos o funcionamento de cada um deles?
  Hoje vamos iniciar uma série com o objetivo de entender o funcionamento de
  cada hook presente no react
date: 2021-02-04 12:29:40
image: assets/img/react.png
category: React
tagColor: "#3498db"
---
Se você começou a mexer com React em 2019 é bem capaz de que você não conheça, ou conheça bem pouco, do mundo sem react hooks. Antes da versão 16.8 escrever componentes funcionais era algo bem raro, já que era impossível controlar estado ou dar qualquer "inteligência" para um componente que não fosse escrito com classe.

Era muito comum escrever componentes com estados utilizando classes e utilizar funções para componentes apenas de apresentação. Porém, o uso de classes apresentava alguns problemas que foram os principais motivadores para o surgimento dos hooks:

* É difícil compartilhar lógica entre componentes quando utilizamos o padrão de class components.
* Classes são mais problemáticas na etapa de minificação e o bundle final pode ser levemente maior se comparado a um bundle apenas com funções.
* A sintaxe de classes torna os componentes mais complexos e era considerado uma barreira para adoção do react. Pois, para entender um componente com classe você precisava entender o this, precisava fazer bind de eventos e ainda precisava se preocupar em compreender todos os diferentes ciclos de vida.

### Afinal, o que é um hook?

Segundo a [documentação do react](https://pt-br.reactjs.org/docs/hooks-state.html#whats-a-hook),  um hook é uma função especial que permite que os recursos do react sejam utilizados em um componente funcional. Um ótimo exemplo é o useState que permite adicionar estado em um componente de função.

Antes de prosseguir vou deixar um exemplo de componente com classe, pois é importante ter a noção de como as coisas eram antes.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
```

Agora vou mostrar o mesmo componente escrito utilizando hooks.

```jsx
export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### useState

O useState é um hook que permite o uso de estado em um componente funcional e simplifica bastante o gerenciamento de um estado se comparado ao gerenciamento em um componente de classe. 

Entenda o funcionamento do useState:

* Ele declara uma variável de state que pode ser  acessada dentro de todo o componente. 
* O useState recebe um argumento que vai ser utilizado como o valor inicial do nosso estado.
* O useState retorna um array com duas posições, onde a primeira é o valor atual do state e o segundo é uma função que atualiza o state.

A imagem abaixo indica cada parte do hook useState:

![ Detalhamento o useState](assets/img/usesate.png)

### Atualizando state

No nosso exemplo utilizamos o seguinte trecho de código para atualizar nosso estado: `setCount(count + 1)`

Porém, tem um grande problema em utilizar dessa forma, pois, pode acontecer algum efeito colateral que deixe o nosso estado(`count`) desatualizado. Para resolver esse problema a função que atualiza o estado pode aceitar um valor de qualquer tipo, incluindo uma função. Como assim uma função? Vou mostrar um exemplo e explicar que tudo vai fazer sentido.

`setCount((old) => old + 1)`

Nosso setCount, que poderia ter qualquer nome, recebe uma função que recebe um argumento que representado o nosso estado atual. Aqui temos a total certeza de que o estado está correto, garantia total. 

Dessa forma nossa reatribuição fica mais segura.

Ficou confuso? A imagem a seguir vai deixar mais claro.

### Regras importantes ao usar um hook

* Você pode usar hooks em componentes react ou hooks customizados
* Você não deve usar hooks dentro de loops, condicionais ou funções aninhadas