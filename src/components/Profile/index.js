import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Avatar from "../Avatar";

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styled";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        duration={0.6}
        bg={getThemeColor()}
      >
        <S.ProfileTitle>{title}</S.ProfileTitle>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
