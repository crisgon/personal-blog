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



Antes de prosseguir vou deixar um exemplo de componente com classe, pois é importante ter a noção de como as coisas eram antes e como elas são agora.



```jsx
class ShowName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Cristiano'};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.name}.</h2>
      </div>
    );
  }
}
```



Agora vou mostrar o mesmo componente escrito utilizando hooks.

```jsx
function ShowName(props) {
  [name, _] = useState('Cristiano')

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.name}.</h2>
      </div>
    );
}
```