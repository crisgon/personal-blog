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

export const SidebarGroup = styled.div`
  ${media.lessThan("large")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;
