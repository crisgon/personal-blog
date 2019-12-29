import React from "react";

import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Search } from "styled-icons/remix-line/Search";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { UpArrowAlt as Up } from "styled-icons/boxicons-regular/UpArrowAlt";

import * as S from "./styled";

const NavBar = () => (
  <S.NavBar>
    <S.NavBarItem title="Pesquisar">
      <S.NavBarLink to="/search">
        <S.IconWrapper>
          <Search />
        </S.IconWrapper>
      </S.NavBarLink>
    </S.NavBarItem>

    <S.NavBarItem title="Mudar tema">
      <S.IconWrapper>
        <Sun />
      </S.IconWrapper>
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

export default NavBar;
