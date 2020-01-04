import styled from "styled-components";
import { Link } from "gatsby";

export const PostLink = styled(Link)`
  text-decoration: none;
  color: #1e272e;
`;

export const PostCardContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.35rem;
    height: 100%;
    transform: translateX(-100%);
    background-color: ${props => props.tagColor};
    transition: all 0.2s;
  }

  &:hover {
    transform: translateX(5px);

    &:before {
      transform: translateX(0);
    }
  }
`;

export const PostTitle = styled.h1`
  color: #e74c3c;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem 0;
`;

export const PostTime = styled.time`
  font-size: 0.9rem;
`;

export const PostTag = styled.span`
  font-size: 0.9rem;
  padding: 0.05rem 0.5rem;
  margin: 0 0.5rem;
  color: #fff;
  background-color: ${props => props.tagColor};
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTimeAndTag = styled.div`
  padding: 0.5rem 0;
`;

export const PostResume = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.2;
`;
