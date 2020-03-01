import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PostLink = styled(AniLink)`
  text-decoration: none;
  color: var(--black);
`;

export const PostCardContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: var(--postCardBackground);
  margin-bottom: 0.5rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;

  ${media.greaterThan("medium")`
    body#grid & {
      height: 300px;
    }
  `}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.35rem;
    height: 100%;
    transform: translateX(-110%);
    background-color: ${props => props.tagColor || "var(--sidebarBackground)"};
    transition: all 0.2s;

    body#grid & {
      width: 100%;
      height: 0.35rem;
    }
  }

  &:hover {
    transform: translateX(5px);

    &:before {
      transform: translateX(0);
    }
  }
`;

export const PostTitle = styled.h1`
  color: var(--titleColor);
  font-size: 1.5rem;
  font-weight: 00;
  padding: 0.5rem 0;
`;

export const PostTime = styled.time`
  font-size: 0.9rem;
`;

export const PostTag = styled.span`
  font-size: 0.9rem;
  padding: 0.05rem 0.5rem;
  margin: 0 0.5rem;
  color: var(--white);
  background-color: ${props => props.tagColor || "var(--sidebarBackground)"};

  ${media.lessThan("small")`
    margin: .5rem 0;
    `}
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTimeAndTag = styled.div`
  padding: 0.5rem 0;

  ${media.lessThan("small")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `}
`;

export const PostResume = styled.p`
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 1.2;
  word-break: break-all;
`;
