import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostList from "../components/PostList";

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <PostList allPosts={postList} />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tagColor
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            resume
            title
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
