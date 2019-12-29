import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  color: #e74c3c;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled(GatsbyLink)`
  color: #e74c3c;
`;

export const Item = styled.span`
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
