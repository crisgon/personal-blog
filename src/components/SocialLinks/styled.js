import styled from "styled-components";
import media from "styled-media-query";

export const SocialList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: space-around;

  ${media.lessThan("large")`
    width: 80%;
    justify-content: space-between;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  color: var(--darkRed);
  transition: all 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;
`;
