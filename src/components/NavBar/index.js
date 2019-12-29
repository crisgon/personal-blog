import React from "react";

import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Search } from "styled-icons/remix-line/Search";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { UpArrowAlt as Up } from "styled-icons/boxicons-regular/UpArrowAlt";

import * as S from "./styled";

const Navbar = () => (
  <S.Navbar>
    <S.Item title="Pesquisar">
      <S.Link to="/search">
        <S.IconWrapper>
          <Search />
        </S.IconWrapper>
      </S.Link>
    </S.Item>

    <S.Item title="Mudar tema">
      <S.IconWrapper>
        <Sun />
      </S.IconWrapper>
    </S.Item>

    <S.Item title="Voltar para o topo">
      <S.IconWrapper>
        <Up />
      </S.IconWrapper>
    </S.Item>

    <S.Item title="Mudar visualização">
      <S.IconWrapper>
        <Grid />
      </S.IconWrapper>
    </S.Item>
  </S.Navbar>
);

export default Navbar;
