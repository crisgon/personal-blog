import React, { useState, useEffect } from "react";

import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Moon } from "styled-icons/boxicons-solid/Moon";
import { Search } from "styled-icons/remix-line/Search";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { FormatListBulleted as List } from "styled-icons/material/FormatListBulleted";
import { UpArrowAlt as Up } from "styled-icons/boxicons-regular/UpArrowAlt";
import { Home } from "styled-icons/remix-line/Home";

import getThemeColor from "../../utils/getThemeColor";
import scrollToTop from "../../utils/scrollToTop";

import * as S from "./styled";

const NavBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDark = theme === "dark";
  const isGrid = display === "grid";

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.NavBar>
      <S.NavBarItem title="Voltar para o Início">
        <S.NavBarLink
          to="/"
          cover
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
        >
          <S.IconWrapper>
            <Home />
          </S.IconWrapper>
        </S.NavBarLink>
      </S.NavBarItem>

      <S.NavBarItem title="Pesquisar">
        <S.NavBarLink
          to="/search"
          cover
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
        >
          <S.IconWrapper>
            <Search />
          </S.IconWrapper>
        </S.NavBarLink>
      </S.NavBarItem>

      <S.NavBarItem
        title={isDark ? "Desativar Dark Mode" : "Ativar Dark Mode"}
        onClick={() => {
          window.__setPreferredTheme(isDark ? "light" : "dark");
        }}
      >
        <S.IconWrapper>{isDark ? <Sun /> : <Moon />}</S.IconWrapper>
      </S.NavBarItem>

      <S.NavBarItem title="Voltar para o topo" onClick={scrollToTop}>
        <S.IconWrapper>
          <Up />
        </S.IconWrapper>
      </S.NavBarItem>

      <S.NavBarItem
        title="Mudar visualização"
        onClick={() => {
          window.__setPreferredDisplay(isGrid ? "list" : "grid");
        }}
        className="changeDisplay"
      >
        <S.IconWrapper>{isGrid ? <List /> : <Grid />}</S.IconWrapper>
      </S.NavBarItem>
    </S.NavBar>
  );
};

export default NavBar;
