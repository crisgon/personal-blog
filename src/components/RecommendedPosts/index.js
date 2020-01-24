import React from "react";

import * as S from "./styled";

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedPosts>
    {previous && (
      <S.Link to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.Link>
    )}

    {next && (
      <S.Link to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.Link>
    )}
  </S.RecommendedPosts>
);

export default RecommendedPosts;
