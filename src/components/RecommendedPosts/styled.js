import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const RecommendedPosts = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(GatsbyLink)`
  color: #e74c3c;
  text-decoration: none;

  &.previous {
    border-right: 1px solid #38444d;
  }
  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`;
