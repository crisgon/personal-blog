import styled from "styled-components";
import media from "styled-media-query";
import Img from "gatsby-image";

export const AvatarPicture = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;

  ${media.lessThan("large")`
    width: 45px;
  `}
`;
