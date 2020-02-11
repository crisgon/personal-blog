import React from "react";
import PropTypes from "prop-types";
import { TransitionPortal } from "gatsby-plugin-transition-link";

import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";
import NavBar from "../NavBar";

import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
        <NavBar />
      </TransitionPortal>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
