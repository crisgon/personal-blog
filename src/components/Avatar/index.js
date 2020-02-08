import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styled";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return <S.AvatarPicture fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
