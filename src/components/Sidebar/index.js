import React from "react";

import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import NavLinks from "../NavLinks";

import * as S from "./styled";

const Sidebar = () => (
  <S.Wrapper>
    <Profile />
    <SocialLinks />
    <NavLinks />
  </S.Wrapper>
);

export default Sidebar;
