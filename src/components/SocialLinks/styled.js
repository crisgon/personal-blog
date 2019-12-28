import styled from "styled-components";

export const SocialList = styled.ul`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s;

  &:hover {
    color: #fff;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
