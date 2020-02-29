import styled from "styled-components";
import media from "styled-media-query";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;

  ${media.lessThan("small")`
    flex-direction: column;
  `}

  a {
    border-bottom: 1px dashed var(--linkColor);
    color: var(--linkColor);
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const About = styled.div`
  width: 40%;
  height: 100%;

  ${media.lessThan("small")`
    width: 100%;
  `}
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: var(--black);
`;

export const Text = styled.p`
  color: var(--black);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.069rem;
`;

export const TimelineContainer = styled.div`
  width: 55%;

  ${media.lessThan("small")`
    width: 100%;
  `}
`;

export const SkillsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;

  li {
    width: 50px;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
