---
title: "Entendendo Variáveis CSS "
resume: Por um longo tempo foi necessário o uso de ferramentas externas para dar
  dinamicidade as folhas de estilos, porém o CSS possui essa funcionalidade de
  maneira nativa.
date: 2022-07-20 10:53:47
image: assets/img/0_rt32mflutfl2-ig0.png
category: CSS
tagColor: "#8e44ad"
---
Atualmente as aplicações web tem se tornado cada vez mais robustas e consequentemente a quantidade de CSS tem crescido bastante. Isso faz com que a possibilidade de código duplicado aumente consideravelmente, em sua maioria com repetição de pequenos valores, como uma cor ou um espaçamento.

Em diversos momentos você já deve ter se deparado com uma folha de estilos da seguinte forma:

```css
...

.header {
  background-color: #8e44ad;
  padding: 10px 15px;
  ...
}

.button {
  border-color: #8e44ad;
  color: #8e44ad;
  padding: 10px 15px;
  ...
}

.footer {
  background-color: #8e44ad;
  ...
}
```

Exemplo bem simples onde temos o mesmo hexadecimal sendo utilizado em diversos lugares. Também temos as mesmas medidas de padding sendo utilizadas em mais de um lugar. É normal existir essa repetição, pois queremos manter uma uniformidade no nosso layout.

Agora pense na seguinte situação, o produto que trabalhamos acabou de passar por um rebrand(mudança de marca)  e precisamos alterar todas as cores da nossa aplicação. Pense o quanto isso seria trabalhoso... sair alterando valores em todos os N arquivos css que temos espalhados ao longo do projeto. 

Posso dar um exemplo mais prático... Este blog em que você se encontra tem várias paletas de cores.

![Print do blog atual na cor vermelha](assets/img/blog-red.png)

![Print do blog atual na cor azul](assets/img/blog-blue.png)

Imagine o quão trabalhoso seria alterar as cores de cada detalhezinho... Um trabalho muito repetitivo que geralmente os programadores tentam evitar. Seria muito mais simples se isso estivesse centralizado de uma forma que a manutenção e as mudanças sejam facilitadas. 

Foi pensando nesse cenário que os primeiros pre-processadores(sass, less, stylus) trouxeram a possibilidade de termos variáveis no nosso CSS e logo em seguida isso acabou tornando-se algo nativo do próprio CSS.

> Na [programação](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o "Programação"), uma **variável** é um objeto (uma posição, frequentemente localizada na [memória](https://pt.wikipedia.org/wiki/Mem%C3%B3ria_(computador) "Memória (computador)")) capaz de reter e representar um valor ou expressão.[](https://pt.wikipedia.org/wiki/Vari%C3%A1vel_(programa%C3%A7%C3%A3o)#cite_note-:0-1)
>
> [Wikipédia](https://pt.wikipedia.org/wiki/Vari%C3%A1vel_(programa%C3%A7%C3%A3o))
>
> Você pode encontrar pessoas e lugares que utilizam a expressão propriedades customizadas ou variáveis CSS. 😎

### Como utilizar variáveis no CSS

Você deve se lembrar que no javascript precisamos fazer o uso de palavras-chave para declarar uma variável 

```javascript
var a = 1;
let b = 2;
const c = 3;
```

No CSS temos algo muito mais simplificado, pois precisamos apenas escrever o nome da nossa propriedade personalizada precedida de um duplo hífen(--):  `--cor-do-background` e logo depois podemos utilizar qualquer valor válido de CSS. 

É importante saber que uma propriedade personalizada precisa ser declarada dentro de algum escopo do CSS, ou seja, dentro de `{ }` . Aqui também seguimos a regra de escopo, então a variável declarada dentro de um elemento, só vai estar disponível para ele ou seus filhos.

Para conseguir acessar o valor dessas novas propriedades precisamos utilizar a função `var()` passando a propriedade como argumento.

```css
div {
 --cor-do-background: red;
  background: var(--cor-do-background); /*red*/
}
```