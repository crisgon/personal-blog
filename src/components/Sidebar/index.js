import React from "react";

import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import NavLinks from "../NavLinks";

import * as S from "./styled";

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.SidebarGroup>
      <Profile />
      <SocialLinks />
      <NavLinks />
    </S.SidebarGroup>
  </S.SidebarWrapper>
);

export default Sidebar;
