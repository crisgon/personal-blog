import React from "react";

import * as S from "./styled";

const PostCard = () => (
  <S.PostLink>
    <S.PostCardContainer tagColor="#fed330">
      <S.PostInfo>
        <S.PostTitle>Coerção De Tipos Em Javascript</S.PostTitle>
        <S.PostTimeAndTag>
          <S.PostTime>28 de Maio de 2018</S.PostTime>
          <S.PostTag tagColor="#fed330">JS</S.PostTag>
        </S.PostTimeAndTag>
      </S.PostInfo>

      <S.PostResume>
        Comecei a leitura do excelente livro You Dont Know JS e resolvi ir
        escrevendo pequenos posts sobre as coisas interessantes que for
        aprendendo. Hoje vou falar sobre coerção de tipos, esse é um assunto ...
      </S.PostResume>
    </S.PostCardContainer>
  </S.PostLink>
);

export default PostCard;
