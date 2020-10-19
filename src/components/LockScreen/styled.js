import styled from "styled-components";

export const LockScreen = styled.section`
  width: 500px;
  height: 500px;
  z-index: 9999;
  border-radius: 100%;
  background-color: var(--sidebarBackground);
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: scale 1.5s;
  display: flex;

  @keyframes scale {
    from {
      width: 0;
      height: 0;
    }

    to {
      width: 500px;
      height: 500px;
    }
  }
`;
