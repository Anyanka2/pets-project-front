import styled from "styled-components";
import { theme } from "../styles/theme";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;
  overflow-y: auto;
`;