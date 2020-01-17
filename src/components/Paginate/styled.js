import styled, { keyframes } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Paginate = styled.div`
  width: 100%;
  height: 50px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const linkAnimation = keyframes`
  0% {
    transform: translateX(-2px);
  }
  33% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(2px);
  }
`;
export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  color: #1e272e;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    animation: ${linkAnimation} 0.5s infinite alternate;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
