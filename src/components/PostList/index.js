import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PostCard from "../PostCard";

const PostList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              timeToRead
              frontmatter {
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                resume
                tagColor
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const allPosts = allMarkdownRemark.edges;

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
