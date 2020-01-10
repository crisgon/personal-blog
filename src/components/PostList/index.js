import React from "react";

import PostCard from "../PostCard";

const PostList = ({ allPosts }) => {
  return (
    <>
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
    </>
  );
};

export default PostList;
