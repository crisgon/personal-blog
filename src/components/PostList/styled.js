import styled from "styled-components";
import media from "styled-media-query";

export const ListWrapper = styled.section`
  padding: 0.5rem 1rem;

  ${media.greaterThan("medium")`
    body#grid & {
      display: grid;
      grid-area: posts;
      grid-gap: 10px;

        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  `}
`;