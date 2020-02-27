import styled from "styled-components";
import media from "styled-media-query";

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 100%;
  padding: 1rem;

  ${media.lessThan("large")`
    padding: 1rem;
    max-width: 100%;
  `}

  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`;

export const CommentsTitle = styled.h2`
  color: var(--black);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`;
