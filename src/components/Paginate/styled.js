import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Paginate = styled.div`
  width: 100%;
  height: 50px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  color: #1e272e;
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
