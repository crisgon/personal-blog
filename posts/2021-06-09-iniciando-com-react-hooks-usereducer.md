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



Ao trabalhar com react o padrão quando falamos em gerenciar estado é utilizar o useState, porém essa não é a única forma de trabalhar com estados no react. 

Existem situações onde nossos estados podem ser complexos e extensos. Como no exemplo abaixo: