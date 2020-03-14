import React from "react";

import SEO from "../components/seo";
import NotFoundImage from "../components/NotFoundImage";

import * as S from "../components/404/styled";

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <S.NotFoundContainer>
      <NotFoundImage />

      <S.NotFoundMessage>
        Ops! O que você procura talvez não exista... Que tal voltar para o
        <S.Link to="/"> blog</S.Link>?
      </S.NotFoundMessage>
    </S.NotFoundContainer>
  </>
);
export default NotFoundPage;
