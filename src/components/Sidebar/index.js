import React from "react";

import Profile from "../Profile";
import SocialLinks from "../SocialLinks";
import NavLinks from "../NavLinks";
import NavBar from "../NavBar";

import * as S from "./styled";

const Sidebar = () => (
  <S.Wrapper>
    <S.Group>
      <Profile />
      <SocialLinks />
      <NavLinks />
    </S.Group>

    <S.Group>
      <NavBar />
    </S.Group>
  </S.Wrapper>
);

export default Sidebar;
