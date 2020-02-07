import React from "react";

import PostCard from "../PostCard";

import * as S from "./styled";

const PostList = ({ allPosts }) => {
  return (
    <S.ListWrapper>
      {allPosts.map(
        (
          {
            node: {
              timeToRead,
              frontmatter: { category, date, resume, tagColor, title },
              fields: { slug }
            }
          },
          index
        ) => (
          <PostCard
            key={index}
            slug={slug}
            title={title}
            date={date}
            timeToRead={timeToRead}
            category={category}
            tagColor={tagColor}
            resume={resume}
          />
        )
      )}
    </S.ListWrapper>
  );
};

export default PostList;
