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

export const ModalDelete = () => {
  return (
    <>
      <Backdrop>
        <Modal>
          <TitleText>Delete adverstiment?</TitleText>
          <DeleteText>
                Are you sure you want to delete <DeleteTextSpan>“Cute dog looking for a home”?</DeleteTextSpan>   
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