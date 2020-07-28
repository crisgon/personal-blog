import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
color: #1e272e;
font-family: 'Roboto', sans-serif;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}

  body.dark {
    --borders: #38444d;
    --postCardBackground: #272727;
    --sidebarBackground: #040404;
    --sidebarShadow: #151414;
    --highlight: #000;
    --background: #121212;
    --white: #fff;
    --black: #fff;
    --gray: #ccc;
    --darkRed: #7f8c8d;
    --linkColor: #e74c3c;
    --paginateColor: #fff;
    --titleColor: #ccc;
    --quoteBackground: #38444d;
    --notFoundbackground: #121212;
  }  

  body.light {
    --borders: #38444d;
    --postCardBackground: #fff;
    --sidebarBackground: #e74c3c;
    --sidebarShadow: #bdc3c7;
    --highlight: #e74c3c;
    --background: #f2f2f2;
    --white: #fff;
    --black: #1e272e;
    --gray: #ccc;
    --darkRed: #9a271b;
    --linkColor: #e74c3c;
    --paginateColor: #1e272e;
    --titleColor: #e74c3c;
    --quoteBackground: #ddd;
    --notFoundbackground: #ffffff;
  }

  body.yellow {
    --borders: #38444d;
    --postCardBackground: #fff;
    --sidebarBackground: #f39c12;
    --sidebarShadow: #bdc3c7;
    --highlight: #f39c12;
    --background: #f2f2f2;
    --white: #fff;
    --black: #1e272e;
    --gray: #ccc;
    --darkRed: #b1710c;
    --linkColor: #f39c12;
    --paginateColor: #1e272e;
    --titleColor: #f39c12;
    --quoteBackground: #ddd;
    --notFoundbackground: #ffffff;
  }

  body.blue {
    --borders: #38444d;
    --postCardBackground: #fff;
    --sidebarBackground: #3498db;
    --sidebarShadow: #bdc3c7;
    --highlight: #3498db;
    --background: #f2f2f2;
    --white: #fff;
    --black: #1e272e;
    --gray: #ccc;
    --darkRed: #1a6190;
    --linkColor: #3498db;
    --paginateColor: #1e272e;
    --titleColor: #3498db;
    --quoteBackground: #ddd;
    --notFoundbackground: #ffffff;
  }

  body.purple {
    --borders: #38444d;
    --postCardBackground: #fff;
    --sidebarBackground: #8e44ad;
    --sidebarShadow: #bdc3c7;
    --highlight: #8e44ad;
    --background: #f2f2f2;
    --white: #fff;
    --black: #1e272e;
    --gray: #ccc;
    --darkRed: #511d67;
    --linkColor: #8e44ad;
    --paginateColor: #1e272e;
    --titleColor: #8e44ad;
    --quoteBackground: #ddd;
    --notFoundbackground: #ffffff;
  }
`;

export default GlobalStyles;
