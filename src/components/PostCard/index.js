import React from "react";
import PropTypes from "prop-types";

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled";

const PostCard = ({
  slug,
  tagColor,
  title,
  date,
  timeToRead,
  category,
  resume
}) => (
    <S.PostLink
      to={slug}
      fade
      duration={0.6}
      bg={getThemeColor()}
    >
      <S.PostCardContainer tagColor={tagColor}>
        <S.PostInfo>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostTimeAndTag>
            <S.PostTime>
              {date} {timeToRead && <spa>| {timeToRead} min de Leitura</spa>}
            </S.PostTime>
            <S.PostTag tagColor={tagColor}>{category}</S.PostTag>
          </S.PostTimeAndTag>
        </S.PostInfo>

        <S.PostResume>{resume}</S.PostResume>
      </S.PostCardContainer>
    </S.PostLink>
  );

PostCard.prototype = {
  slug: PropTypes.string.isRequired,
  tagColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired
};

export default PostCard;
