---
title: Iniciando com React Hooks - useMemo
resume: Ter uma aplicação performática é uma das grandes preocupações do mundo
  web e React nos ajuda a cuidar disso com alguns hooks.
date: 2021-05-09 11:57:52
image: assets/img/react.png
category: React
tagColor: "#3498db"
---
Hey, esse artigo faz parte de uma série sobre react hooks. Se você ainda não leu os artigos passados, da uma conferida nos links abaixo:

* [Iniciando com React Hooks - useState](https://www.crisgon.dev/iniciando-com-react-hooks-usestate/)
* [iniciando com React Hooks  - useEffect](https://www.crisgon.dev/iniciando-com-react-hooks-useeffect/)

Estamos sempre procurando alternativas para deixar nossas aplicações cada vez melhores e uma das formas de fazer isso é as tornando  performáticas.  

Anos atrás quando se falava no assunto performance no frontend  as únicas coisas que as pessoas pensavam eram no tamanho das imagens, no tamanho do seu css minificado e no tamanho do seu javascript, também minificado. Porém, isso mudou bastante! Mas isso não quer dizer que tudo que citei anteriormente tenha deixado de ter atenção, na verdade, tudo isso se tornou o mínimo esperado.  O foco agora são nas informações que aparecem depois que sua aplicação já foi carregada, pois, as aplicações frontend ganharam uma grande responsabilidade ao lidar e manipular grandes massas de dados complexos.

Quando estamos lidando com manipulação de dados queremos evitar ao máximo que nossa aplicação faça cálculos, comparações ou quaisquer operações desnecessárias. Foi pensando nisso que o React nos ofereceu um hook chamado useMemo para facilitar o uso de uma técnica bastante comum na computação chamada de memoization ou memoização.

Tá, mas o que é essa tal de memoization?

> O termo "memoização" foi cunhado por Donald Michie em 1968 e é derivado da palavra latina " memorando " ("para ser lembrado") Memoização. 
>
> *[Other Wiki](https://pt.other.wiki/wiki/Memoization)*

Na computação é uma técnica que consiste em armazenar resultados de uma função em cache  e retornar esses resultados que estão cacheados quando as mesmas entradas forem passadas novamente, evitando uma execução repetida.

Segue abaixo um pequeno exemplo bem básico para ilustrar como funcionária a técnica de memoization.

```javascript
const cache = new Map();

function sum(a, b) {
    const key = a + "/" + b;
    
    if(cache.has(key)) {
        console.log("Valor em cache", cache.get(key))
        return cache.get(key);
    }
    
    console.log("Valor sem cache. Precisa calcular.")
    const result = a + b;
    cache.set(key, result);

    return result;
}

```



Na imagem abaixo tem os logs com o uso dessa função. Note que nas vezes que eu passei os mesmos argumentos o cálculo não foi executado. 

![Memoization uso ](assets/img/cached.png)

Nesse exemplo o cálculo é simples e ter valores em cache não faz nenhuma diferença, mas se as operações fossem mais complexas e exigissem bastante poder computacional o uso de memoization tornaria nossa aplicação mais performática.



###  Mas e no React?

No React nós não precisamos nos preocupar com a implementação de uma função de memoization, pois o hook useMemo faz todo o trabalho pesado para a gente.

Para usar essa belezinha é muito simples, pois o useMemo também é uma função que recebe dois argumentos(semelhante ao useEffect): uma função e uma lista de valores para serem memoizados. Lembrando que o useMemo sempre vai retornar um valor que memoizado.



```javascript
const valor = 22;
function minhaFuncao() {
  return valor * valor;
} 
const valorMemoizado = useMemo(minhaFuncao, [valor]);

// O código abaixo é equivalente ao código anterior
const valor = 22;
const valorMemoizado = useMemo(() => valor * valor, [valor]);
```