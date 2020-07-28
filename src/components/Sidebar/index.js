import React from "react";

import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import NavLinks from "../NavLinks";

import * as S from "./styled";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.SidebarGroup>
        <Profile />
        <SocialLinks />
        <NavLinks />
      </S.SidebarGroup>

      <S.SidebarSVG>
        <svg viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,208C384,213,480,139,576,101.3C672,64,768,64,864,64C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </S.SidebarSVG>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
