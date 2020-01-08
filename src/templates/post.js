import React from "react";
import { graphql } from "gatsby";

const Post = ({ data }) => {
  const postData = data.markdownRemark;
  return (
    <>
      <h1>{postData.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.html }}></div>
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Post;
