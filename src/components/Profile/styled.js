import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${media.lessThan("large")`
    width: 200px;
    height: 100px;
    padding: .5rem;
  `}

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  transition: all 0.2s;

  &:hover {
    color: var(--darkRed);
  }
`;

export const ProfileTitle = styled.h1`
  font-size: 1.2rem;

  ${media.lessThan("large")`
  font-size: 1rem;
  `}
`;

export const ProfilePosition = styled.h2`
  font-size: 0.9rem;
  padding: 0.5rem 0;

  ${media.lessThan("large")`
  font-size: .7rem;
  `}
`;

export const ProfileDescription = styled.p`
  color: var(--darkRed);
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1rem;

  ${media.lessThan("large")`
    display: none;
  `}
`;
