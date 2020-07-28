import styled from "styled-components";
import media from "styled-media-query";

export const SidebarWrapper = styled.aside`
  width: 300px;
  height: calc(100% - 50px);
  position: fixed;
  background-color: var(--sidebarBackground);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px 0px var(--sidebarShadow);
  grid-area: Sidebar;

  ${media.lessThan("large")`
    width: 100%;
    height: 100px;
    z-index: 2;
  `}
`;

export const ChangePalette = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--postCardBackground);

  svg {
    cursor: pointer;
  }

  ul {
    z-index: ${(props) => (props.open ? "1" : "-1")};
    height: ${(props) => (props.open ? "105px" : "0px")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    background-color: var(--postCardBackground);
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0.25rem;
    position: absolute;
    top: 40px;
    right: 0px;
    transition: all 0.4s;
  }
`;

export const Palette = styled.li`
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  transition: all 0.2s;

  & + li {
    margin-top: 5px;
  }

  &:hover {
    border: 2px solid var(--postCardBackground);
    cursor: pointer;
  }
`;

export const SidebarSVG = styled.div`
  position: relative;
  svg {
    position: absolute;
    bottom: 0;
    path {
      fill: var(--postCardBackground);
    }
  }

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const SidebarGroup = styled.div`
  ${media.lessThan("large")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;
