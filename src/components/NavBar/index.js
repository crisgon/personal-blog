import React, { useState, useEffect } from "react";

import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Moon } from "styled-icons/boxicons-solid/Moon";
import { Search } from "styled-icons/remix-line/Search";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { UpArrowAlt as Up } from "styled-icons/boxicons-regular/UpArrowAlt";

import * as S from "./styled";

const NavBar = () => {
  const [theme, setTheme] = useState(null);

  const isDark = theme === "dark";

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.NavBar>
      <S.NavBarItem title="Pesquisar">
        <S.NavBarLink to="/search">
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

      <S.NavBarItem title="Voltar para o topo">
        <S.IconWrapper>
          <Up />
        </S.IconWrapper>
      </S.NavBarItem>

      <S.NavBarItem title="Mudar visualização">
        <S.IconWrapper>
          <Grid />
        </S.IconWrapper>
      </S.NavBarItem>
    </S.NavBar>
  );
};

export default NavBar;
