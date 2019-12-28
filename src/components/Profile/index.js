import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Avatar from "../Avatar";

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
      <S.ProfileLink>
        <S.ProfileTitle>{title}</S.ProfileTitle>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>

      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
