import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Calendar } from "styled-icons/feather/Calendar";
import { AccessTime as Timer } from "styled-icons/material/AccessTime";

import * as S from "../components/Post/styled";

const Post = ({ data }) => {
  const postData = data.markdownRemark;
  return (
    <Layout>
      <SEO title={postData.frontmatter.title} />
      <S.PostHeader>
        <S.PostTitle>{postData.frontmatter.title}</S.PostTitle>
        <S.PostDate>
          <S.IconWrapper>
            <Calendar />
          </S.IconWrapper>
          {postData.frontmatter.date} &nbsp;|&nbsp;
          <S.IconWrapper>
            <Timer />
          </S.IconWrapper>
          {postData.timeToRead} min de leitura
        </S.PostDate>
        <S.PostResume>{postData.frontmatter.resume}</S.PostResume>
      </S.PostHeader>
      <S.PostMainContent>
        <div dangerouslySetInnerHTML={{ __html: postData.html }}></div>
      </S.PostMainContent>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        resume
      }
      timeToRead
    }
  }
`;

export default Post;
