import {
  Modal,
  TitleText,
  DeleteText,
  DeleteTextSpan,
  CancelButton,
  DeleteButton,
  DeleteButtonText,
  ButtonContainer,
} from "./ModalDelete.styled";

import { ReactComponent as DeleteIconSVG } from "../../assets/icons/trash.svg";
import { Backdrop } from "../../shared/components/Backdrop.styled";

export const ModalDelete = () => {
  return (
    <>
      <Backdrop>
        <Modal>
          <TitleText>Delete adverstiment?</TitleText>
          <DeleteText>
            Are you sure you want to delete <DeleteTextSpan>“Cute dog looking for a home”?</DeleteTextSpan>
            {"\n"}
            You can't undo this action.    
          </DeleteText>
          <ButtonContainer>
            <CancelButton>Cancel</CancelButton>
            <DeleteButton>
              <DeleteButtonText>
                Yes
                <DeleteIconSVG />
              </DeleteButtonText>
            </DeleteButton>
          </ButtonContainer>
        </Modal>
      </Backdrop>
    </>
  );
};