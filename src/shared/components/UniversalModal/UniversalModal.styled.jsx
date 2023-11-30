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
  position: relative;
  border-radius: 20px;
  background-color: ${theme.colors.white};
  padding: 44px 12px 16px 12px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding: 32px 32px 24px 32px;
  }
`;

export const ModalBody = styled.div`
//comment
/* width: 100%; */
/* text-align: center; */
`;

export const CloseModalBtn = styled.button`
position: absolute;
top: 12px;
right: 12px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    top: 23px;
    right: 26px;
  }
`;
