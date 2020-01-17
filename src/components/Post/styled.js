import styled from "styled-components";

export const PostHeader = styled.header`
  color: #1e272e;
  margin: auto;
  max-width: 90rem;
  padding: 3rem 3rem 0;
  position: relative;

  &:after {
    content: "";
    width: 90%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: -0.3rem;
    left: 4.5rem;
  }
`;

export const PostTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  position: relative;

  &:after {
    content: "";
    width: 80px;
    height: 3px;
    background-color: #e74c3c;
    position: absolute;
    bottom: -0.3rem;
    left: 1.5rem;
  }
`;

export const PostResume = styled.h2`
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 100;
  padding: 1rem 1.4rem;
`;

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
`;

export const PostMainContent = styled.section`
  margin: auto;
  max-width: 90rem;
  padding: 1rem 3rem;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #1e272e;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #fff;
    border-left: 0.3rem solid #e74c3c;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #e74c3c;
    color: #e74c3c;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  cursor: pointer;
`;
