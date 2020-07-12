import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const Nav = styled.nav`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const NavList = styled.ul`
  padding: 0.5rem;
  text-align: center;
`;

export const NavItem = styled.li`
  width: 100%;
  overflow: hidden;
  padding: 0.5rem;

  .active {
    color: var(--white);
  }
`;

export const NavLink = styled(AniLink)`
  text-decoration: none;
  color: var(--darkRed);
  font-weight: 300;
  position: relative;

  &:hover {
    &:after,
    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:after,
  &:before {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  &:after {
    content: "]";
    margin-left: 10px;
    transform: translateX(-20px);
  }

  &:before {
    content: "[";
    margin-right: 10px;
    transform: translateX(20px);
  }
`;
