import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";

import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <Sidebar />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
