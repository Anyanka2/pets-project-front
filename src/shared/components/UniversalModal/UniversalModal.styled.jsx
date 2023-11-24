import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background-color: #51515199;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalBox = styled.div`
  border-radius: 40px;
  background-color: white;
  min-width: 200px;
  min-height: 150px;
  padding: 24px;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
//comment
width: 100%;
text-align: center;
`;

export const CloseModalBtn = styled.button`
  width: 24px;
  height: 24px;
`;
