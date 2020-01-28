import React from "react";

import * as S from "./styled";

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedPostsWrapper>
    <S.RecommendedPostsTitle>Artigos Recomendados</S.RecommendedPostsTitle>
    <S.RecommendedPosts>
      {previous && (
        <S.Link to={previous.fields.slug} className="previous">
          <h3>{previous.frontmatter.title}</h3>
          <p>{previous.frontmatter.resume}</p>
        </S.Link>
      )}

      {next && (
        <S.Link to={next.fields.slug} className="next">
          <h3>{next.frontmatter.title}</h3>
          <p>{next.frontmatter.resume}</p>
        </S.Link>
      )}
    </S.RecommendedPosts>
  </S.RecommendedPostsWrapper>
);

export default RecommendedPosts;
