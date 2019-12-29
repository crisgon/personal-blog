import React from "react";

import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import NavLinks from "../NavLinks";
import NavBar from "../NavBar";

import * as S from "./styled";

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.SidebarGroup>
      <Profile />
      <SocialLinks />
      <NavLinks />
    </S.SidebarGroup>

    <S.SidebarGroup>
      <NavBar />
    </S.SidebarGroup>
  </S.SidebarWrapper>
);

export default Sidebar;
