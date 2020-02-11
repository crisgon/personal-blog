import React from "react";

import links from "./content";

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled";

const NavLinks = () => (
  <S.Nav>
    <S.NavList>
      {links.map((link, i) => (
        <S.NavItem key={i}>
          <S.NavLink
            to={link.url}
            activeClassName="active"
            cover
            direction="left"
            duration={0.6}
            bg={getThemeColor()}
          >
            {link.label}
          </S.NavLink>
        </S.NavItem>
      ))}
    </S.NavList>
  </S.Nav>
);

export default NavLinks;
