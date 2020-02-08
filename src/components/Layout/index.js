import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";
import NavBar from "../NavBar";

import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <Sidebar />
      <NavBar />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
