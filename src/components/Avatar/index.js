import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <S.AvatarPicture fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;
