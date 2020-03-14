import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const NotFoundContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--notFoundbackground);
  overflow: hidden;

  svg {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const NotFoundMessage = styled.h1`
  max-width: 400px;
`;

export const Link = styled(AniLink)`
  color: #e74c3c;
  font-weight: bolder;
  position: relative;
`;
