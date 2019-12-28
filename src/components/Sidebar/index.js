import React from "react";
import Profile from "../Profile";
import SocialLinks from "../SocialLinks";

import * as S from "./styled";

const Sidebar = () => (
  <S.Wrapper>
    <Profile />
    <SocialLinks />
  </S.Wrapper>
);

export default Sidebar;
