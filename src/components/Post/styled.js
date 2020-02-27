import styled from "styled-components";
import media from "styled-media-query";

export const PostHeader = styled.header`
  color: var(--black);
  margin: auto;
  position: relative;
  max-width: 100%;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--gray);
    position: absolute;
    bottom: -0.3rem;
    left: 5px;
  }

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`;

export const PostTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem 0;
  position: relative;

  &:after {
    content: "";
    width: 80px;
    height: 3px;
    background-color: var(--linkColor);
    position: absolute;
    bottom: -0.3rem;
    left: 1.5rem;
  }

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`;

export const PostResume = styled.h2`
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 100;
  padding: 1rem 1.4rem;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`;

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0.5rem 1.4rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`;

export const PostMainContent = styled.section`
  margin: auto;
  max-width: 100%;
  padding: 1rem 0;

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}

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
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
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
    margin: 0 1.5rem 1.6rem;
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

    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    width: 95%;
    color: var(--white);
    background-color: var(--quoteBackground);
    border-left: 0.3rem solid var(--sidebarBackground);
    padding: 0.5rem;
    margin: 3.125rem auto;
    margin-left: 1.5rem;
  }
  hr {
    border: 1px solid var(--borders);
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
    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;

    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;

    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
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

  .gatsby-resp-image-figure {
    padding: 1rem 0;
    text-align: center;
  }
  .gatsby-resp-image-figcaption {
    padding: 0.5rem 0;
    font-style: italic;
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
    max-width: 100%;
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--linkColor);
    color: var(--linkColor);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--white);
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
