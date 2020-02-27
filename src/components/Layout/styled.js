import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px calc(100% - 300px);
  grid-template-rows: 1fr 50px;
  grid-template-areas: "Sidebar Main" "Navbar Main";

  ${media.lessThan("large")`
    grid-template-columns: 100%;
    grid-template-rows: 100px 1fr 50px;
    grid-template-areas: "Sidebar" "Main" "Navbar";
  `}
`;

export const Main = styled.main`
  background-color: var(--background);
  grid-area: Main;

  ${media.greaterThan("medium")`
  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  `}
`;
