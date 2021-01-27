import React from "react";
import { graphql } from "gatsby";
import { Calendar } from "styled-icons/feather/Calendar";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { AccessTime as Timer } from "styled-icons/material/AccessTime";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Comments from "../components/Comments";

import * as S from "../components/Post/styled";

const Post = ({ data, pageContext }) => {
  const postData = data.markdownRemark;
  const {slug} = pageContext;


  return (
    <Layout>
      <SEO
        title={postData.frontmatter.title}
        description={postData.frontmatter.resume}
        image={postData.frontmatter.image}
      />
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

        <S.SocialShareButtons>
          <S.TwitterShareButton
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${postData.frontmatter.title} \nBy @Gonkristiano\nhttps://www.crisgon.dev${slug}`)}`} 
              target="_blank"
              rel="noopener noreferrer">
              <S.IconWrapper>
                <Twitter /> 
              </S.IconWrapper>
              Tweet
           </S.TwitterShareButton>

          <S.FacebookShareButton target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.crisgon.dev${slug}`}>
            <S.IconWrapper>
              <Facebook /> 
            </S.IconWrapper>

            Compartilhar
        </S.FacebookShareButton>

        <S.LinkedinShareButton target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.crisgon.dev${slug}`}>
            <S.IconWrapper>
              <Linkedin /> 
            </S.IconWrapper>

            Compartilhar
        </S.LinkedinShareButton>

      </S.SocialShareButtons>
      </S.PostHeader>
      <S.PostMainContent>
        <div dangerouslySetInnerHTML={{ __html: postData.html }}></div>
      </S.PostMainContent>
      <Comments url={postData.fields.slug} title={postData.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        resume
        image
      }
      timeToRead
    }
  }
`;

export default Post;
