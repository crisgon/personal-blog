import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  grid-column: 2;
  background-color: #f2f2f2;
`;
