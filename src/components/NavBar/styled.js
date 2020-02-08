import styled from "styled-components";
import media from "styled-media-query";
import { Link as GatsbyLink } from "gatsby";

export const NavBar = styled.div`
  width: 300px;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: var(--postCardBackground);
  color: var(--sidebarBackground);
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: Navbar;

  ${media.lessThan("large")`
    width: 100%;
    z-index: 2;
  `}
`;

export const NavBarLink = styled(GatsbyLink)`
  color: var(--sidebarBackground);
`;

export const NavBarItem = styled.span`
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  &.changeDisplay {
    ${media.lessThan("large")`
      display: none;
    `}
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
