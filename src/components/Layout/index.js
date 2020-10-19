import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TransitionPortal } from "gatsby-plugin-transition-link";

import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";
import NavBar from "../NavBar";
import LockScreen from "../LockScreen";

import * as S from "./styled";

const Layout = ({ children }) => {
  let konamiCode = "";
  let konamiTimer = null;

  const [showPadLock, setShowPadLock] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", handleKonamiCode);
  }, []);

  function handleKonamiCode(e) {
    konamiCode += e.key;
    if (konamiCode === "admin" && window !== "undefined") {
      setShowPadLock(true);

      setTimeout(() => {
        window.open("https://www.crisgon.dev/admin", "_blank");
        setShowPadLock(false);
      }, 2500);
    }

    clearTimeout(konamiTimer);

    konamiTimer = setTimeout(() => {
      konamiCode = "";
    }, 3000);
  }
  return (
    <S.Wrapper>
      <GlobalStyles />
      {showPadLock ? <LockScreen /> : null}
      <TransitionPortal level="top">
        <Sidebar />
        <NavBar />
      </TransitionPortal>

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
