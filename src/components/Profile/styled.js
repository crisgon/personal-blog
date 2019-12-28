import styled from "styled-components";
import { Link } from "gatsby";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProfileTitle = styled.h1`
  font-size: 1.2rem;
`;

export const ProfilePosition = styled.h2`
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;

export const ProfileDescription = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1rem;
`;
