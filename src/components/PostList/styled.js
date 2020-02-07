import styled from "styled-components";

export const ListWrapper = styled.section`
  padding: 0.5rem 1rem;

  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
