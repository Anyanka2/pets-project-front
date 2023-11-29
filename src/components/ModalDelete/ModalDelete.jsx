import {
  Modal,
  TitleText,
  DeleteText,
  CancelButton,
  DeleteButton,
  DeleteButtonText,
  ButtonContainer,
} from "./ModalDelete.styled";

export const ModalDelete = () => {
  return (
    <>
      <Backdrop>
        <Modal>
          <TitleText>Delete adverstiment?</TitleText>
          <DeleteText>
                Are you sure you want to delete  “Cute dog looking for a home”? 
                You can`t undo this action.    
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