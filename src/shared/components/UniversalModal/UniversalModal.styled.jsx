import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  background-color: ${theme.colors.backdrop};
  backdrop-filter: blur(4px);
  overflow: hidden;
`;

export const ModalBox = styled.div`
  border-radius: 40px;
  background-color: ${theme.colors.white};
  /* min-width: 200px;
  min-height: 150px; */
  padding: 24px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;


  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
`;

export const ModalBody = styled.div`
  //comment
  /* width: 100%; */
  /* text-align: center; */
`;

export const CloseModalBtn = styled.button`
  width: 24px;
  height: 24px;
`;
