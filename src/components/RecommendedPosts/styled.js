import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const RecommendedPostsWrapper = styled.div`
  max-width: 80rem;
  padding: 1rem 3rem;
`;

export const RecommendedPostsTitle = styled.h2`
  font-size: 2rem;
`;

export const RecommendedPosts = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Link = styled(GatsbyLink)`
  width: 48%;
  padding: 0.5rem;
  align-self: stretch;
  background-color: var(--white);
  color: var(--black);
  text-decoration: none;

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    padding: 1rem 0;
  }
`;
