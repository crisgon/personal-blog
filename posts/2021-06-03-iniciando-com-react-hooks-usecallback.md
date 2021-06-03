---
title: Iniciando com React Hooks - useCallback
resume: Ter uma aplicação performática é uma das grandes preocupações do mundo
  web e React nos ajuda a cuidar disso com alguns hooks.
date: 2021-06-02 10:21:26
image: assets/img/react.png
category: React
tagColor: "#3498db"
---
Hey, esse artigo faz parte de uma série sobre react hooks. Se você ainda não leu os artigos passados, da uma conferida nos links abaixo:

* [Iniciando com React Hooks - useState](https://www.crisgon.dev/iniciando-com-react-hooks-usestate/)
* [iniciando com React Hooks  - useEffect](https://www.crisgon.dev/iniciando-com-react-hooks-useeffect/)
* [iniciando com React Hooks  - useMemo](https://www.crisgon.dev/iniciando-com-react-hooks-usememo/)



Estamos sempre procurando alternativas para deixar nossas aplicações cada vez melhores e uma das formas de fazer isso é as tornando performáticas.

Anos atrás quando se falava no assunto performance no frontend as únicas coisas que as pessoas pensavam eram no tamanho das imagens, no tamanho do seu css minificado e no tamanho do seu javascript, também minificado. Porém, isso mudou bastante! Mas isso não quer dizer que tudo que citei anteriormente tenha deixado de ter atenção, na verdade, tudo isso se tornou o mínimo esperado. O foco agora são nas informações que aparecem depois que sua aplicação já foi carregada, pois, as aplicações frontend ganharam uma grande responsabilidade ao lidar e manipular grandes massas de dados complexos.