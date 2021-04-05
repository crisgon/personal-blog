---
title: Iniciando com React Hooks - useEffect
resume: Existem situações em que nossa aplicação precisa executar trechos de
  códigos com base em mudanças de estado , esses acontecimentos são  conhecido
  como efeitos colaterais e podem ser controladas utilizando o hook useEffect.
date: 2021-02-22 11:55:05
image: assets/img/react.png
category: React
tagColor: "#3498db"
---
A primeira coisa que precisa ficar clara é que o hook `useEffect` não é uma versão dos ciclos de vida`constructor`, `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount`.

Isso mesmo, provavelmente você entendeu errado... assim como eu. Mas nunca é tarde para aprender, então vamos lá.

### Tá, mas o que é o useEffect?

useEffect é um hook que tem como principal objetivo sincronizar estados e executar efeitos colaterais. Esse hook é uma função que pode receber até 2 argumentos, uma função e um array de dependências. 

Geralmente o que encontramos por ai é uma explicação que diz o seguinte:

* usar o useEffect passando apenas o primeiro `useEffect(function)`

  ❌ Quer dizer que esse useEffect vai ser executado sempre que nossa aplicação atualizar, semelhante ao `componentDidUpdate`

  ✅ O correto é dizer que esse useEffect vai estar em sincronia com todos os estados do componente.
* usar o useEffect passando o segundo argumento como um array vazio `useEffect(function, [])`

  ❌ Quer dizer que esse useEffect vai ser executado quando o componente montar, semelhante ao `componentDidMount`

  ✅ O correto é dizer que esse useEffect não vai estar em sincronia com nenhum estado do componente, por isso ele vai ser executado apenas uma vez.
* usar o useEffect passando uma lista de estados no segundo argumento

  ❌ Quer dizer que esse useEffect vai ser executado sempre que os estados  atualizarem, semelhante ao `componentDidUpdate.`Também existem algumas explicações que tratam essa forma como uma alternativa ao antigo `componentWillReceiveProps`

  ✅ O correto é dizer que esse useEffect vai estar em sincronia com todos os estados que forem passados no segundo argumento.

Pode parecer besteira, mas é importante entender essas  pequenas diferenças. 

### Ainda não ficou claro? Vamos ao exemplo!

Vamos utilizar um exemplo bem simples utilizando Classes e logo em seguida o mesmo componente utilizando hooks.

```javascript
import React, { Component } from "react";

export class SimpleComponent extends Component {
  componentDidMount() {
    alert('Component montou!')
  }

  componentWillUnmount() {
    alert('Component desmontou');
  }

  render() {
    return (
      <h1>Component Simples</h1>
    );
  }
}

```

```javascript
import React, { useEffect } from "react";

export function SimpleComponent() {
  useEffect(() => {
    alert('Component montou!');
    
    return alert('Component desmontou');
  }, []);
  
  return <h1>Component Simples</h1>;
}
```

Dois pontos são bem importantes no código acima: 

1. O código que vai ser executado quando o componente for desmontar é passado no retorno da função do useEffect. 
2. O segundo argumento passado para o useEffect é um array vazio, pois não queremos que ele sincronize com nenhum estado.



Vamos pra mais um exemplo!

```javascript
import React, { Component } from "react";

export class PokemonInfo extends Component {
  state = { pokemon: null };
  
   getPokemon() {
    this.getPokemonInfo(this.props.pokemonNumber)
    .then((pokemon) => {
      this.setState({pokemon})
    });
  }
  
  componentDidUpdate(prevProps){
     if (prevProps.pokemonNumber !== this.props.pokemonNumber) {
      this.getPokemon();
    }
  }

  render() {
    return (
      <input type="number" value={this.props.pokemonNumber} onChange={this.props.changePokemonNumber} />
    );
  }
}

```



### Isso é tudo pessoal!

![Isso é tudo pessoal](https://i.pinimg.com/originals/2a/82/1e/2a821ee45ca3cbc384c0b70f730248ae.gif)

Obrigado por chegar até aqui!! Espero que tenha conseguido te ajudar de alguma forma. 😊

Esse foi o início de uma série que irei fazer abordando os hooks disponíveis no react. Fique atento aqui no blog e no meu [twitter](https://twitter.com/Gonkristiano) que em breve irei postar mais artigos sobre hooks.

### Links importantes

* [Documentação do react](https://pt-br.reactjs.org/docs/getting-started.html)